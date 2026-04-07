import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

const api = axios.create({
  baseURL: 'http://TU_IP_LOCAL:3000', // Usa tu IP, no 'localhost' para que el celular lo vea
});

// Interceptor para CADA petición que sale de la app
api.interceptors.request.use(
  async (config) => {
    // Buscamos el token en el almacenamiento seguro del dispositivo
    const token = await SecureStore.getItemAsync('userToken');
    
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;