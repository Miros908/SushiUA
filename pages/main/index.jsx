import React, { useMemo } from "react";
import productsOrig from "../../products.json";
import categories from "../../categories.json";
import ProductList from "../../components/UI/ProductCard/ProductList";

export default function MainPage() {
  const products = useMemo(() => {
    const res = {};
    for (const product of productsOrig) {
      if (!res[product.category]) {
        res[product.category] = [];
      }
      res[product.category].push(product);
    }
    return res;
  }, [productsOrig]);
  console.log(products);
  return <ProductList />;
}
