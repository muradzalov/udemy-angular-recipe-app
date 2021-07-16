// // This will accomplish the same as the below code block
// export class Ingredient {
//   public name: string;
//   public amount: number;

//   constructor(name: string, amount: number) {
//     this.name = name;
//     this.amount = amount;
//   }
// }


// Same as above
export class Ingredient {
  constructor (public name: string, public amount: number) {}
}