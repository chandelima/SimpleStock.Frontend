import { ProductRequest } from "./product-request.interface";

export interface ProductResponse extends ProductRequest {
  id: string;
  createdAt: string;
}
