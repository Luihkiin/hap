import React, { useEffect, useReducer, Component } from 'react';
import { Alert, Text, View, TouchableOpacity, Image, TextInput } from "react-native";
import { estilo } from '../assets/css/Css.js'
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from 'expo-font';
import Cadastro from './Cadastro';
import Feather from 'react-native-vector-icons/Feather';
import ElementosLogin from '../assets/components/ElementosLogin.js';
import { useState } from 'react';
import EsqSenha from './EsqSenha';
import Servico from './Servico';

//Início Front-End
export default function Login({ navigation }) {

  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
  });

  function Teste() {
    Alert.alert('Mensagem de Teste', 'Funcionou!!!')
  }

  //Declaração das variáveis
  const [CPF, setCPF] = useState('');
  const [PWD, setPWD] = useState('');

  //Função para Gravar Dados
  function GravarDados() {
    var CPF = this.state.CPF;
    var PWD = this.state.PWD;

    if ((CPF == '') || PWD == '') {
      Alert.alert("Campos faltando!");
    } else {
      
      Alert.alert("Campos preenchidos!");
    }
    //Função Fetch
  }

  return (
    <LinearGradient
      colors={['#FFFFFF', '#00FFF0']}
      style={estilo.linearGradient}>

      <View style={estilo.container}>
        <Image
          style={estilo.imagem}
          source={require('../assets/img/Logo.png')}
        ></Image>
        <View style={estilo.informacao}>
          <Text style={estilo.texto}
          >
            CPF: {CPF}
          </Text>
          <View style={estilo.caixa}>
            <TextInput
              keyboardType="numeric"
              onChangeText={(text) => setCPF(text)}
            >
            </TextInput>
          </View>
          <Text style={estilo.texto}
          >
            Senha: {PWD}
          </Text>
          <View style={estilo.caixa}>
            <TextInput
              onChangeText={(text) => setPWD(text)}
              /*secureTextEntry={ElementosLogin.state.secureTextEntry ? true : false}
  onChangeText={ PWD => this.state({PWD})}*/>

            </TextInput>

            {/* <TouchableOpacity
              onPress={ElementosLogin.updateSecureTextEntry.bind(this)}>
              {ElementosLogin.state.secureTextEntry ?
                <Feather
                  name="eye-off"
                  color="grey"
                  size={20} />
                :
                <Feather
                  name="eye"
                  color="black"
                  size={20} />}
              </TouchableOpacity>*/}
          </View>
          <TouchableOpacity style={estilo.botao}
            //onPress={ElementosLogin.InsertRecord}>

            //Teste com o Fetch dentro do onPress
            onPress={() => {
              GravarDados,
              navigation.navigate(Servico)
            }}>
            <Text style={estilo.clicavel}>
              Entrar
            </Text>
          </TouchableOpacity>

          <View syles={estilo.informacao}>
            <TouchableOpacity
              onPress={() => navigation.navigate(EsqSenha)}>
              <Text style={estilo.clicavel}> Esqueci a senha </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate(Cadastro)}>
              <Text style={estilo.clicavel}> Cadastre-se </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}


