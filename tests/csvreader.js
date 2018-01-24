const puppeteer = require('puppeteer');
//const host = "http://localhost:8080";
const host = "http://static.gapminderdev.org/preview/read-from-csv";
const srcPath = "src/";
const csvFolder = 'csv';
const csvBrokenFolder = 'csv-broken';
const regExp = /(?:(timeright-)?(?:timeformat-(.+))?\W)/
const fs = require('fs');
const pageNavigationTimeout = 60000;
const screenShot = false;

const  _getPath = (folder) => `data//${folder}//`;

const tests = [].concat.apply([], [csvFolder, csvBrokenFolder].map((folder) => {
  const path = _getPath(folder);
  return fs.readdirSync(srcPath + path).map((f) => {
    const data = {};  
    const result = regExp.exec(f);
    const reader = result && result[1] ? "csv-time/_in/_columns" : "csv";
    const timeFormat = result && result[2] ? `_state_time_unit=${result[2]};;` : "";
    return {
      folder: folder,
      file: f,
      urlParam: `_model${timeFormat}_data_reader=${reader}&path=${path+f}`,
    };
  });
}));

let errors;

puppeteer.launch().then(async browser => {
  await browser.newPage();
  for (let test of tests) {
    errors = [];
    const page = await browser.newPage();
    page.setDefaultNavigationTimeout(pageNavigationTimeout);
    page.on('console', async msg => {
      if (msg.text().indexOf("AUTOCONFIG") !== -1) console.log(msg.text());
      if (msg.type() === "error") {
        const _msg = msg.args()[0];
        const _prop = await _msg.getProperty("additionalInfo");
        const _val = await _prop.jsonValue() || msg.text();
        if (errors.indexOf(_val)) {
          errors.push(_val);
          console.log(`ERROR: ${_val}`);
        }
      }
    });
    page.on('pageerror', (...args) => console.error('PAGE ERROR:', ...args));
    await console.log(`TEST(${test.folder}): page open for ${test.file}`);
    await page.goto(host + "/bubblechart.html#" + test.urlParam, {waitUntil: 'networkidle0'}).catch(error => console.error(error));
    if (screenShot) await page.screenshot({path: `${test.folder}-${test.file}.png`});
    await page.close();
    await console.log(`TEST(${test.folder}): page close`);
  }
  await browser.close();
  await console.log('browser closed');
}, error => console.error(error));