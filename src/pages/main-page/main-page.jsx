import { Box } from '@mui/material';

import { ProductSelector, ChartDisplay, ControlPanel } from '../../components';

const MainPage = () => {
  return (
    <Box sx={{ display: 'flex', gap: 1 }}>
      <ControlPanel />
      <Box>
        <ProductSelector />
        <ChartDisplay />
      </Box>
    </Box>
  );
};

export default MainPage;
