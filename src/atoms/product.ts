import { atomWithStorage } from "jotai/utils";
export interface Product {
  id: number;
  image?: string;
  title: string;
  price: number;
  quantity: number;
}

export const productAtom = atomWithStorage<Product[]>("productAtom", []);
