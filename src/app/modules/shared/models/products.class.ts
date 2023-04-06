import { ProductsModel } from "./products.model";

export class Products {
  
  public constructor(
    private id: number,
    private name: string,
    private image: string,
    private price: number = 0,
    private amount: number = 1
  ) {
    this.image = image;
    this.name = name;
    this.price = price;
  }
}