import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import * as Location from 'expo-location';

export default function GPSComponent() {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const getPosition = async () => {
    setLoading(true);
    // 1. Solicitar permisos
    let { status } = await Location.requestForegroundPermissionsAsync();
    
    if (status !== 'granted') {
      setErrorMsg('Permiso de localización denegado');
      setLoading(false);
      return;
    }

    // 2. Obtener posición actual
    try {
      let currentLocation = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High, // Alta precisión para nivel de Magíster
      });
      setLocation(currentLocation);
      console.log("Coordenadas obtenidas:", currentLocation.coords);
    } catch (error) {
      Alert.alert("Error", "No se pudo obtener la ubicación. Verifica tu GPS.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Módulo de Georreferenciación</Text>
      
      {loading ? (
        <Text>Obteniendo satélites...</Text>
      ) : (
        <View style={styles.infoBox}>
          {location ? (
            <>
              <Text>Latitud: {location.coords.latitude}</Text>
              <Text>Longitud: {location.coords.longitude}</Text>
              <Text>Altitud: {location.coords.altitude?.toFixed(2)} m</Text>
            </>
          ) : (
            <Text>{errorMsg || "Presiona el botón para ubicar el dispositivo"}</Text>
          )}
        </View>
      )}

      <TouchableOpacity style={styles.button} onPress={getPosition}>
        <Text style={styles.buttonText}>Actualizar Ubicación GPS</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, alignItems: 'center', backgroundColor: '#f5f5f5', borderRadius: 10, margin: 10 },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  infoBox: { marginVertical: 15, padding: 10, borderLeftWidth: 4, borderLeftColor: '#4CAF50', backgroundColor: '#fff', width: '100%' },
  button: { backgroundColor: '#4CAF50', padding: 15, borderRadius: 8, width: '100%', alignItems: 'center' },
  buttonText: { color: 'white', fontWeight: 'bold' }
});