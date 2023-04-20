import axios from 'axios';
import { SnackData } from '../interfaces/SnackData';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
});

// baseURL: 'https://mywebsite.com/api',
// baseURL: 'https://mywebsite.com/api/burgers',
// baseURL: 'https://mywebsite.com/api/pizzas',
// baseURL: 'https://mywebsite.com/api/drinks',
// baseURL: 'https://mywebsite.com/api/desserts',
// ...

export const getBurgers = () => api.get<SnackData[]>('/burgers');
export const getPizzas = () => api.get<SnackData[]>('/pizzas');
export const getDrinks = () => api.get<SnackData[]>('/drinks');
export const getDesserts = () => api.get<SnackData[]>('/desserts');

export default api;
