import React, { useEffect, useReducer, Component } from 'react';
import { Alert, Text, View, TouchableOpacity, Image, TextInput } from "react-native";
import { estilo } from '../assets/css/Css.js'
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from 'expo-font';
import Cadastro from './Cadastro';
import Feather from 'react-native-vector-icons/Feather';
import ElementosLogin from '../assets/components/ElementosLogin.js';
import { useState } from 'react';

class Construtor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      CPF: '',
      PWD: '',
      check_textInputChange: false,
      secureTextEntry: true,
    };
  }
}

function InsertRecord() {
  var CPF = this.state.CPF;
  var PWD = this.state.PWD;

  if ((CPF.length == 0) || PWD.length == 0) {
    Alert.alert("Campos faltando!");
  } else {
    /*var APIURL = "http://localhost:80/Entrar/login.php"; //Utilizar este diretório dentro de HTDOCS (Retirar arquivos .php antigos)

    var headers = {
      'Accept': 'application/json',
      'Content-Type': 'appplication/json'
    };*/

    Alert.alert("Campos preenchidos!");
  }
  /*var Dados = {
    CPF: CPF,
    PWD: PWD,
  };

  //Função Fetch
  fetch(APIURL, {
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
    })
}*/
}


export default function Login({ navigation }) {

  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
  });

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
            CPF
          </Text>
          <View style={estilo.caixa}>
            <TextInput
              placeholder="Insira seu CPF aqui"
              keyboardType="numeric"
              onChangeText={CPF => this.setState({ CPF })}
            >
            </TextInput>
          </View>
          <Text style={estilo.texto}
          >
            Senha
          </Text>
          <View style={estilo.caixa}>
            <TextInput
              placeholder="Insira sua senha aqui"
              onChangeText={PWD => this.setState({ PWD })}
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
            onPress={InsertRecord}>
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


