import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Nome from './componentesjs/nome';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Olá, Mundo!</Text>
      <Nome />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4b4b4aa3',
    alignItems: 'center',
    justifyContent: 'center',
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
}
  },
});
