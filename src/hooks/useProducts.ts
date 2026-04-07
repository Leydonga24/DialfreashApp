import { useState, useEffect } from 'react';
import { getProducts } from '../services/api';

// Definimos la interfaz del Producto para que TypeScript no marque error
interface Product {
  id: string | number;
  nombre: string;
  precio: string | number;
}

export const useProducts = () => {
  // Inicializamos con el tipo Product[] para que la App sepa qué datos manejar
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const loadData = async () => {
    try {
      setLoading(true);
      const data = await getProducts();
      // Validamos que data sea un arreglo antes de guardarlo
      setProducts(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error cargando productos en el Hook:", error);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return { products, loading, refresh: loadData };
};