// utils/api.js

const BASE_URL = "https://fakestoreapi.com";

export const loginUser = async (credentials) => {
  const res = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    body: JSON.stringify(credentials),
    headers: { "Content-Type": "application/json" },
  });
  return await res.json();
};

export const getProducts = async () => {
  const res = await fetch(`${BASE_URL}/products`);
  return await res.json();
};

export const getProductById = async (id) => {
  const res = await fetch(`${BASE_URL}/products/${id}`);
  return await res.json();
};
