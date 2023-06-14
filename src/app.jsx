import { Box } from '@mui/material';

import MainPage from './pages/main-page';
import ProductsProvider from './store/products-context';
import CustomersProvider from './store/customers-context';

const App = () => {
  return (
    <ProductsProvider>
      <CustomersProvider>
        <Box sx={{ margin: '0 auto' }}>
          <MainPage />
        </Box>
      </CustomersProvider>
    </ProductsProvider>
  );
};

export default App;
