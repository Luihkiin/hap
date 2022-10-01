import React, { useState, useEffect, useReducer, Component } from 'react';
import { Alert, Text, View, TouchableOpacity, Image, TextInput } from "react-native";
import { estilo } from '../assets/css/Css.js'
import { LinearGradient } from "expo-linear-gradient";
import Cadastro from './Cadastro';
import EsqSenha from './EsqSenha';
import Servico from './Servico';
import { clickProps } from 'react-native-web/dist/cjs/modules/forwardedProps/index.js';
import { URL } from 'react-native-url-polyfill';

export default function Login({ navigation }) {

  //Declaração das Variáveis
  var [CPF, setCPF] = useState('');
  var [PWD, setPWD] = useState('');

  //Função Login
  FazerLogin = () => {
    if ((CPF.length == 0) || (PWD.length == 0)) {
      Alert.alert("Campos Faltando");
    } else {
      //Variável que conecta com o login.php, que está dentro de htdocs
      var APIURL = new URL('http://192.168.0.104:80/login.php');

      var headers = {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json'
      };

      //Variáveis que serão utilizadas na função fetch
      var Data = {
        CPF: CPF,
        PWD: PWD,
      };

      //Função Fetch (Leva os dados para o PHP)
      fetch(APIURL, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(Data),
      })
      .then((response)=>response.json())
      .then((response)=>{
        alert(response[0].Message)
        if (response[0].Message === "Bem-Vindo") {
          console.log("true")
          navigation.navigate(CadFunc);
        }
        console.log(Data);
      })
      .catch((error)=>{
        console.log("Erro encontrado: " + error);
      })
    }
  }

  //Início Front-End
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
          <Text style={estilo.texto}>
            CPF
          </Text>
          <View style={estilo.caixa}>
            <TextInput
              keyboardType="numeric"
              onChangeText={(text) => setCPF(text)}
            >
            </TextInput>
          </View>
          <Text style={estilo.texto}>
            Senha
          </Text>
          <View style={estilo.caixa}>
            <TextInput
              onChangeText={(text) => setPWD(text)}
              secureTextEntry={true}>
            </TextInput>
          </View>
          <TouchableOpacity style={estilo.botao}
            onPress={() => {FazerLogin()}}>
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


