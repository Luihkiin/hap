import React from 'react';
import { Text, View, TextInput, Image } from 'react-native';
import { estilo } from './assets/css/Css.js'
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <LinearGradient
    colors={['#FFFFFF', '#00FFF0']}
    style={estilo.linearGradient}>
    
    <View style={estilo.container}>
      <Image
      style={estilo.imagem}
      source={require('./assets/img/Logo.png')}
      ></Image>
      <View style={estilo.informacao}>
        <Text style={estilo.texto}>
          CPF
        </Text>
        <View style={estilo.caixa}>
          <TextInput

          >
          </TextInput>
        </View>
        <Text style={estilo.texto}>
          Senha
        </Text>
        <View style={estilo.caixa}>
          <TextInput

          >
          </TextInput>
        </View>

        <View syles={estilo.informacao}>
        <Text style={estilo.rodape}> Esqueci a senha </Text>
        <Text style={estilo.rodape}> Cadastre-se </Text>
        </View>
      </View>
    </View>
    </LinearGradient>
  );
}

