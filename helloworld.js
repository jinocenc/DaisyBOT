import http from "http";

http
  .createServer(function (req, res) {
    console.log("Server is running...");
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello World!");
  })
  .listen(8080);
