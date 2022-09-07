import React, { useState, useEffect, useReducer, Component } from 'react';
import { Alert, Text, View, TouchableOpacity, Image, TextInput } from "react-native";
import { estilo } from '../assets/css/Css.js'
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from 'expo-font';
import Cadastro from './Cadastro';
import Feather from 'react-native-vector-icons/Feather';
import ElementosLogin from '../assets/components/ElementosLogin.js';
import { response } from 'express';
//import AsyncStorage from '@react-native-async-storage';

export default function Login({ navigation }) {

  //Declaração de variáveis
  const [CPF, setCPF] = useState('');
  const [PWD, setPWD] = useState('');

  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
  });

  //Função para Gravar Dados  
  function GravarDados() {

    if ((CPF == '') || PWD == '') {
      Alert.alert('Campos Faltando');
    } else {
      /*var APIURL = "http://localhost:80/hap/login.php"; //Utilizar este diretório dentro de HTDOCS (Retirar arquivos .php antigos)

      var headers = {
        'Accept': 'application/json',
        'Content-Type': 'appplication/json'
      };
      Alert.alert("Campos Preenchidos");*/

      //Função que Faz Login
      async function FazerLogin(){
        let reqs = await fetch('http://localhost:3000/login',{
          method: 'POST',
          headers:{
              'Accept':'application/json',
              'Content-Type':'application/json'
          },
          body: JSON.stringify({
              cpf: CPF,
              senha: PWD
          })
      });
      let json=await response.json();
      if(json === 'error'){
        setDisplay('flex');
        setTimeout(()=>{
          setDisplay('none');
        },5000);
      }
      }
    }
    var Dados = {
      CPF: CPF,
      PWD: PWD,
    };

    //Função Fetch
    /*fetch(APIURL, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(Dados) //Converte Dados para JSON
    })
      .then((Response) => Response.json())
      .then((Response) => {
        alert(Response[0].Message)
        if (Response[0].Message == "Sucesso") {
          console.log("true")
          this.props.navigation.navigate(Cadastro); //Navega para a Tela Inicial (COM SERVIÇOS)
        }
        console.log(Date);
      })
      .catch((error) => {
        console.error("Erro encontrado" + error);
      })*/

  }

  function Teste() {
    Alert.alert('Mensagem de Teste', 'Funcionou!!!')
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
              placeholder="Insira seu CPF aqui"
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
              placeholder="Insira sua senha aqui"
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
            onPress={GravarDados}>
            <Text style={estilo.clicavel}>
              Entrar
            </Text>
          </TouchableOpacity>

          <View syles={estilo.informacao}>
            <TouchableOpacity
              onPress={Teste}>
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


