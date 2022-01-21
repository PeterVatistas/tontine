# MSCHF Tontine Stay Alive Script

This is a basic Puppeteer script that logs a user into their own MSCHF Tontine.cash account, then clicks the "stay alive" button.

The game itself is located at https://tontine.cash/

## Installation

1. install Node.js https://nodejs.org/en/download/package-manager/
2. clone this repo
3. run ```cd tontine```
4. run ```npm install```

## Usage

Enter tontine account ```email address``` on line 28.

Enter tontine account ```password``` on line 35.

Run ```node .```  OR ```node main.js```

## Recommended Use

Setup a cron job to run `node main.js` daily.

Example run daily at 3am 
`0 3 * * * /usr/local/bin/node ../tontine/main.js`

## Trying to run on a Raspberry Pi?
Install chromium and replace line 4 with the following:

```const browser = await puppeteer.launch({ headless: "false", executablePath: 'chromium-browser' });```
