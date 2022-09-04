import React, { useEffect, useReducer } from 'react';
import config from "../config/config.json";
import { Text, View, SafeAreaView, TextInput, TouchableOpacity, Alert } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { estilo } from "../assets/css/Css";
import Inicio from './Inicio';

//Funcoes

function Teste() {
  Alert.alert('Mensagem de Teste', 'Sucesso')
}

export default function Login({ navigation }) {

  //Variaveis
  const [usuario, setUser] = React.useState(null);
  const [senha, setPassword] = React.useState(null);

  //Envia os dados para o backend
  async function fazerLogin() {
    let reqs = await fetch(config.urlRootPhp + 'create', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nameUser: usuario,
        passwordUser: senha
      })
    });

    let ress = await reqs.json();
      if(ress){
        navigation.navigate(Inicio);
      }else{
        Alert.alert('Usuário ou senha inválidos');
      }
  }

  //Inicio do código
  return (
    <View style={estilo.container}>

      <LinearGradient
        colors={['#FFFFFF', '#00FFF0']}
        style={estilo.imagem}>

        <View style={estilo.titulo}>
          <Text> Login </Text>
        </View>

        <View>
          <Text style={estilo.subtitulo}>
            CPF:</Text>

          <SafeAreaView>
            <TextInput
              style={estilo.entradaDados}
              onChangeText={(text) => setUser(text)}
              value={usuario}
              placeholder="CPF"
              keyboardType="numeric"
            />

            <Text style={estilo.subtitulo}>
              Senha:</Text>

            <TextInput
              style={estilo.entradaDados}
              onChangeText={(text) => setPassword(text)}
              value={senha}
              placeholder="Insira sua senha"
            />
          </SafeAreaView>
        </View>

        <View>
          <TouchableOpacity
            style={estilo.botao}
            //onPress={() => navigation.navigate('Inicio')}
            onPress={fazerLogin}
          >
            <Text>Entrar</Text>
          </TouchableOpacity>
        </View>

        <Text onPress={() => Alert.alert('Funcionou o esqueci')}
          style={estilo.informativo}>
          Esqueci a senha
        </Text>

        <Text onPress={() => Alert.alert('Funcionou o cadastro')}
          style={estilo.informativo}>
          Cadastre-se
        </Text>

      </LinearGradient >
    </View >
  )
}