const fs = require("fs");

// const CONTENT = "THIS IS MY FIRST LINE ";
// const writeContent = fs.createWriteStream("./text.txt", "utf-8");

// writeContent.write(CONTENT);
// writeContent.end();

// writeContent.on("finish", () => {
//   console.log("Successfully file Created");
// });

// writeContent.on("error", (error) => {
//   console.log("Error while file reading ");
// });

/**
 * Read file
 */

// const readFile = fs.readFileSync("./text.txt", "utf-8");

/**
 * Update file
 */
const additionalContent = "\nTHIS IS SECOND LINE ";
try {
  fs.appendFileSync("text.txt", additionalContent, "utf-8");
  console.log("File updated successfully");
} catch (error) {
  console.log("Error occurred while appending data to the file: ", error);
}
