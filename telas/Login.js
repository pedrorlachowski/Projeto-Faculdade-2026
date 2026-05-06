// Tela de Login
import {useState} from "react";  
import { TextInput, StyleSheet, Button, Alert, View, Text, TouchableOpacity } from "react-native";
import { BuscarUsuarioParaLogin } from "../database/queries";
const styles = StyleSheet.create({

    text: {
        marginBottom: 40,
        fontSize: 35,
        fontWeight: "bold",
        color: '#2D5A27',
    },

    input: {
        width: '100%',
        height: 55,
        backgroundColor: '#F8F9FA',
        borderRadius: 12,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#6b6b6b',
        borderWidth: 1,
        borderColor: '#ffffff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 2,
    },
        container: {
        flex: 1,
        padding: 20,
        justifyContent: "center",
        gap: 20,
        
        },

        button: {

        paddingVertical: 15,
        paddingHorizontal: 40,
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


    });             

    export default function Login({navigation}) {
        const [email, setEmail] = useState("");
        const [senha, setSenha] = useState("");

        const handleLogin = async () => {
            console.log("Tentando logar com:", { email, senha });
            if (!email || !senha) {
                Alert.alert("Eita!", "Para continuar, preencha todos os campos.");
                return;
            }
            try {
                const usuario = await BuscarUsuarioParaLogin(email, senha);

                if (usuario !== null) {
                    // Após iss o usuário pode navegar pela aplicação.
                    Alert.alert("Sucesso!", `Bem-vindo, ${usuario.nome}!`);
                    navigation.navigate("TelaPrincipal");
                    console.log("Usuário encontrado:", usuario);
                }else {
                    Alert.alert("Ops!", "Email ou senha incorretos. Tente novamente.");
                }
            } catch (error) {
               console.log("Erro real:", error);
               Alert.alert("Ops!", "Ocorreu um erro ao tentar fazer login.");
            }
        };

        return (
            <View style={styles.container}>

                <Text style={styles.text}>
                    Faça seu login para acessar o Speci!
                </Text>

                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    value={senha}
                    onChangeText={setSenha}
                    secureTextEntry={true}
                />
                <TouchableOpacity 
                style={styles.button} 
                onPress={handleLogin}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
            </View>
        );
    }