import React, { useState, useEffect, useReducer, Component } from 'react';
import { Alert, Text, View, TouchableOpacity, Image, TextInput } from "react-native";
import { estilo } from '../assets/css/Css.js'
import { LinearGradient } from "expo-linear-gradient";
import Cadastro from './Cadastro';
import EsqSenha from './EsqSenha';
import ServicoFunc from './Servicos/ServicoFunc';
import { TextInputMask } from 'react-native-masked-text';

export default function Login({ navigation }) {

  //Declaração das Variáveis
  var [CPFMask, setCpfMask] = useState ('');
  var cpf = CPFMask.replace(/[-.]/g, '');
  var [pwd, setPwd] = useState('');
  var [perfil, setPer] = useState('');

  //Função Login
  FazerLogin = () => {
    if ((cpf.length == 0) || (pwd.length == 0)) {
      Alert.alert("Campos Faltando", "Insira seu CPF ou senha!");
    } else {
      //Variável que conecta com o login.php, que está dentro de htdocs

      var headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      };

      //Variáveis que serão utilizadas na função fetch
      var Data = {
        cpf: cpf,
        pwd: pwd,
      };

      //Função Fetch (Leva os dados para o PHP)
      fetch ('http://192.168.0.100:80/hap/login.php', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(Data),
      })
        .then((response) => response.json())
        .then((response) => {
          alert((response[0].Message))
          if (response[0].Message === "Bem-Vindo") {
            console.log("true")
            navigation.navigate('ServicoFunc', {CPFMask, cpf})
          }
          console.log(Data);
        })
        .catch((error) => {
          console.log("Erro encontrado: " + error);
        })
    }
  }

  //Início Front-End
  return (
    <LinearGradient
      colors={['#FFFFFF', '#00FFF0']}
      style={estilo.linearGradient}>

      <View>
        <Image
          style={estilo.image}
          source={require('../assets/img/Logo.png')}>
        </Image>
      </View>

      <View style={estilo.loginContainer}>
        <Text style={estilo.centerTitle}>
          Bem-vindo de volta
        </Text>
        <TextInputMask
          style={estilo.box}
          type={'cpf'}
          value={CPFMask}
          onChangeText={(text) => setCpfMask(text)}
          placeholder="CPF"
          />
        <View style={estilo.box}>
          <TextInput
            onChangeText={(text) => setPwd(text)}
            secureTextEntry={true}
            placeholder="Senha">
          </TextInput>
        </View>

        <TouchableOpacity style={estilo.button}
          onPress={() => { FazerLogin() }}>
          <Text style={estilo.buttonText}>
            Entrar
          </Text>
        </TouchableOpacity>

        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate(EsqSenha)}>
            <Text style={estilo.text}> Esqueci minha senha </Text>
          </TouchableOpacity>
        </View>
        
        <View style={estilo.footer}>
          <View style={estilo.rowContainer}>
            <Text style={estilo.textFooter}>
              Ainda não possui conta?
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate(Cadastro)}>
              <Text style={estilo.textFooter}> Cadastre-se </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}


