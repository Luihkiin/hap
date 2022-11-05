import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Cadastro, Login, EsqSenha, Perfil, EditarPerfil, Pesquisa, TelaInicial, AdicionarServico, Solicitacao} from './views';
import 'react-native-gesture-handler';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false}} />
        <Stack.Screen name="EsqSenha" component={EsqSenha} options={{ headerShown: false}} />
        <Stack.Screen name="Pesquisa" component= { Pesquisa } options={{ headerShown: false}} />
        <Stack.Screen name="Perfil" component={Perfil} options={{ headerShown: false}} />
        <Stack.Screen name="TelaInicial" component={TelaInicial} options={{headerShown: false}} />
        <Stack.Screen name="AdicionarServico" component={AdicionarServico} options={{headerShown: false}} />
        <Stack.Screen name="EditarPerfil" component={EditarPerfil} options={{ headerShown: false}} />
        <Stack.Screen name="Solicitacao" component={Solicitacao} options={{ headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}