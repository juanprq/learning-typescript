interface ILinkedList<T> {
  constructor(data: T): ILinkedList<T>
  getHead(): T
  getTail(): T
  getSize(): number
  add(data: T): void
}

export default ILinkedList;
