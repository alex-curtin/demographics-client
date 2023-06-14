import { createContext, useState } from 'react';

export const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const initialState = {
    products: [],
    selectedProducts: [],
  };
  const [products, setProducts] = useState(initialState.products);
  const [selectedProducts, setSelectedProducts] = useState(
    initialState.selectedProducts
  );

  const state = {
    products,
    selectedProducts,
    setProducts,
    setSelectedProducts,
  };

  return (
    <ProductsContext.Provider value={state}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
