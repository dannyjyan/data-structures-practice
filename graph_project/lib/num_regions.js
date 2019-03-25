function numRegions(graph) {
    visited = new Set();
    let keys = Object.keys(graph);
    if (keys.length === 0){
        return 0;
    }
    let counter = 0; 
    let stack = [];
    // visited.add(graph[keys[0]])
    for (let i = 0; i < keys.length; i ++){
        if (visited.has(keys[i])) continue;
        stack.push(keys[i])
        counter += getConnectedComponent(graph, visited, stack, counter)
    }
    return counter;
}

function getConnectedComponent(graph, visited, stack,counter){
    while ( stack.length !== 0){
        let curr = stack.pop();
        visited.add(curr);
        let allVisited = true;
        for (let i = 0; i < graph[curr].length; i ++){ //neighbors
            let currNode = graph[curr][i]
            if (!visited.has(currNode)){
                allVisited = false;
                stack.push(currNode);
            }
        }
        if (allVisited === true)  return  1;
    }
    return 0;
}



module.exports = {
    numRegions
};