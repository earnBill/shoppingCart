import { useState } from "react";

//Custom hook that keeps an array state
export default function useCart() {
  const [productsCart, setProductsCart] = useState([]);
  return { productsCart, setProductsCart };
}