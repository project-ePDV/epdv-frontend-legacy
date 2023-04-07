import { ProductsModel } from "../../shared/models/products.model";

export interface ProductsResponseModel {
  status: number,
  timestamp: number,
  date: string,
  page: number,
  size: number,
  records: ProductsModel[]
}