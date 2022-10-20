import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useReducer, Component } from 'react';
import { Text, View, Image, SafeAreaView } from 'react-native';
import { estilo } from '../assets/css/Css'
import { LinearGradient } from 'expo-linear-gradient';
import Button from './Servico/components/Button';
import { sortedLastIndexOf } from 'lodash';

export default function Perfil({ navigation }) {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //Variável que conecta com o perfil.php, que está dentro de htdocs
  var APIURL = new URL('http://192.168.0.100:80/hap/perfil.php');

  //Função Fetch (Leva os dados para o PHP)
  useEffect(() => {
    fetch(APIURL)
      .then(resposta => {
        if (resposta.ok) {
          return resposta.json()
        }
        throw resposta;
      })
        .then(data => {
          setData(data);
        })
        .catch(error => {
          console.error("Erro encontrado: ", error);
          setError(error);
        })
        .finally(() => {
          setLoading(false);
        })
  }, [])
  /*resposta.json())
.then((resposta) => resposta.json())
.then((json) => setNome(json))
.catch((error) => {
  console.log("Erro encontrado: " + error);
})*/

  //front-end
  return (

    <LinearGradient colors={['#FFFFFF', '#00FFF0']}
      style={estilo.linearGradient}>
      <SafeAreaView style={estilo.container}>
        <Text style={estilo.titulo}>Nome: {nome}</Text>
        <Text style={estilo.titulo}>Sexo: </Text>
        <StatusBar style="auto" />
        <Image style={estilo.logo} source={require('../assets/img/Person.png')} />
        <View>
          <Text style={estilo.textoCentro}> Dados Cadastrados: </Text>
        </View>
        <View>
          <Text style={estilo.texto}>
            Idade
          </Text>
          <Text style={estilo.caixa}>
            {nome}
          </Text>
        </View>
        <Text style={estilo.caixaPequena}>xxxxxxxxx</Text>
        <Text style={estilo.caixaPequena}>xxxxxxxx</Text>
        <Text style={estilo.caixaPequena}>xxxxxxxx</Text>
        <Text style={estilo.caixaPequena}>xxxxxx</Text>
        <Text style={estilo.caixaPequena}>xxxxxx</Text>
        <Button labelButton='Atualizar Dados' onpress={() => navigation.navigate('Editar')} />

      </SafeAreaView>
    </LinearGradient>

  );
}
