const fs = require("fs");

try {
  /**
   * @Rename file
   */
  //   const renamedfile = fs.renameSync("text.txt", "re_named.txt");

  const deletdfile = fs.unlinkSync("re_named.txt");
} catch (error) {
  console.log("Error while deleting the file ");
}
