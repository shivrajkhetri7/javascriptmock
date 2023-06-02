const path = require("path");

try {
  const currentPath = path.basename("/");
  console.log("currentPath", currentPath);
} catch (error) {
  console.log("Error while path finding ", error);
}
