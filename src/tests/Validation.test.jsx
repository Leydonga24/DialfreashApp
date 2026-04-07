/// <reference types="jest" />
import React from 'react';
import renderer from 'react-test-renderer';
/** * CORRECCIÓN DE RUTA: Según la Figura 175866, 
 * 'tests' y 'components' son carpetas hermanas.
 */
import { MyButton, MyInput } from '../components/MyComponents';

describe('Suite de Validación Estructural - Dialfreash', () => {
  
  // Prueba del Botón
  test('Validación de MyButton: Debe renderizar el título correctamente', () => {
    const testTitle = "Confirmar Pedido";
    const component = renderer.create(
      <MyButton title={testTitle} onPress={() => {}} />
    );
    const instance = component.toJSON();
    
    // Verifica que el componente no sea nulo
    expect(instance).toBeDefined();
    
    // Snapshot para el reporte de cobertura
    expect(instance).toMatchSnapshot();
  });

  // Prueba del Input
  test('Validación de MyInput: Debe aceptar valores de texto', () => {
    const component = renderer.create(
      <MyInput placeholder="Ingrese producto" value="Zapatos" onChangeText={() => {}} />
    ).toJSON();
    
    expect(component).toBeDefined();
    expect(component).toMatchSnapshot();
  });

});