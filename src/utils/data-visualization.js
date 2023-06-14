const dataVisColors = [
  '#003f5c',
  '#2f4b7c',
  '#665191',
  '#a05195',
  '#d45087',
  '#f95d6a',
  '#ff7c43',
  '#ffa600',
  '#4477AA',
  '#66CCEE',
  '#228833',
  '#CCBB44',
  '#EE6677',
  '#AA3377',
  '#BBAA33',
];

export const getDataVizColor = idx =>
  idx > dataVisColors.length
    ? getDataVizColor(idx - dataVisColors.length)
    : dataVisColors[idx];
