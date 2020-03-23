const fs = require('fs');

if (typeof require !== 'undefined') XLSX = require('xlsx');
const workbook = XLSX.readFile('../Population_Sex_Age_By_District.xlsx');

const first_sheet_name = workbook.SheetNames[0];

const aAgeKeys = [
    "unter 3 Jahre",
    "3 bis unter 6 Jahre",
    "6 bis unter 10 Jahre",
    "10 bis unter 15 Jahre",
    "15 bis unter 18 Jahre",
    "18 bis unter 20 Jahre",
    "20 bis unter 25 Jahre",
    "25 bis unter 30 Jahre",
    "30 bis unter 35 Jahre",
    "35 bis unter 40 Jahre",
    "40 bis unter 45 Jahre",
    "45 bis unter 50 Jahre",
    "50 bis unter 55 Jahre",
    "55 bis unter 60 Jahre",
    "60 bis unter 65 Jahre",
    "65 bis unter 75 Jahre",
    "75 Jahre und mehr",
    "Insgesamt"
];

/** Example age distribution
 * "Afghanistan": {
    "0-9": 11088731,
    "10-19": 9821561,
    "20-29": 7035871,
    "30-39": 4534646,
    "40-49": 2963460,
    "50-59": 1840199,
    "60-69": 1057497,
    "70-79": 480455,
    "80+": 105925
  },
 */

function getField(oField) {
    if (oField) {
        return typeof oField.v === "string" ? oField.v.trim() : oField.v;
    } else {
        return undefined;
    }
}
/* Get worksheet */
const worksheet = workbook.Sheets[first_sheet_name];
const mPopulation = {};
for (let iRow = 24; iRow < 9689;) {
    try {
        /* Find desired cell */
        const kreisnummer = getField(worksheet['A' + iRow]);
        const kreisname = getField(worksheet['B' + iRow]);

        let mAgeDistribution = {};
        for (let sAgeKey of aAgeKeys) {
            mAgeDistribution[sAgeKey] = parseInt(getField(worksheet['D' + iRow]));
            iRow++;
        }
        let mDistrictPopulation = {
            // "Kreisname": kreisname,
            "0-9": mAgeDistribution["unter 3 Jahre"] + mAgeDistribution["3 bis unter 6 Jahre"] + mAgeDistribution["6 bis unter 10 Jahre"],
            "10-19": mAgeDistribution["10 bis unter 15 Jahre"] + mAgeDistribution["15 bis unter 18 Jahre"] + mAgeDistribution["18 bis unter 20 Jahre"],
            "20-29": mAgeDistribution["20 bis unter 25 Jahre"] + mAgeDistribution["25 bis unter 30 Jahre"],
            "30-39": mAgeDistribution["30 bis unter 35 Jahre"] + mAgeDistribution["35 bis unter 40 Jahre"],
            "40-49": mAgeDistribution["40 bis unter 45 Jahre"] + mAgeDistribution["45 bis unter 50 Jahre"],
            "50-59": mAgeDistribution["50 bis unter 55 Jahre"] + mAgeDistribution["55 bis unter 60 Jahre"],
            "60-69": mAgeDistribution["60 bis unter 65 Jahre"] + Math.round(mAgeDistribution["65 bis unter 75 Jahre"] * 0.5),
            "70-79": Math.round(mAgeDistribution["65 bis unter 75 Jahre"] * 0.5 + mAgeDistribution["75 Jahre und mehr"] * 0.3),
            "80+": Math.round(mAgeDistribution["75 Jahre und mehr"] * 0.7)
        }

        mPopulation[kreisnummer] = mDistrictPopulation;
    } catch (e) {
        console.log("Error on line: " + iRow);
        console.log(e);
    }
}

fs.writeFileSync('../Germany_Kreis_Population.json', JSON.stringify(mPopulation, undefined, "  "));