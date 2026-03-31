import { useState } from "react"
import { TextInput, StyleSheet, View, Alert, Text, TouchableOpacity } from "react-native";
import { AdcionarUsuario } from "../database/queries";

const styles = StyleSheet.create({


    text: {
        marginBottom: 40,
        fontSize: 35,
        fontWeight: "bold",
        color: '#070707',
    },

    container: {
        flex: 1,
        padding: 20,
        justifyContent: "center",
        gap: 20,
    },
    input: {
        width: '100%',
        height: 55,
        backgroundColor: '#F8F9FA',
        borderRadius: 12,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#333',
        borderWidth: 1,
        borderColor: '#E9ECEF',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 2,
    },

    button: {
        paddingVertical: 15,
        paddingHorizontal: 40,
        backgroundColor: '#034f2e', 
        borderRadius: 70,
        marginTop: 20,
        elevation: 8,
        shadowColor: '#170f0f',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
    },

    buttonText: {
        color: '#5cf73d',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    }
})

export default function PrimeiroLogin({navigation}) {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const handleSalvar = async () => {
        console.log("Tentando salvar usuário:", { nome, email, senha });
        if (!nome || !email || !senha) {
            Alert.alert("Eita!", "Para continuar, preencha todos os campos.");
            return;
        }
        try {
            await AdcionarUsuario(nome, email, senha);
            Alert.alert("Sucesso!", "Usuário cadastrado com sucesso.");
            navigation.navigate("Login");

        }
        catch (error) {

            if(error.mensage.includes("UNIQUE constraint failed")) {
                Alert.alert("Ops!", "Este email já está em uso. Tente outro.");
            }else {
                console.log("Erro real:", error);
                Alert.alert("Ops!", "Ocorreu um erro ao cadastrar o usuário.");
            }
        }
    };

    return (
        <View style={styles.container}>

            <Text style={styles.text}>
                Crie sua conta no ZOO!
            </Text>

            <TextInput
            placeholder="Digite seu nome:"
            style={styles.input}
            value={nome}
            onChangeText={setNome}
            />

            <TextInput
            placeholder="Digite seu email:"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            />

            <TextInput
            placeholder="Crie sua senha:"
            style={styles.input}
            value={senha}
            onChangeText={setSenha}
            secureTextEntry={true}
            />

            <TouchableOpacity style={styles.button} onPress={handleSalvar}>
                <Text style={styles.buttonText}>Criar Conta!</Text>
            </TouchableOpacity>
        </View>
    );

}

