import { createContext, useState, useEffect, useContext } from 'react';

import { fetchAllDemos, fetchDemoDataByProduct } from '../lib/api-helper';
import { ProductsContext } from './products-context';

export const CustomersContext = createContext();

const CustomersProvider = ({ children }) => {
  const initialState = {
    demoOptions: {},
    demoData: {},
  };
  const [demoOptions, setDemoOptions] = useState(initialState.demoOptions);
  const [demoData, setDemoData] = useState(initialState.demoData);
  const { selectedProducts, products } = useContext(ProductsContext);

  const getDemoDataBody = () => {
    const body = {};
    for (const cat in demoOptions) {
      const selectedOptions = demoOptions[cat]
        .filter(o => o.selected)
        .map(o => o.label);
      if (
        selectedOptions.length !== 0 &&
        selectedOptions.length < demoOptions[cat].length
      ) {
        body[cat] = selectedOptions;
      }
    }
    return body;
  };

  useEffect(() => {
    const getAllDemos = async () => {
      const demos = await fetchAllDemos();
      const formattedDemos = {};
      for (const cat in demos) {
        formattedDemos[cat] = demos[cat].map(el => ({
          label: el,
          selected: true,
        }));
      }
      setDemoOptions(formattedDemos);
    };

    getAllDemos();
  }, []);

  useEffect(() => {
    const getDemoData = async productId => {
      const body = getDemoDataBody();
      const data = await fetchDemoDataByProduct(productId, body);

      setDemoData({
        ...demoData,
        [productId]: data,
      });
    };

    if (selectedProducts.length > 0) {
      selectedProducts.forEach(prodId => {
        if (!demoData[prodId]) {
          getDemoData(prodId);
        }
      });
    }
  }, [selectedProducts]);

  useEffect(() => {
    const getDemoData = async productId => {
      const body = getDemoDataBody();
      const data = await fetchDemoDataByProduct(productId, body);

      setDemoData({
        ...demoData,
        [productId]: data,
      });
    };

    selectedProducts.forEach(prodId => {
      getDemoData(prodId);
    });
  }, [demoOptions]);

  const state = {
    demoOptions,
    setDemoOptions,
    demoData,
  };

  return (
    <CustomersContext.Provider value={state}>
      {children}
    </CustomersContext.Provider>
  );
};

export default CustomersProvider;
