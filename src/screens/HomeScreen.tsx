import { View, Text, StyleSheet } from 'react-native';
import { DialfreashButton } from '../components/Button';

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dialfreash: Calzado Sostenible</Text>
      <DialfreashButton title="Ver Catálogo" onPress={() => console.log('Navegar')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5F5F5' },
  title: { fontSize: 24, fontWeight: 'bold', color: '#333' }
});
