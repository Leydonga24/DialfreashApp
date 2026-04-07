import React from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
// Asegúrate de que esta ruta sea exacta según tu carpeta 'src'
import { useProducts } from '../../src/hooks/useProducts';

// Definimos la estructura del producto para evitar errores de tipo 'any'
interface Product {
  id: number | string;
  nombre: string;
  precio: number | string;
}

export default function TabOneScreen() {
  // Extraemos los datos del hook
  const { products, loading } = useProducts();

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#2e7d32" />
        <Text style={{ marginTop: 10 }}>Cargando catálogo...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Catálogo Dialfreash</Text>
      <FlatList
        data={products as Product[]} // Forzamos el tipo para que TS no llore
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View>
              <Text style={styles.name}>{item.nombre}</Text>
              <Text style={styles.price}>${item.precio}</Text>
            </View>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.empty}>No hay productos disponibles.</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { 
    fontSize: 26, 
    fontWeight: 'bold', 
    marginBottom: 20, 
    color: '#2e7d32',
    textAlign: 'center' 
  },
  card: { 
    padding: 18, 
    backgroundColor: '#ffffff', 
    borderRadius: 12, 
    marginBottom: 12, 
    borderWidth: 1, 
    borderColor: '#ececec',
    elevation: 2, // Sombra para Android
    shadowColor: '#000', // Sombra para iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  name: { fontSize: 18, fontWeight: '700', color: '#333' },
  price: { fontSize: 16, color: '#2e7d32', fontWeight: '600', marginTop: 4 },
  empty: { textAlign: 'center', marginTop: 50, color: '#999', fontSize: 16 }
});