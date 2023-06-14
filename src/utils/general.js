export const alphaSortObjectEntries = ([a], [b]) => {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
};

export const alphaSortObject = (a, b, key) => {
  if (a[key] < b[key]) return -1;
  if (a[key] > b[key]) return 1;
  return 0;
};
