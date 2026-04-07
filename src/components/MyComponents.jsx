import React from 'react';
import { 
  TouchableOpacity, 
  Text, 
  TextInput, 
  StyleSheet, 
  View 
} from 'react-native';

// Componente de Botón Personalizado
export const MyButton = ({ title, onPress, color = '#2e7d32' }) => (
  <TouchableOpacity 
    style={[styles.button, { backgroundColor: color }]} 
    onPress={onPress}
  >
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

// Componente de Input Personalizado
export const MyInput = ({ placeholder, value, onChangeText, ...props }) => (
  <TextInput
    style={styles.input}
    placeholder={placeholder}
    value={value}
    onChangeText={onChangeText}
    placeholderTextColor="#666"
    {...props}
  />
);

const styles = StyleSheet.create({
  button: {
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
    marginVertical: 8,
    fontSize: 16,
  },
});