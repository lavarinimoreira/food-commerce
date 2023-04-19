import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
});

// baseURL: 'https://mywebsite.com/api',
// baseURL: 'https://mywebsite.com/api/burgers',
// baseURL: 'https://mywebsite.com/api/pizzas',
// baseURL: 'https://mywebsite.com/api/drinks',
// baseURL: 'https://mywebsite.com/api/desserts',
// ...

export const getBurgers = () => api.get('/burgers');
export const getPizzas = () => api.get('/pizzas');
export const getDrinks = () => api.get('/drinks');
export const getDesserts = () => api.get('/desserts');

export default api;
