const http = require("http");
const PORT = 8000;
const HOST_URL = "127.0.0.1";

const server = http.createServer((req, res) => {
  if (req.url == "/contact") {
    req.end("this is Contact page ");
  } else {
    res.writeHead(404);
    res.end("404 page not found ");
  }
});

server.listen(PORT, HOST_URL, () => {
  console.log(`Server Running on the Port ${PORT}`);
});
