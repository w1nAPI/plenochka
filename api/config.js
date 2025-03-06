export const BASE_URL = "http://localhost:3000/";

export const FILMS_ENDPOINTS = {
  all: `${BASE_URL}films`,
  byId: (id) => `${BASE_URL}films/${id}`,
  byCategory: (category) => `${BASE_URL}films/category/${category}`,
};

export const AUTH_ENDPOINTS = {
  register: `${BASE_URL}user/register`,
  login: `${BASE_URL}user/login/`,
};
