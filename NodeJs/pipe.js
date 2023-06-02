const fs = require("fs");
const http = require("http");

const PORT = 8000;
const BASE_URL = "localhost";
const server = http.createServer((req, res) => {
  const readStream = fs.createReadStream("text.txt");
  readStream.pipe(res);
});

server.listen(PORT, BASE_URL, () => {
  console.log(`Serever running on the port ${PORT}`);
});
