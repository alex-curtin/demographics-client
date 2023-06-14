const BASE_URL = 'http://localhost:8500';
const HEADERS = {
  'Content-Type': 'application/json',
};

export const fetchAllProducts = async () => {
  const res = await fetch(`${BASE_URL}/products`);
  const { products } = await res.json();

  return products;
};

export const fetchAllDemos = async () => {
  const res = await fetch(`${BASE_URL}/allDemos`);
  const demos = await res.json();

  return demos;
};

export const fetchDemoDataByProduct = async (productId, body = {}) => {
  const res = await fetch(`${BASE_URL}/customers/${productId}`, {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify(body),
  });
  const data = await res.json();

  return data;
};
