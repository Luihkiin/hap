import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useReducer, Component } from 'react';
import { Text, View, Image, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { estilo } from '../assets/css/Css'
import { LinearGradient } from 'expo-linear-gradient';
import Button from './Servico/components/Button';
import { sortedLastIndexOf } from 'lodash';
import { ActivityIndicator } from 'react-native';

export default function Perfil({ route, navigation }) {

  const [loading, setLoading] = useState(true);
  const [infos, setInfos] = useState([]);
  const { cpf } = route.params;

  //Processamento
  const coletarInfos = async () => {
    var headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };

    var Data = {
      cpf: cpf,
    };

    const response = await fetch('http://192.168.0.100:80/hap/perfil/perfilSelect.php', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(Data),
    })
      const jsonData = await response.json()
      //console.log('jsonData', jsonData)
      setInfos(jsonData)
      setLoading(false);
      console.log(infos)
  }

  useEffect(() => {
    coletarInfos();
  }, [])

  if (loading) {
    return (
      <View>
        <ActivityIndicator
          style={estilo.container}
          size="large"
          loading={loading} />
      </View>
    )
  }

  //front-end
  return (
    <LinearGradient colors={['#FFFFFF', '#00FFF0']}
      style={estilo.linearGradient}>
      <Image style={estilo.image} source={require('../assets/img/Person.png')} />
      <ScrollView style={estilo.loginContainer}>
        <View>
          <Text style={estilo.centerTitle}>Dados Cadastrados: </Text>
          <View style={estilo.infoContainer}>
            <Text style={estilo.dataTitle}>Dados pessoais </Text>
            <Text style={estilo.dataText}>Nome: {infos["Nome"]}</Text>
            <Text style={estilo.dataText}>Sexo: {infos["Sexo"]}</Text>
            <Text style={estilo.dataText}>CPF: {infos["CPF"]}</Text>
            <Text style={estilo.dataText}>Data Nascimento: {infos["DataNasc"]} </Text>
            <Text style={estilo.dataText}>Idade: {infos["Idade"]}</Text>
            <Text style={estilo.dataText}>Versão Confort: {infos["Premium"]}</Text>
          </View>
          <View style={estilo.infoContainer}>
            <Text style={estilo.dataTitle}>Informações de Contato</Text>
            <Text style={estilo.dataText}>Email: {infos["Email"]}</Text>
            <Text style={estilo.dataText}>Celular: {infos["Celular"]}</Text>
          </View>
          <View style={estilo.infoContainer}>
            <Text style={estilo.dataTitle}>
              Endereço Cadastrado:
            </Text>
            <Text style={estilo.dataText}>Cep: {infos["CEP"]}</Text>
            <Text style={estilo.dataText}>Estado: </Text>
            <Text style={estilo.dataText}>Cidade: </Text>
            <Text style={estilo.dataText}>Bairro: </Text>
            <Text style={estilo.dataText}>Rua: </Text>
            <Text style={estilo.dataText}>Número: </Text>
            <Text style={estilo.dataText}>Complemento: </Text>
          </View>
          <Text style={estilo.dataText}>Membro desde: {infos["DataCri"]}</Text>
          <TouchableOpacity
            style={estilo.singUpButton}
            onpress={() => navigation.navigate('Editar')}>
            <Text style={estilo.buttonText}>
              Atualizar Dados
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </LinearGradient >
  );
}
