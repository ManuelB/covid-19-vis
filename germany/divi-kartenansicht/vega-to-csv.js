'use strict';

const fs = require('fs');

let rawdata = fs.readFileSync('2020-03-28-vega-configs.json');
let vegaConfigs = JSON.parse(rawdata);

let sGemeinden = "";
for (let vegaConfig of vegaConfigs) {
    for (let oDataSetKey in vegaConfig.datasets) {
        let gemeinden = vegaConfig.datasets[oDataSetKey];
        if (gemeinden.length > 0 && "gemeindeschluessel" in gemeinden[0]) {

            let oFirstRow = gemeinden[0];
            // print header
            sGemeinden += Object.keys(oFirstRow).join(",") + "\n";
            // print rows
            sGemeinden += gemeinden.map(o => Object.values(o).map(s => typeof s === "string" ? s.replace(",", "") : s).join(",")).join("\n")
        }
    }
}

fs.writeFileSync('DiviKartenansicht.csv', sGemeinden);