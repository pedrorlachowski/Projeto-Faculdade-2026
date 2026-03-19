import React from "react";  
import { Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    fontWeight: "bold",
  },
});

export default function Nome() {
  return (
    <Text style={styles.text}>Olá, Mundo!</Text>
  );
}