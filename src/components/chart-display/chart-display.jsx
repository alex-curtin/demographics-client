import { useContext } from 'react';
import { Paper } from '@mui/material';

import { CustomersContext } from '../../store/customers-context';
import { ProductsContext } from '../../store/products-context';
import { Chart } from './chart';

export const ChartDisplay = () => {
  const { demoData } = useContext(CustomersContext);
  const { products, selectedProducts } = useContext(ProductsContext);

  const getProductName = id => {
    const { name } = products.find(p => p.id === id) || '';
    return name ? name : 'unknown';
  };

  return (
    <Paper
      sx={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridRowGap: 10,
        py: 2,
      }}
    >
      {selectedProducts.map(prodId => {
        const data = demoData[prodId] || {};
        return (
          <Chart
            key={prodId}
            productName={getProductName(parseInt(prodId))}
            data={data}
          />
        );
      })}
    </Paper>
  );
};
