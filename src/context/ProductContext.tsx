import React, { createContext, useState, useContext, useEffect } from 'react';
import { Producto } from '../types';
import { ProductService } from '../services/productService';

interface ProductContextType {
  productos: Producto[];
  loading: boolean;
  cargarProductos: () => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider = ({ children }: any) => {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [loading, setLoading] = useState(true);

  const cargarProductos = async () => {
    try {
      const data = await ProductService.getAll();
      setProductos(data);
    } catch (error) {
      console.error("Error cargando productos de Oracle:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { cargarProductos(); }, []);

  return (
    <ProductContext.Provider value={{ productos, loading, cargarProductos }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);