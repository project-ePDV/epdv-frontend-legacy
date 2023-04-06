import { ProductsModel } from "../modules/shared/models/products.model";

export function createProductList(size: number) {
  let products: ProductsModel[] = [];

  for (let i = 0; i < size; i++) {
    let product = {
      id: i,
      name: `esfirra de frango${i}`,
      image: 'https://picsum.photos/200/300',
      price: i+10
    } as ProductsModel
    products.push(product)
  }

  return products;
}