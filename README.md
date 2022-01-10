# Tontine Stay Alive Script

This script logs user into tontine account then clicks "stay alive" button.

## Deployment

Install Node.js
Install Puppeteer in the tontine directory with a `npm i puppeteer`.

Enter email address on line 35.
Enter password on line 41.

Run `node main.js`.

## Recommended Use

Setup a cron job (on a Raspberry Pi) to run `node main.js` daily.
example run daily at 3am `0 3 * * * /usr/local/bin/node ../tontine/main.js`
