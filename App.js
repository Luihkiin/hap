import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Cadastro, Login, Servico, EsqSenha, Pesquisa, CadastroFunc } from './views';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false}} />
        <Stack.Screen name="Servico" component={Servico} options={{ headerShown: false}} />
        <Stack.Screen name="EsqSenha" component={EsqSenha} options={{ headerShown: false}} />
        <Stack.Screen name="Pesquisa" component={Pesquisa} options={{ headerShown: false}} />
        <Stack.Screen name="CadastroFunc" component={CadastroFunc} options={{ hearderShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}