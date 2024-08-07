// @Types
import { StateCreatorWithMiddlewares } from "@store/store.types";
import type { CartProduct, CartSlice } from "./cartSlice.types";
// import { submitCheckout } from "@services/checkout/checkout";

// Pasaremos a usar nuestro type personalizado en el store.types.ts para que sea más fácil de mantener
export const createCartSlice: StateCreatorWithMiddlewares<CartSlice> = (
  set,
  get
) => ({
  cartProducts: [],
  isSubmitting: false,
  addProductToCart: (product, quantity) => {
    set((state: CartSlice) => {
      state.cartProducts.push({
        product,
        quantity,
        price: product.price * quantity,
      });
    });
  },
  removeProductFromCart: (productId) => {
    set((state: CartSlice) => {
      state.cartProducts = state.cartProducts.filter(
        (p: CartProduct) => p.product.id !== productId
      );
    });
  },
  updateProductQuantity: (productId, quantity) => {
    set((state: CartSlice) => {
      const product = state.cartProducts.find(
        (p: CartProduct) => p.product.id === productId
      );
      if (product) {
        product.quantity = quantity;
        product.price = product.product.price * quantity;
      }
    });
  },
  submitCheckout: async () => {
    set((state: CartSlice) => {
      state.isSubmitting = true;
    });

    try {
      // await submitCheckout();
      const { cartProducts, reduceProductStock: updateProductStock } = get();
      cartProducts.forEach((cartProduct: CartProduct) => {
        updateProductStock(cartProduct.product.id, cartProduct.quantity);
      });
      set((state: CartSlice) => {
        state.cartProducts = [];
        state.isSubmitting = false;
      });
    } catch (error) {
      set((state: CartSlice) => {
        state.isSubmitting = false;
      });
    }
  },
  getTotal: () => {
    return (
      get().cartProducts.reduce(
        (acc: number, curr: CartProduct) => acc + curr.price,
        0
      ) || 0
    );
  },
  getCartElementsNumber: () => {
    return get().cartProducts.length || 0;
  },
  clearCart: () => {
    set((state: CartSlice) => {
      state.cartProducts = [];
    });
  },
});
