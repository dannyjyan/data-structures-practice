// you may assume that the array will always have a null element at the 0-th index
function isMaxHeap(array, idx=1) {
    if (idx >= array.length) return true;
    let leftIdx = idx*2;
    let rightIdx = idx*2+1;
    if (array[leftIdx] >= array[idx]) return false;
    if (array[rightIdx] >= array[idx]) return false;
    return isMaxHeap(array, leftIdx) && isMaxHeap(array, rightIdx)
}



module.exports = {
    isMaxHeap
};