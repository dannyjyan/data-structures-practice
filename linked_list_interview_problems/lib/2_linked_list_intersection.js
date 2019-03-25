// ============================================================================
// Interview Problem: Linked List Intersection
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Write a function linkedListIntersection that returns the node at which the 
// intersection of two linked lists begins, or null if there is no such 
// intersection.
//
// ---------- 
// Example 1:
// ----------
// 
// Given the following two linked lists, list1 and list2, 
// linkedListIntersection(list1,list2) should return D 
// as the node of intersection.
// 
//    A → B → C
//             ↘
//               D → E → F
//             ↗
//        X → Y
//
// ---------- 
// Example 2:
// ----------
//
// Given the following two linked lists, list1 and list2, 
// linkedListIntersection(list1, list2) should return null 
// as there is no point of intersection.
// 
//    A → B → C → D
//
//    X → Y → Z
// 
// -----------
// Let's code!
// -----------
// function linkedListIntersection(list1, list2) {
//   let val1 = list1.head;
//   while (val1.next !== null){
//     let val2 = list2.head;
//     while(val2.next !== null){
//       if (val1 === val2) return val1;
//       val2 = val2.next;
//     }
//     val1 = val1.next
//   }
//   return null
// }
function linkedListIntersection(list1, list2){
  let [len1,len2,start1,start2] = [0,0,0,0];
  let p1 = list1.head;
  let p2 = list2.head;
  while (p1 !== null){
    len1++;
    p1 = p1.next;
  }
  while (p2 !== null){
    len2++;
    p2 = p2.next;
  }
  if (p1 !== p2) return null;
  p1 = list1.head;
  p2 = list2.head;
  len1 > len2 ? start1 = len1-len2 : start2 = len2-len1
  while (start1 > 0){
    p1 = p1.next;
    start1--;
  } 
  while (start2 > 0){
    p2 = p2.next;
    start2--;
  }
  while (p1 !== p2){
    p1 = p1.next;
    p2 = p2.next
  }
  return p1;
}

// ----------------------------------------
// Given: Singly Linked List - Do Not Edit!
// ----------------------------------------
class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToTail(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }

    this.tail = newNode;
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }
}

// --------------------------------------
// Helper For Testing Only - Do Not Edit!
// --------------------------------------
var stringify = function(list) {
  var result = [];
  while(list !== null) {
    result.push(list.value);
    list = list.next;
  }
  return result.join("");
}

exports.Node = Node;
exports.LinkedList = LinkedList;
exports.linkedListIntersection = linkedListIntersection;
exports.stringify = stringify;
