const fs = require('fs');
const puppeteer = require('puppeteer');

(async() => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.divi.de/register/intensivregister?list[limit]=0');
    const diviTable = await page.evaluate('Array.from(document.querySelectorAll("#dataList thead tr, #dataList tbody tr")).map((tr) => { return Array.from(tr.children).map((td, j) => { return td.children.length > 0 && td.children[0].tagName === "SPAN" ? td.children[0].className :  (td.textContent.trim() === "Klinikname" ? "Klinikname;Adresse;Ort" : (j === 0 ? Array.from(td.childNodes).filter((node, i) => node.tagName !== "BR" && (td.childNodes.length == 8 || (i < 2 || i > 4))).map((td) => td.textContent.trim() === "Universitätsmedizin Greifswald" ? "Universitätsmedizin Greifswald;;17475 Greifswald"  : td.textContent.replace(/\\n/g, " ").replace(/;/, "")).filter(s => s.trim() != "").join(";") : td.textContent.replace(/;/, "").replace(/\\n+/g, " ")))}).map((s) => s.replace(/\\t+/g, " ").replace(/ Hyphenator\\d*hide/, "").trim()).join(";")}).join("\\n")')
    await browser.close();
    fs.writeFileSync('intensivregister.csv', diviTable);
})();