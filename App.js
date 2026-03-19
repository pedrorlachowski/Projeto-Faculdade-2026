import Componente from './componentes/componentes';
import { MeuTemplateJs } from './componentes/componentes';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Meu primeiro app React Native!</Text>
      <Componente />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0ba06a3',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
