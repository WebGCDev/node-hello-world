require('dotenv').config();
const http = require('http');
const port = process.env.PORT || 8080;
const host = process.env.HOST || 'localhost';
const messaggio = process.env.MY_VARIABLE || 'Primo esercizio,buon corso!';
http
  .createServer(function (req, res) {
    res.writeHead(200, {
      'Content-Type': 'text/html',
    });
    res.end(`<h1>${messaggio}</h1>`);
  })
  .listen(port, host, () => {
    const serverUrl = `http://${host}:${port}`;
    console.log(`Server avviato su ${serverUrl}`);
  });
