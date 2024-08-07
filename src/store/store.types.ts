import { StateCreator } from "zustand";
import { ProductSlice } from "./product/productSlice.types";
import { CartSlice } from "./cart/cartSlice.types";

export type Store = ProductSlice & CartSlice;

export type StateCreatorWithMiddlewares<T> = StateCreator<
  Store,
  [["zustand/immer", never], never],
  [],
  T
>;
