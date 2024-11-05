// I thought it would be easier to do asymptotic anaylsis if I implement it recursively.
// My original was iterative

function augmentingPath(graph, start, end) {
  seen = new Set();
  path = [];
  result = findPath(graph, start, end, seen, path);
  if (result) {
    return path;
  } else {
    return [];
  }
}

function findPath(graph, current, end, seen, path) {
  seen.add(current);
  path.push(current);

  if (current === end) {
    return true;
  }

  const neighbors = graph[current] || {};
  for (adjacent in neighbors) {
    capacity = neighbors[adjacent];
    if (!seen.has(adjacent) && capacity > 0) {
      if (findPath(graph, adjacent, end, seen, path)) {
        return true;
      }
    }
  }

  path.pop();
  return false;
}
