export class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

export class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  add(val) {
    let current = this.head;
    let node = new Node(val);

    if(!current) {
      this.head = node;
      return this;
    }
    
    while(current.next) {
      current = current.next;
    }
    current.next = node;
    return this;
  }
}
