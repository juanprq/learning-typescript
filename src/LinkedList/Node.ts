import INode from './INode';

class Node<T> implements INode<T> {
  private data: T;
  private next: INode<T> | null;

  constructor(data: T) {
    this.data = data;
    this.next = null;
  }

  getData() {
    return this.data;
  }

  setData(data: T) {
    this.data = data;
  }

  getNext() {
    return this.next;
  }

  setNext(next: INode<T>) {
    this.next = next;
  }
}

export default Node;
