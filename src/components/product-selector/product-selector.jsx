import { useContext, useEffect, useState } from 'react';
import {
  Avatar,
  Box,
  ButtonBase,
  Chip,
  Typography,
  Paper,
} from '@mui/material';

import { ProductsContext } from '../../store/products-context';
import { fetchAllProducts } from '../../lib/api-helper';

export const ProductSelector = () => {
  const { products, setProducts, selectedProducts, setSelectedProducts } =
    useContext(ProductsContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const fetchedProducts = await fetchAllProducts();

      setProducts(fetchedProducts);
      setLoading(false);
    })();
  }, []);

  const toggleSelectedProducts = id => {
    const index = selectedProducts.findIndex(el => el === id);
    if (index === -1) {
      setSelectedProducts([...selectedProducts, id]);
    } else {
      const newSelected = [
        ...selectedProducts.slice(0, index),
        ...selectedProducts.slice(index + 1),
      ];
      setSelectedProducts(newSelected);
    }
  };

  return (
    <Paper
      sx={{
        display: 'flex',
        gap: 1,
        alignItems: 'center',
        p: 2,
        mb: 2,
      }}
    >
      <Typography>Select products: </Typography>
      {loading ? (
        <Box>Loading...</Box>
      ) : (
        <>
          {products.map(product => (
            <ButtonBase key={product.id}>
              <Chip
                avatar={<Avatar alt={product.name} src={product.imgurl} />}
                label={product.name}
                variant={
                  selectedProducts.includes(product.id) ? 'filled' : 'outlined'
                }
                onClick={() => toggleSelectedProducts(product.id)}
                sx={{ cursor: 'pointer' }}
              />
            </ButtonBase>
          ))}
        </>
      )}
    </Paper>
  );
};
