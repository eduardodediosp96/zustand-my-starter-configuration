import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { Store } from "./store.types";
import { createProductSlice } from "./product/productSlice";
import { createCartSlice } from "./cart/cartSlice";

const useStore = create<Store>()(
  immer((...a) => ({
    ...createProductSlice(...a),
    ...createCartSlice(...a),
  }))
);

export default useStore;
