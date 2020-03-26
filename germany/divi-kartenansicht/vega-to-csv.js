'use strict';

const fs = require('fs');

let rawdata = fs.readFileSync('vega-config.json');
let vegaConfig = JSON.parse(rawdata);

let sGemeinden = "";
let gemeinden = vegaConfig.datasets["data-ee0b5b968b7d39a07b6ff6e094d4e811"];

let oFirstRow = gemeinden[0];
// print header
sGemeinden += Object.keys(oFirstRow).join(",") + "\n";
// print rows
sGemeinden += gemeinden.map(o => Object.values(o).join(",")).join("\n")

fs.writeFileSync('DiviKartenansicht.csv', sGemeinden);