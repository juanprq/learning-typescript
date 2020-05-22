import { HasFormatter } from '../interfaces/HasFormatter';

export class Payment implements HasFormatter {
  constructor(
    public recipient: string,
    public details: string,
    public amount: number,
  ){}

  format() {
    return `recipient: ${this.recipient}, details: ${this.details}, amount: ${this.amount}`;
  }
}
