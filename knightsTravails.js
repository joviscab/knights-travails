function knightMoves(start, end) {
  const directions = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
  ];

  // Check if a position is within the bounds of the chessboard
  const isValid = (x, y) => x >= 0 && x < 8 && y >= 0 && y < 8;

  // BFS to find the shortest path
  const bfs = (start, end) => {
    const queue = [[start]];
    const visited = new Set();
    visited.add(start.toString());

    while (queue.length > 0) {
      const path = queue.shift();
      const [x, y] = path[path.length - 1];

      if (x === end[0] && y === end[1]) {
        return path;
      }

      for (const [dx, dy] of directions) {
        const newX = x + dx;
        const newY = y + dy;

        if (isValid(newX, newY) && !visited.has([newX, newY].toString())) {
          visited.add([newX, newY].toString());
          queue.push([...path, [newX, newY]]);
        }
      }
    }
  };

  const path = bfs(start, end);
  console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
  path.forEach((position) => console.log(position));
}

knightMoves([0, 0], [7, 7]);
