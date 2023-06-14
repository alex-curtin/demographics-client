import { Box, Typography, Tooltip } from '@mui/material';

import { getDataVizColor } from '../../../utils/data-visualization';
import { alphaSortObjectEntries } from '../../../utils/general';

export const Chart = ({ productName, data }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography variant="h5">{productName}</Typography>
      <Box
        sx={{
          width: '80%',
        }}
      >
        {Object.entries(data)
          .sort(alphaSortObjectEntries)
          .map(([category, demos], idx) => (
            <Box
              key={category}
              sx={{
                display: 'flex',
                gap: 1,
                width: '100%',
              }}
            >
              {Object.entries(demos)
                .sort(alphaSortObjectEntries)
                .map(([demoName, stats]) => (
                  <Tooltip key={demoName} title={demoName}>
                    <Box
                      sx={{
                        width: `${stats.percentage}%`,
                        height: '40px',
                        background: getDataVizColor(idx),
                        mb: 1,
                        p: 1,
                        transition: 'width 0.5s ease-in',
                      }}
                    />
                  </Tooltip>
                ))}
            </Box>
          ))}
      </Box>
    </Box>
  );
};
