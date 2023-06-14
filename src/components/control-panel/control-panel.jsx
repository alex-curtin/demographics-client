import { useContext } from 'react';
import { Box, Paper } from '@mui/material';

import { CustomersContext } from '../../store/customers-context';
import { DemoSelector } from './demo-selector/demo-selector';
import { alphaSortObjectEntries } from '../../utils/general';
import { getDataVizColor } from '../../utils/data-visualization';

export const ControlPanel = () => {
  const { demoOptions } = useContext(CustomersContext);

  return (
    <Paper sx={{ display: 'flex', flexDirection: 'column', mt: '80px' }}>
      {Object.entries(demoOptions)
        .sort(alphaSortObjectEntries)
        .map(([category, demos], idx) => (
          <DemoSelector
            key={category}
            category={category}
            demos={demos}
            color={getDataVizColor(idx)}
          />
        ))}
    </Paper>
  );
};
