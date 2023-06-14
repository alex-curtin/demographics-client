import { useContext } from 'react';
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Checkbox,
  OutlinedInput,
  ListItemText,
  Box,
} from '@mui/material';

import { CustomersContext } from '../../../store/customers-context';
import { getDataVizColor } from '../../../utils/data-visualization';

export const DemoSelector = ({ category, demos, color }) => {
  const { setDemoOptions, demoOptions } = useContext(CustomersContext);

  const handleChange = (cat, demo) => {
    const newOptions = {
      ...demoOptions,
      [cat]: demoOptions[cat].map(d =>
        d.label === demo.label
          ? {
              ...d,
              selected: !d.selected,
            }
          : d
      ),
    };
    setDemoOptions(newOptions);
  };

  return (
    <Box>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel>{category}</InputLabel>
        <Select
          multiple
          value={demos.filter(d => d.selected).map(d => d.label)}
          onChange={() => {}}
          input={<OutlinedInput label={category} />}
          renderValue={selected => selected.join(', ')}
          // MenuProps={MenuProps}
        >
          {demos.map(demo => (
            <MenuItem key={demo.label} value={demo.label}>
              <Checkbox
                checked={demo.selected}
                onChange={() => handleChange(category, demo)}
                sx={{ color: `${color} !important` }}
              />
              <ListItemText primary={demo.label} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};
