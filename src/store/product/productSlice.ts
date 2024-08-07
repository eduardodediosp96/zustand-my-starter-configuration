// @Types
import { type Product } from "@services/product/products.types";
import { type StateCreatorWithMiddlewares } from "@store/store.types";
import { type ProductSlice } from "./productSlice.types";

// @Services
import { getProducts } from "@services/product/products";

export const createProductSlice: StateCreatorWithMiddlewares<ProductSlice> = (
  set,
  get
) => ({
  products: [],
  page: 1,
  limit: 12,
  isFetchingProducts: false,
  allProductsFetched: false,
  getProducts: async () => {
    set({ isFetchingProducts: true });
    try {
      const { page, limit } = get();
      const incomingProducts = await getProducts(page, limit);
      const allProductsFetched = incomingProducts.length < limit;
      set({
        products: [...get().products, ...incomingProducts],
        page: page + 1,
        isFetchingProducts: false,
        allProductsFetched,
      });
    } catch (error) {
      set({ isFetchingProducts: false });
    }
  },
  reduceProductStock: (productId: string, quantity: number) => {
    set((state: ProductSlice) => {
      const product = state.products.find(
        (product: Product) => product.id === productId
      );
      if (product) {
        product.stock -= quantity;
        if (product.stock <= 0) {
          product.inStock = false;
        }
      }
    });
  },
});
