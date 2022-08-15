import { webkit } from 'playwright';

const browser = await webkit.launch({ headless: false });
const context = await browser.newContext();
const page = await context.newPage();
await page.goto('https://www.whatismybrowser.com/');


