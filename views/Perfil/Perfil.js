import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useReducer, Component } from 'react';
import { Text, View, Image, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { estilo } from '../../assets/css/Css'
import { LinearGradient } from 'expo-linear-gradient';
import { sortedLastIndexOf } from 'lodash';
import { ActivityIndicator } from 'react-native';
import { EditarPerfil } from './EditarPerfil';
import API from '../../helpers/Api';

export default function Perfil({ navigation }) {

  const [loading, setLoading] = useState(true);
  const [infos, setInfos] = useState([]);
  const [photo, setPhoto] = useState('');
  var [sexo, setSexo] = useState('');
  var [premium, setPremium] = useState('');

  //Processamento
  const coletarInfos = async () => {
    await API.profileSelect();
    setInfos(jsonProfile);
    setLoading(false);
  }

  console.log(infos);

  const conversorInfos = async () => {
    if (infos["Sexo"] = 1){
      setSexo("Masculino")
    } else if (infos["Sexo"] = 2){
      setSexo("Feminino")
    } else {
      setSexo("Outros")
    }

    if (infos["Premium"] = "0"){
      setPremium("Desabilitada")
    } else if (infos["Premium"] = "1"){
      setPremium("Habilitada")
    } else {
      setPremium("Desabilitada")
    }
  }


  useEffect(() => {
    setLoading(true);
    coletarInfos();
    conversorInfos();
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
      <Image style={estilo.image} source={require('../../assets/img/Person.png')} />
      <ScrollView style={estilo.loginContainer}>
        <View>
          <Text style={estilo.centerTitle}>Dados Cadastrados: </Text>
          <View style={estilo.infoContainer}>
            <Text style={estilo.dataTitle}>Dados pessoais </Text>
            <Text style={estilo.dataText}>Nome: {infos["Nome"]}</Text>
            <Text style={estilo.dataText}>Sexo: {sexo}</Text>
            <Text style={estilo.dataText}>CPF: {infos["CPF"]}</Text>
            <Text style={estilo.dataText}>Data Nascimento: {infos["DataNasc"]} </Text>
            <Text style={estilo.dataText}>Idade: {infos["Idade"]}</Text>
            <Text style={estilo.dataText}>Versão Confort: {premium}</Text>
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
