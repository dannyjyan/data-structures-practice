// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }

}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // TODO: Implement the addToTail method here
    addToTail(val) {
        let newNode = new Node(val)
        if (this.head === null){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    // TODO: Implement the removeTail method here
    removeTail() {
        if (this.tail === null){
            return undefined;
        } 
        let tail = this.tail;
        if (this.length === 1){
            this.head = null;
            this.tail = null;
            this.length--;
            return tail
        }
        let nextTail = this.head;
        while (nextTail.next !== this.tail){
            nextTail = nextTail.next;
        }
        nextTail.next = null;
        this.tail = nextTail;
        this.length--;
        return tail;
    }

    // TODO: Implement the addToHead method here
    addToHead(val) {
        let newNode = new Node(val);
        if (this.tail === null){
            this.tail = newNode;
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    // TODO: Implement the removeHead method here
    removeHead() {
        if (this.head === null){
            return undefined;
        }
        let removed = this.head;
        if (this.length === 1){
            this.head = null;
            this.tail = null;
        }
        this.head = removed.next
        this.length--;
        return removed;
    }

    // TODO: Implement the contains method here
    contains(target) {
        let pointer = this.head;
        while (pointer !== null){
            if (pointer.value === target) return true
            pointer = pointer.next;
        }
        return false
    }  

    // TODO: Implement the get method here
    get(index) {
        let counter = index;
        let pointer = this.head;
        while (pointer !== null){
            if (counter === 0) return pointer
            pointer = pointer.next;

            counter--;
        }
        return null
    }

    // TODO: Implement the set method here
    set(index, val) {
        let node = this.get(index);
        if (node === null) return false;
        node.value = val;
        return true;
    }

    // TODO: Implement the insert method here
    insert(index, val) {
        if (this.length < index+1) return false;
        let newNode = new Node(val);
        if (this.length === 0) {  
            this.head = newNode;
            this.tail = newNode;
        } else if (index === 0){ //insert to head
            this.addToHead(val);
        }  else {
            let start = this.get(index-1);
            let end = this.get(index)
            start.next = newNode;
            newNode.next = end;
            this.length ++;
        }
        return true;
    }

    // TODO: Implement the remove method here
    remove(index) {
        if (this.length < index+1 || this.length <= 0) return undefined;
        if (this.index === 0){
            return this.removeHead()
        } else if (this.index === this.length - 1){
            return this.removeTail()
        } else {
            let removed = this.get(index);
            this.get(index-1).next = removed.next;
            this.length--
            return removed; 
        }
    }

    // TODO: Implement the size method here
    size() {
        return this.length;
    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
