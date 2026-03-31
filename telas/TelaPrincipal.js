import {View, Text, StyleSheet} from "react-native";

    
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff'
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});

export default function TelaPrincipal() {
    return (
        <View>
            <Text>Bem-vindo à Tela Principal!</Text>
        </View>
    );
}