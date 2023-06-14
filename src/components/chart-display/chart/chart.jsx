import { Box, Typography, Tooltip } from '@mui/material';

import { getDataVizColor } from '../../../utils/data-visualization';
import { alphaSortObjectEntries } from '../../../utils/general';
import { demoCategoryMapper } from '../../../constants';

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
                  <Tooltip
                    key={demoName}
                    arrow
                    title={
                      <Box>
                        <Typography>
                          {demoCategoryMapper[category]}: {demoName}
                        </Typography>
                        <Typography>
                          {Math.round(stats.percentage * 10) / 10}%
                        </Typography>
                      </Box>
                    }
                  >
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
      <Box sx={{ display: 'flex', flexWrap: 'wrap', maxWidth: '80%', gap: 2 }}>
        {Object.keys(data)
          .sort()
          .map((cat, i) => (
            <Box key={cat} sx={{ display: 'flex', gap: 1 }}>
              <Box
                sx={{
                  height: '100%',
                  width: '20px',
                  background: `${getDataVizColor(i)}`,
                }}
              />
              <Typography variant="body2">{demoCategoryMapper[cat]}</Typography>
            </Box>
          ))}
      </Box>
    </Box>
  );
};
