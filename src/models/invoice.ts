import { HasFormatter } from '../interfaces/HasFormatter';
/* class InvoiceOld { */
/*   // in typescript we have access modifiers */
/*   // and the modifier will work as expected */
/*   // read only is public but we cannot change it's value */
/*   public client: string; */
/*   private details: string; */
/*   readonly amount: number; */

/*   constructor(client: string, details: string, amount: number) { */
/*     this.client = client; */
/*     this.details = details; */
/*     this.amount = amount; */
/*   } */

/*   format(): string { */
/*     return `${this.client} owes ${this.amount} for ${this.details}`; */
/*   } */
/* } */

// the implements will force the Invoice class to implement the format method
export class Invoice implements HasFormatter {
  // we can define the fields of the class directly on the construcor
  // we need to use the modifiers in the constructor arguments
  // and we can leave the constructor body empty
  constructor(
    readonly client: string,
    public details: string,
    private amount: number,
  ) {}

  format(): string {
    return `${this.client} owes ${this.amount} for ${this.details}`;
  }
}
