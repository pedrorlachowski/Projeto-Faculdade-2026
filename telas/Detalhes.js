import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    banner: {
        width: '100%',
        height: 200,
    },
    infoContainer: {
        padding: 20,
    },
    titulo: {
        fontSize: 28, 
        fontWeight: '800', 
        color: '#2D5A27',
        letterSpacing: -0.5,
    },
    cientifico: {
        fontSize: 18, 
        fontStyle: 'italic', 
        color: '#665', 
        marginBottom: 20
    },
    dividir: {
        height: 1, 
        backgroundColor: '#EEE', 
        marginVertical: 15
    },
    sectionTitle: {
        fontSize: 20, 
        fontWeight: 'bold', 
        color: '#333', 
        marginTop: 10
    },
    description: {
        fontSize: 16, 
        color: '#555', 
        lineHeight: 24, 
        marginTop: 5,
        lineHeight: 22,
    },
    botao: {
        paddingVertical: 15,
        paddingHorizontal: 40,
        backgroundColor: '#0d7212', 
        borderRadius: 70,
        marginTop: 20,
        elevation: 8,
        shadowColor: '#170f0f',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
    },
    textobotao: {
        color: '#fafffd', 
        fontSize: 16, 
        fontWeight: 'bold', 
        textAlign: 'center',
    }
})
  
  export default function Detalhes({ route }) {

const AbrirSiteOng = async () => {

    await WebBrowser.openBrowserAsync('https://www.worldanimalprotection.org.br/');
}
 const { animal } = route.params;
 console.log(animal);

   return(
         <ScrollView style={styles.container}>
          < Image source={{uri: animal.imagem_url}}
           style={styles.banner}
           />

        <View style={styles.infoContainer}>

            <Text style={styles.titulo}>
                {animal.nome_animal}
            </Text>

            <Text style={styles.cientifico}>
                {animal.nome_cientifico}
            </Text>

            <View style={styles.dividir}/>

            <Text style={styles.sectionTitle}>Habitat</Text>

            <Text style={styles.description}>
                {animal.habitat}
            </Text>

            <Text style={styles.sectionTitle}>Descrição do Animal:</Text>

            <Text style={styles.description}>
                {animal.descricao}
            </Text>

            <TouchableOpacity style={styles.botao} onPress={AbrirSiteOng}>
                <Text style={styles.textobotao}>
                    Ajude Agora!
                </Text>
            </TouchableOpacity>
        </View>
     </ScrollView>
   );
   
}
  


