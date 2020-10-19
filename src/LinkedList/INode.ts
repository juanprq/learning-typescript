interface INode<T> {
  getData(): T
  getNext(): INode<T>
  setData(data: T): void
  setNext(next: INode<T>): void
}

export default INode;
