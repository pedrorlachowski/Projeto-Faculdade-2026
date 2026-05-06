// Tela Inicial
import {useState} from "react";
import { Text, StyleSheet, TouchableOpacity,View } from "react-native";
import TelaInicialImagem from "../componentesjs/TelaInicialImagem";
const styles = StyleSheet.create({
    text: {
        marginBottom: 40,
        fontSize: 35,
        fontWeight: "bold",
        alignItems: "center",
        justifyContent: "center",
        color: "#2D5A27"
    },

    text2: {
        marginBottom: 40,
        fontSize: 20,
        fontWeight: "bold",
        alignItems: "center",
        justifyContent: "center",
    },

    container: {
      flex: 1,
      backgroundColor: '#ebebeb',
      padding: 80,
    },
    button: {
        paddingVertical: 8,
        paddingHorizontal: 30,
        backgroundColor: '#2D5A27', 
        borderRadius: 70,
        marginTop: 20,
        elevation: 8,
        shadowColor: '#170f0f',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
       
    },
    buttonText: {
        color: '#fafffd',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    }

})

export default function TelaInicial({navigation}) {
    return (
        <View style={styles.container}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={styles.text}>Bem Vindo ao Speci!</Text>
                <Text style={styles.text2}>
                    O mundo animal na palma da sua mão.
                </Text>
                <TelaInicialImagem/>
            </View>
            <View>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("PrimeiroLogin")}>
                    <Text style={styles.buttonText}>Novo? Crie sua conta!</Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => navigation.navigate("Login")}
                >
                    <Text style={styles.buttonText}>Ir para Tela de Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}