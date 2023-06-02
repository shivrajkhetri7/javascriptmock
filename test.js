const maze = [
  [1, 0, 0, 0],
  [1, 1, 0, 0],
  [1, 1, 0, 0],
  [0, 1, 1, 1],
];

const rows = maze.length;
const cols = maze[0].length;

// Create a solution matrix to track the path
const solution = [];
for (let i = 0; i < rows; i++) {
  solution[i] = new Array(cols).fill(0);
}

console.log("Solution", solution);
// Define the directions: up, down, left, right
const directions = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

// Helper function to check if a cell is valid
function isValidCell(row, col) {
  return (
    row >= 0 &&
    row < rows &&
    col >= 0 &&
    col < cols &&
    maze[row][col] === 1 &&
    solution[row][col] === 0
  );
}

// Recursive function to find the path
function findPath(row, col) {
  // Base case: If the rat reaches the destination
  if (row === rows - 1 && col === cols - 1) {
    solution[row][col] = 1; // Mark the destination cell
    return true;
  }

  // Check if the current cell is valid
  if (isValidCell(row, col)) {
    // Mark the cell as part of the path
    solution[row][col] = 1;

    // Explore all possible directions
    for (let i = 0; i < directions.length; i++) {
      const [dx, dy] = directions[i];
      const nextRow = row + dx;
      const nextCol = col + dy;

      if (findPath(nextRow, nextCol)) {
        return true; // If the path is found, return true
      }
    }

    // If none of the directions leads to the destination, backtrack
    solution[row][col] = 0;
  }

  return false; // No path found
}

// Start the search from the top-left cell
if (findPath(0, 0)) {
  // Count the number of steps in the path
  const pathLength = solution.reduce(
    (acc, row) => acc + row.filter((cell) => cell === 1).length,
    0
  );
  console.log("Path found. Steps:", pathLength);
  // console.log("Solution:", solution);
} else {
  console.log("No path found");
}
