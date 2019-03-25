

function breadthFirstSearch(startingNode, targetVal) {
    visited = new Set();
    let arr = [ startingNode ]
    while ( arr.length > 0) {
        curr = arr.shift();
        if (visited.has(curr)) continue;
        visited.add(curr);
        if (curr.val === targetVal) {
            return curr;
        } 
        curr.neighbors.forEach((node) => {
            arr.push(node);
        })
    }
    return null;
}

module.exports = {
    breadthFirstSearch
};