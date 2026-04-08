import axios from 'axios';
import { Producto } from '../../types';

// URL de tu API (donde corre tu backend vinculado a Oracle)
const API_URL = 'http://tu-ip-servidor:3000/api/productos';

export const ProductService = {
  // READ: Obtener todos los productos
  getAll: async (): Promise<Producto[]> => {
    const response = await axios.get(API_URL);
    return response.data;
  },

  // CREATE: Agregar un nuevo producto
  create: async (producto: Omit<Producto, 'id'>): Promise<Producto> => {
    const response = await axios.post(API_URL, producto);
    return response.data;
  },

  // UPDATE: Actualizar stock o precio
  update: async (id: number, datos: Partial<Producto>): Promise<void> => {
    await axios.put(`${API_URL}/${id}`, datos);
  }
};