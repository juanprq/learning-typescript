import ILinkedList from './ILinkedList';
import Node from './Node';

class LinkedList<T> implements ILinkedList<T> {
  private head: Node<T> | null
  private tail: Node<T> | null
  private size: number

  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    return this.tail;
  }

  getSize() {
    return this.size;
  }

  add(data: T) {
    const node = new Node(data);
    if (this.head === null) {
      this.head = node;
    }

    if (this.tail) {
      this.tail.setNext(node);
    }

    this.tail = node;
    this.size++;
  }
}

export default LinkedList;
