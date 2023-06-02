const fs = require("fs");

/**
 * Create text file
 */

try {
  const CONTENT = "this is first ever file created";
  const writeStream = fs.writeFileSync("text.txt", CONTENT, "utf-8");
} catch (error) {
  console.log("Error while creating the file ", error);
}
