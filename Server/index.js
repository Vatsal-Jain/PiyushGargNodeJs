const http = require("http");
const fs = require("fs");
const url = require("url");
const myServer = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") return res.end();
  const myUrl = url.parse(req.url, true);
  console.log(myUrl);
  const log = `${Date.now()}: ${myUrl.pathname} New Request Recieved\n`;
  fs.appendFile("log.txt", log, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      switch (myUrl.pathname) {
        case "/":
          res.end("homepage");
          break;
        case "/about":
          const username = myUrl.query.q;
          res.end(`Hey ${username}`);
          break;
        case "/search":
          const search = myUrl.query.search_query;
          res.end(`Your Search is ${search}`);
          break;
        default:
          res.end("not founc");
      }
    }
  });
});

myServer.listen(8000, () => {
  console.log("server started");
});
