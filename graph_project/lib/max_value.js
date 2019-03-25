

function maxValue(node, visited=new Set()) {
    if (node === null) {
        return -Infinity
    }
    let currMax = node.val;
    for (let i = 0; i < node.neighbors.length; i++){
        if (visited.has(node.neighbors[i])) continue;
        visited.add(node.neighbors[i]);
        localMax = maxValue(node.neighbors[i], visited)
        currMax = localMax > currMax ? localMax : currMax;
    }
    return currMax;
}

module.exports = {
    maxValue
};