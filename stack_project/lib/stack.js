// ============================================================================
// Implementation Exercise: Stack
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Stack and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    push(value){
        let node = new Node(value);
        if (this.top !== null){
            node.next = this.top;
        }
        this.top = node;
        if (this.bottom === null){
            this.bottom = node;
        }
        this.length += 1;
        return this.length;
    }
    pop(){
        if (this.length === 0){
            return null;
        }
        let val = this.top.value;
        if(this.length === 1){
            this.top = null
            this.bottom = null
        } else { // size 2 or more
            this.top = this.top.next;
        }
        this.length--;
        return val;
    }
    size(){
        return this.length;
    }
}

exports.Node = Node;
exports.Stack = Stack;
