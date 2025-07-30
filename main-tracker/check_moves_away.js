function checkHowManyPointsAway(startName, targetName, points, maxDepth = Infinity) {
  // exclude all points from being considered
  if (startName.substring(0, 5) == "point") {
    return -1;
  }

  const nodeMap = new Map(points.map(p => [p.name, p]));
  const visited = new Set();
  const queue = [{ name: startName, depth: 0 }];

  visited.add(startName);

  while (queue.length > 0) {
    const { name, depth } = queue.shift();

    if (name === targetName) {
      return depth; // shortest path found!
    }

    if (depth >= maxDepth) continue;

    const currentPoint = nodeMap.get(name);
    if (!currentPoint || !Array.isArray(currentPoint.movesFromLocation)) continue;

    for (const neighborName of currentPoint.movesFromLocation) {
      if (!visited.has(neighborName)) {
        visited.add(neighborName);
        queue.push({ name: neighborName, depth: depth + 1 });
      }
    }
  }

  return -1; // no path found
}