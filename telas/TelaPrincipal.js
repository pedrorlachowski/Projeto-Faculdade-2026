import {View, Text, StyleSheet, FlatList} from "react-native";
import Card_do_animal from "../componentesjs/Card_do_animal";   
import { CarregarAnimais as buscarAnimais } from "../database/queries";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native";

    
const styles = StyleSheet.create({
container: {
        flex: 1, // Crucial: faz a tela ocupar todo o espaço
        backgroundColor: '#F8F9FA', // Um cinza bem clarinho para destacar os cards brancos
    },
    header: {
        paddingTop: 20,
        paddingBottom: 10,
        backgroundColor: '#FFF',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#EEE',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#2D5A27',
    },
    listContent: {
        paddingBottom: 20, // Espaço extra no fim da lista
    },
    empty: {
        textAlign: 'center',
        marginTop: 50,
        color: '#999',
    }
});

export default function TelaPrincipal({navigation}) {
    const [animais, setAnimais] = useState([]); 

        useEffect(() => {
            CarregarAnimais();
        }, []);

        
        const CarregarAnimais = async () => {
            try {
                const animaisCarregados = await buscarAnimais();
                setAnimais(animaisCarregados || []); // Atualiza o estado com os animais carregados
            } catch (error) {
                console.error("Erro ao carregar os animais:", error);
            }
        };
      return (

    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.title}>Bem Vindo ao Speci!</Text>
        </View>
            <FlatList
                data={animais}
                keyExtractor={(item) => item.id_animal.toString()} 
                renderItem={({ item }) => (
                    <Card_do_animal 
                        animal={item}
                        onpress={() => navigation.navigate('TelaDetalhes', { animal: item.id_animal })}   
                    />
                )}
                ListEmptyComponent={<Text style={styles.empty}>Nenhum animal encontrado.</Text>}
            />
        </SafeAreaView>
      )

};
 