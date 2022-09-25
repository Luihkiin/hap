import React, { useEffect, useReducer } from 'react';
import { Alert, Text, View, TouchableOpacity, Image, TextInput, SafeAreaView } from "react-native";
import { estilo } from '../assets/css/Css.js'
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import Login from './Login';
import CadCli from './CadCli';
import CadFunc from './CadFunc';

function Teste() {
  Alert.alert('Mensagem de Teste', 'Funcionou!!!')
}

export default function Cadastro({ navigation }) {

  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
  });

  //Inicio Front-End
  return (
    <LinearGradient
      colors={['#FFFFFF', '#00FFF0']}
      style={estilo.linearGradient}>

      <SafeAreaView style={estilo.container}>
        <Text style={estilo.titulo}>
          Cadastro
        </Text>

        <Text style={estilo.paragrafo}
        >
          Escolha o tipo de usuário que você deseja para se registrar
        </Text>

        <TouchableOpacity
          onPress={() => navigation.navigate(CadCli)}>
          <View style={estilo.caixaGrande}>
            <Text style={estilo.tituloIcon}>
              Cliente
            </Text>
            <Image
                style={estilo.icon}
                source={require('../assets/img/icons/Cliente.png')}
              ></Image>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate(CadFunc)}>
          <View style={estilo.caixaGrande}>
            <Text style={estilo.tituloIcon}>
              Funcionário
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate(Login)}>
          <View style={estilo.caixa}>
            <Text style={estilo.textoCentro}>
              Voltar
            </Text>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    </LinearGradient>
  );
}

