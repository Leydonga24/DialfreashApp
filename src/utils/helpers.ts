// Función para dar formato de moneda a los precios de los zapatos
export const formatPrice = (price: number) => {
  return `$${price.toFixed(2)}`;
};