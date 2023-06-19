import { ProductsModel } from "../../shared/models/products.model";

export interface ProductsResponseModel {
  status: number,
  timestamp: number,
  date: string,
  total: number,
  params: {
    page: number,
    size: number
  },
  records: ProductsModel[]
}