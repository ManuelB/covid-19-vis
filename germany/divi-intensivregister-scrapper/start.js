const fs = require('fs');
const puppeteer = require('puppeteer');

(async() => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.divi.de/register/intensivregister?list[limit]=0');
    const diviTable = await page.evaluate('Array.from(document.querySelectorAll("#dataList tr")).map((tr) => { return Array.from(tr.children).map((td) => { return td.children.length > 0 && td.children[0].tagName === "SPAN" ? td.children[0].className :  td.textContent}).map(s => s.replace(/;/, "").replace(/\\n/g, "").replace(/\\t/g, "")).join(";")}).join("\\n")')
    await browser.close();
    fs.writeFileSync('intensivregister.csv', diviTable);
})();