# Guía de Compilación APK - Dialfreash

Para generar el binario de instalación de la aplicación, siga estos pasos:

1. **Instalar EAS CLI**: `npm install -g eas-cli`
2. **Login**: `eas login`
3. **Configurar proyecto**: `eas build:configure`
4. **Compilar APK local**: 
   `npx expo run:android --variant release`
5. **Compilar en la nube**: 
   `eas build -p android --profile preview`