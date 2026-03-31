// Componente para exibir a imagem na tela inicial
import react from "react";
import { View, Image,StyleSheet } from "react-native";


export default function TelaInicialImagem() {
    return (
        <View style={styles.container}>
            <Image 
                    source={require('../assets/tigre.jpg')}
                    style={styles.logo}
            />
        </View>
    );

}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
     // Espaçamento entre os elementos
  },
  logo: {
    width: 400,
    height: 200,
    resizeMode: 'contain', // Mantém a proporção da imagem
  },
});