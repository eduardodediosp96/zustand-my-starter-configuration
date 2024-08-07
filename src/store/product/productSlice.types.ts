import { Product } from "@services/product/products.types";

export type ProductSlice = ProductState & ProductActions;

export interface ProductState {
  products: Product[];
  isFetchingProducts: boolean;
  allProductsFetched: boolean;
  page: number;
  limit: number;
}

export interface ProductActions {
  getProducts: () => Promise<void>;
  reduceProductStock: (productId: string, quantity: number) => void;
}
