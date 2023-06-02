const fs = require("fs");

try {
  /**
   * Appending data every time at new line
   */

  // const append = fs.appendFileSync("text.txt", "\n hello world ");
  const update = fs.writeFileSync("text.txt", "Shivraj khetri");
} catch (error) {
  console.log("error while updating file ");
}
