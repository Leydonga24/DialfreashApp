import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';

export default function CameraScreen() {
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef<any>(null);

  if (!permission) return <View />; // Cargando permisos

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text>Necesitamos permiso para usar la cámara</Text>
        <TouchableOpacity onPress={requestPermission} style={styles.button}>
          <Text style={{color: 'white'}}>Conceder Permiso</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      console.log("Foto capturada:", photo.uri);
      // Aquí podrías llamar a tu productService para subir la imagen
    }
  };

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} ref={cameraRef}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.captureButton} onPress={takePicture}>
            <View style={styles.innerCircle} />
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center' },
  camera: { flex: 1 },
  buttonContainer: { flex: 1, backgroundColor: 'transparent', justifyContent: 'flex-end', alignItems: 'center', marginBottom: 40 },
  captureButton: { width: 70, height: 70, borderRadius: 35, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' },
  innerCircle: { width: 60, height: 60, borderRadius: 30, borderWidth: 2, borderColor: 'black' },
  button: { backgroundColor: '#2196F3', padding: 15, borderRadius: 10, marginTop: 10 }
});