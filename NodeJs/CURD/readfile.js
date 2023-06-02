const fs = require("fs");

try {
  const readStream = fs.readFileSync("text.txt", "utf-8");
  console.log(readStream);
} catch (error) {
  console.log("error while reading file ");
}
