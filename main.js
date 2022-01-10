const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  // set window size
  await page.setViewport({ width: 1200, height: 800 })

  // navigate to the page
  await page.goto('https://tontine.cash/');

  // wait for the page to load
  await page.waitForNetworkIdle({ idleTime: 3 * 1000, timeout: 10 * 1000 });

  // await login button to display and click
  const loginModalButton = await page.waitForSelector('div.container > div.stats > div.stats-controls > button.btn.btn-small');
  await loginModalButton.click();

  // await login modal to display
  const modal = await page.waitForSelector('div.container > div.modal > div.modal-inner');

  // wait
  await page.waitForTimeout(3 * 1000);

  // input username
  const usernameInput = await modal.waitForSelector('input[placeholder=email]');
  await usernameInput.type('EMAIL ADDRESS', { delay: 100 });
  
  // wait
  await page.waitForTimeout(10 * 1000);

  // input password
  const passwordInput = await modal.waitForSelector('input[placeholder=password]');
  await passwordInput.type('PASSWORD', { delay: 100 });

  // wait
  await page.waitForTimeout(12 * 1000);

  // click login button
  await modal.$eval('div.container > div.modal > div.modal-inner > div.text-border.modal-border > button.btn.login-btn', el => el.click());

  // wait
  await page.waitForTimeout(300 * 1000);
  
  // await stay alive button to display then click
  const stayAliveButton = await page.waitForSelector('div > div > div.banner > div > div.banner-btn > button');
  await stayAliveButton.click();

  console.log('You are alive for another day!');
  
  // wait
  await page.waitForTimeout(300 * 1000);

  // take screenshot
  // await page.screenshot({ path: '../tontine/tontine.png' });

  await browser.close();
})();
