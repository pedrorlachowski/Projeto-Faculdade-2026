import React from "react";  
import {View, Text, StyleSheet, Pressable} from "react-native";
import { Image } from "react-native";
import { Heart, ChevronRight } from "lucide-react-native"; 

export default function Card_do_animal({animal, onpress}) {

    if (!animal) {
        return null;
    }

    return (
        <Pressable style={styles.card} onPress={onpress}>

            <Image 
            source={{uri: animal.imagem_url}} 
            style={styles.image} 
            resizeMode ='cover'
            transition={500}
            />

            <View style={styles.content}>   
                <View style={styles.header}>
                    <Text style={styles.name}>{animal.nome_animal}</Text>
                    <Pressable onPress={() => console.log('Favoritou!')}>
                        <Heart size={18} color="#2D5A27" />
                    </Pressable>
                </View>

                <Text style={styles.scientifcname}>{animal.nome_cientifico}</Text>

                <View style={styles.footer}>
                    <View style={styles.tag}>
                        <Text style={styles.tagtext}>{animal.habitat}</Text>
                    </View>
                    <ChevronRight size={18} color="#2D5A27" />
                </View>
            </View>
       </Pressable>
    );

}
 const styles = StyleSheet.create({
    card: {
        backgroundColor: '#81bc71',
        borderRadius: 15,
        marginVertical: 10,
        marginHorizontal: 15,
        flexDirection: 'row', // Alinha imagem à esquerda e texto à direita
        overflow: 'hidden',
    // Sombras para Android e iOS
        elevation: 5,
        shadowColor: '#2D5A27',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.1,
        shadowRadius: 20,
        minHeight: 110, // Altura mínima para garantir que o card tenha um tamanho consistente
    },
    image: {
        width: 100,
        height: '100%',
    },
    content: {
        flex: 1,
        padding: 12,
        justifyContent: 'space-between',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 2,
    },
    name: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#333',
        flex: 1,
        marginRight: 10, // Espaço entre o nome e o ícone de coração
    },
    scientifcname: {
        fontSize: 13,
        fontStyle: 'italic',
        color: '#777',
        marginTop: -2,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 8,
    },
    tag: {
        backgroundColor: '#2D5A27',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 8,
    },
    tagtext: {
        fontSize: 11,
        color: '#f7faf6',
        fontWeight: '600',
        textTransform: 'uppercase',
    },

 });
 