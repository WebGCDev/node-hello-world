require('dotenv').config();
const http = require('http');
const { getRandomQuote } = require('./motivationalquotes');
const port = process.env.PORT || 8080;
const host = process.env.HOST || 'localhost';
const messaggio = process.env.MY_VARIABLE || 'FRASI MOTIVAZIONALI!';
http
  .createServer(function (req, res) {
    res.writeHead(200, {
      'Content-Type': 'text/html',
    });
    res.end(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>REACT FIRST DAY</title>
    </head>
    <body>
        <h1>${messaggio}</h1>
        <h3>${getRandomQuote()}</h3>
    </body>
    </html>`);
  })
  .listen(port, host, () => {
    const serverUrl = `http://${host}:${port}`;
    console.log(`Server avviato su ${serverUrl}`);
  });
