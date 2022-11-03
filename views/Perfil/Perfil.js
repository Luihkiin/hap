import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useReducer, Component } from 'react';
import { Text, View, Image, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { estilo } from '../../assets/css/Css'
import { LinearGradient } from 'expo-linear-gradient';
import { sortedLastIndexOf } from 'lodash';
import { ActivityIndicator } from 'react-native';
import { EditarPerfil } from './EditarPerfil';
import API from '../../helpers/Api';

export default function Perfil({ route, navigation }) {

  const [loading, setLoading] = useState(true);
  const [infos, setInfos] = useState([]);
  const { cpf } = route.params;

  //Processamento
  const coletarInfos = async () => {
    API.profileSelect();
    setInfos(jsonProfile);
    setLoading(false);
  }

  console.log(infos);

  useEffect(() => {
    setLoading(true);
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
      <Image style={estilo.image} source={infos["Image"]} />
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
            <Text style={estilo.dataText}>Cep: {infos["Cep"]}</Text>
            <Text style={estilo.dataText}>Estado: {infos["Estado"]}</Text>
            <Text style={estilo.dataText}>Cidade: {infos["Cidade"]}</Text>
            <Text style={estilo.dataText}>Bairro: {infos["Bairro"]}</Text>
            <Text style={estilo.dataText}>Rua: {infos["Rua"]}</Text>
            <Text style={estilo.dataText}>Número: {infos["Numero"]}</Text>
            <Text style={estilo.dataText}>Complemento: {infos["Complemento"]}</Text>
          </View>
          <Text style={estilo.dataText}>Membro desde: {infos["DataCri"]}</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('EditarPerfil', { cpf })}
            style={estilo.singUpButton}>
            <Text style={estilo.buttonText}>
              Atualizar Dados
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </LinearGradient >
  );
}
