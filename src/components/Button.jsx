import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

// Exportación con el nombre correcto: DialfreashButton
export const DialfreashButton = ({ title, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: { backgroundColor: '#2E7D32', padding: 15, borderRadius: 8 },
  buttonText: { color: '#fff', textAlign: 'center', fontWeight: 'bold' }
});