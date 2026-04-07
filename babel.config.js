module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // Necesario para la navegación y variables de entorno
      'expo-router/babel',
      'react-native-reanimated/plugin',
    ],
  };
};