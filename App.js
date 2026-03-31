import React, {use, useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';  
import { ListaUsuariosNoConsole } from './database/queries';

// Importando a função de inicialização do banco de dados
import { initializeDatabase } from './database/initialize';

import TelaPrincipal from './telas/TelaPrincipal';
import TelaInicial from './telas/TelaInicial';
import Login from './telas/Login';
import PrimeiroLogin from './telas/PrimeiroLogin';
// Não usar bibliotecas web para componentes React Native, pois elas não são compatíveis. 
// Use apenas as bibliotecas nativas do React Native.
const Stack = createNativeStackNavigator();
export default function App() {
  const [ dbPronto, setDbPronto] = useState(false);



  useEffect(() => {
    async function prepararBanco() {
      try{
        console.log("Iniciando o banco de dados...");
        await initializeDatabase();
        setDbPronto(true); // libera o app apenas quando o banco estiver pronto

        await ListaUsuariosNoConsole(); // Lista os usuários no console para verificar se o banco está funcionando
        console.log("Banco de dados preparado com sucesso!");
      }catch (error) {
        console.log("Erro Fatal ao preparar o banco de dados:", error);
      }
    }
    prepararBanco();
  }, []); // colchetes vazios servem para rodar o banco apenas uma vez.

  if (!dbPronto) {
    return (
      <View 
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      >
        <ActivityIndicator size="large" color="#0dfaaf" />
      </View>

    );
  }

  return (
    
    <NavigationContainer> 
      <Stack.Navigator 
        initialRouteName="TelaInicial"
        screenOptions={{
          contentStyle: { backgroundColor: '#ffffff' } // Aplica a cor de fundo em todas as telas
        }}
      > 
        <Stack.Screen 
          name="TelaInicial" 
          component={TelaInicial} 
          options={{ title: 'ZOO' }}
        />
        <Stack.Screen 
          name="Login" 
          component={Login} 
        />

        <Stack.Screen 
        name="PrimeiroLogin"
        component={PrimeiroLogin}
        options={{title: "Nova Conta"}}
        />


        <Stack.Screen
        name="TelaPrincipal"
        component={TelaPrincipal}
        options={{title: "Área Principal"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

