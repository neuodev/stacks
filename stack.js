class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }
  push(val) {
    const node = new Node(val);
    if (this.top === null) {
      this.top = node;
    } else {
      node.next = this.top;
      this.top = node;
    }
    this.length++;
    return node;
  }

  pop() {
    if (this.top === null) return false;

    const topNode = this.top;
    this.top = this.top.next;

    topNode.next = null;
    this.length--;

    return topNode;
  }

  peek() {
    if (this.top === null) return undefined;
    let topNode = this.top;
    topNode.next = null;
    return topNode;
  }
}

const stack = new Stack();
console.log(stack.push(1));
console.log(stack.push(2));
console.log(stack.push(3));
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.peek());
console.log(stack);
