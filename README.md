# Tontine Stay Alive Script

This is a basic Puppeteer script to log into user's tontine account then clicks "stay alive" button.

## Installation

```bash
npm install
```

## Usage

Enter email address on line 28.

Enter password on line 35.

Run
```bash
node main.js
```

## Recommended Use

Setup a cron job to run `node main.js` daily.

Example run daily at 3am 
`0 3 * * * /usr/local/bin/node ../tontine/main.js`
