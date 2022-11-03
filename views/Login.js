import React, { useState } from 'react';
import { Alert, Text, View, TouchableOpacity, Image, TextInput } from "react-native";
import { estilo } from '../assets/css/Css.js'
import { LinearGradient } from "expo-linear-gradient";
import Cadastro from './Cadastro';
import EsqSenha from './EsqSenha';
import ServicoFunc from './Servicos/ServicoFunc';
import { TextInputMask } from 'react-native-masked-text';
import API from '../helpers/Api';

export default function Login({ navigation }) {
  //Declaração das Variáveis
  var [CPFMask, setCpfMask] = useState('');
  global.cpf = CPFMask.replace(/[-.]/g, '');
  var [pwd, setPwd] = useState('');
  global.pwdGlobal = pwd;

  //Função Login
  const FazerLogin = async () => {
    if ((cpf.length == 0) || (pwd.length == 0)) {
      Alert.alert("Campos Faltando", "Insira seu CPF ou senha!");
    } else {
      await API.login();
      if (token === 'access') {
        await navigation.navigate('ServicoFunc', { CPFMask, cpf })
      } else if (token === 'restrict'){
        await navigation.navigate(Cadastro)
      }
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
          Bem-vindo
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