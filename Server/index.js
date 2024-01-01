const http = require("http");
// const fs = require("fs");
// const url = require("url");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.send("hello from Homepage");
});

app.get("/about", (req, res) => {
  return res.send(
    "hello from About" + " " + req.query.name + " you age is " + req.query.age
  );
});

app.listen(8000, () => {
  console.log("server started");
});

// function myHandler(req, res) {
//   if (req.url === "/favicon.ico") return res.end();
//   const myUrl = url.parse(req.url, true);
//   console.log(myUrl);
//   const log = `${Date.now()}: ${req.method} ${
//     myUrl.pathname
//   } New Request Recieved\n`;
//   fs.appendFile("log.txt", log, (err, data) => {
//     if (err) {
//       console.log(err);
//     } else {
//       switch (myUrl.pathname) {
//         case "/":
//           res.end("homepage");
//           break;
//         case "/about":
//           const username = myUrl.query.q;
//           res.end(`Hey ${username}`);
//           break;

//         case "/signup":
//           if (req.method === "GET") res.end("this is a sognup form");
//           else if (req.method === "POST") {
//             //db query
//             res.end("success");
//           }
//           break;
//         case "/search":
//           const search = myUrl.query.search_query;
//           res.end(`Your Search is ${search}`);
//           break;
//         default:
//           res.end("not founc");
//       }
//     }
//   });
// }
// const myServer = http.createServer(app);

// myServer.listen(8000, () => {
//   console.log("server started");
// });
