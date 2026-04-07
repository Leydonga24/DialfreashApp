// Mapeo de la tabla PRODUCTOS de Oracle a objeto TypeScript
export interface Producto {
  id: number;
  nombre: string;
  precio: number;
  stock: number;
  categoria?: string;
}