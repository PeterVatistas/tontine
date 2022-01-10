# MSCHF Tontine Stay Alive Script

This is a basic Puppeteer script I wrote that logs a user into their own MSCHF Tontine account, then clicks the "stay alive" button.

The game itself is located at https://tontine.cash/

## Installation

Install Node.js, then clone this repo && `npm install` inside the tontine directory.

## Usage

Enter tontine account email address on line 28.

Enter tontine account password on line 35.

Run
```bash
node main.js
```

## Recommended Use

Setup a cron job to run `node main.js` daily.

Example run daily at 3am 
`0 3 * * * /usr/local/bin/node ../tontine/main.js`
