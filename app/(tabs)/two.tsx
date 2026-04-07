import React from 'react';
import { TouchableOpacity, Text, TextInput, StyleSheet, KeyboardTypeOptions } from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
  color?: string;
}

export const MyButton = ({ title, onPress, color = '#2e7d32' }: ButtonProps) => (
  <TouchableOpacity style={[styles.btn, { backgroundColor: color }]} onPress={onPress}>
    <Text style={styles.btnText}>{title}</Text>
  </TouchableOpacity>
);

interface InputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  keyboardType?: KeyboardTypeOptions;
}

export const MyInput = ({ placeholder, value, onChangeText, keyboardType = 'default' }: InputProps) => (
  <TextInput 
    style={styles.input}
    placeholder={placeholder}
    value={value}
    onChangeText={onChangeText}
    keyboardType={keyboardType}
    placeholderTextColor="#999"
  />
);

const styles = StyleSheet.create({
  btn: { padding: 15, borderRadius: 8, alignItems: 'center', marginVertical: 10 },
  btnText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
  input: { borderBottomWidth: 1, borderColor: '#ccc', padding: 10, marginVertical: 8, fontSize: 16 },
});