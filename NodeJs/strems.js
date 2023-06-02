const fs = require("fs");
const http = require("http");

const PORT = 8000;
const BASE_URL = "localhost";
const server = http.createServer((req, res) => {
  const readStream = fs.createReadStream("text.txt");
  readStream.on("data", (chunkData) => {
    res.end(chunkData);
  });

  readStream.on("end", () => {
    res.end();
  });

  readStream.on("error", () => {
    res.end("file not found");
  });
});

server.listen(PORT, BASE_URL, () => {
  console.log(`Serever running on the port ${PORT}`);
});
