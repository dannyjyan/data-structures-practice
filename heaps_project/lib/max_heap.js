class MaxHeap {
    constructor(){
        this.array = [null];
    }
    getParent(idx){
        return Math.floor(idx/2);
    }
    getLeftChild(idx){
        return idx*2;
    }
    getRightChild(idx){
        return idx*2 + 1
    }
    siftUp(idx){
        if (this.getParent(idx) === 0) return;
        let parentIdx = this.getParent(idx);
        if (this.array[parentIdx] <  this.array[idx]){
            [this.array[parentIdx] , this.array[idx]] = [this.array[idx], this.array[parentIdx]]
            this.siftUp(parentIdx)
        }
    }
    insert(val){
        this.array.push(val);
        this.siftUp(this.array.length - 1)
    }
    siftDown(idx){
        if (idx >= this.array.length) return;
        let curr = this.array[idx];
        let rightIdx = this.getRightChild(idx);
        let leftIdx = this.getLeftChild(idx);
        let rightChild = this.array[rightIdx]
        let leftChild = this.array[leftIdx]
        if (rightChild === undefined && leftChild === undefined){
            return;
        } else if (rightChild === undefined){ 
            if (leftChild > curr) [this.array[leftIdx], this.array[idx]] = [this.array[idx], this.array[leftIdx]] 
        } else if (leftChild === undefined){
            if (rightChild > curr) [this.array[rightIdx], this.array[idx]] = [this.array[idx], this.array[rightIdx]] 
        } else {
            if (curr > leftChild && curr > rightChild) return;
            if (leftChild > rightChild) {
                [this.array[leftIdx], this.array[idx]] = [this.array[idx], this.array[leftIdx]] 
                this.siftDown(leftIdx)
            } else {
                [this.array[rightIdx], this.array[idx]] = [this.array[idx], this.array[rightIdx]] 
                this.siftDown(rightIdx)
            }
        }
    }
    deleteMax(){
        if (this.array.length === 2) return this.array.pop();
        if (this.array.length <= 1) return null;
        let max = this.array[1];
        this.array[1] = this.array.pop();
        this.siftDown(1);
        return max;
    }
}

module.exports = {
    MaxHeap
};