import { type Product } from "@services/product/products.types";

export interface CartProduct {
  product: Product;
  quantity: number;
  price: number;
}

export type CartSlice = CartState & CartActions;

interface CartState {
  cartProducts: CartProduct[];
  isSubmitting: boolean;
}

interface CartActions {
  addProductToCart: (product: Product, quantity: number) => void;
  removeProductFromCart: (productId: string) => void;
  updateProductQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  submitCheckout: () => void;
  getTotal: () => number;
  getCartElementsNumber: () => number;
}
