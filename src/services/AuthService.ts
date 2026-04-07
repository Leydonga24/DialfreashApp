import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthService = {
  login: async (credentials: any) => {
    const response = await axios.post('http://192.168.0.105:3000/api/auth/login', credentials);
    const { token } = response.data;
    // Almacenamiento local del token
    await AsyncStorage.setItem('userToken', token);
    return token;
  },
  getToken: async () => {
    return await AsyncStorage.getItem('userToken');
  }
};