function augmentingPath(graph, start, end) {
  if (start === end) {
    return [start];
  }

  let discovered = [];
  let nodePaths = [];

  let nodes = [start];
  nodePaths[start] = [start];

  while (nodes.length > 0) {
    current = nodes[0];
    nodes = nodes.slice(1);

    if (discovered.includes(current)) {
      continue;
    }
    discovered.push(current);

    currentPath = nodePaths[current];

    if (current === end) {
      return currentPath;
    }


    if (graph[current]) {
      for (let next in graph[current]) {
        if (!discovered.includes(next)) {
          nodes.push(next);
          nodePaths[next] = currentPath.concat(next);
        }
      }
    }
  }
  return [];
}
