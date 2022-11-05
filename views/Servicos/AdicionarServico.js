import React, { useState, useEffect, useReducer } from 'react';
import { Alert, Text, View, TouchableOpacity, Image, TextInput, SafeAreaView, ScrollView, FlatList } from "react-native";
import { estilo } from '../../assets/css/Css.js'
import { LinearGradient } from 'expo-linear-gradient';
import SelectDropdown from 'react-native-select-dropdown';
import { setStatusBarBackgroundColor } from 'expo-status-bar';
import { ActivityIndicator } from 'react-native';
import { Card } from 'react-native-paper';
import API from '../../helpers/Api';

export default function AdicionarServico({ navigation }) {

  const [loading, setLoading] = useState(true);
  const [servicos, setServicos] = useState([]);

  //Processamento
  const coletarServico = async () => {
    API.listServices();
    setServicos(jsonService)
    setLoading(false)
    
  }

  console.log(servicos.length)

  useEffect(() => {
    coletarServico();
  }, [])

  const adicionarServico = async () => {

  }

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

  //FRONT-END
  return (
    <LinearGradient
      colors={['#FFFFFF', '#00FFF0']}
      style={estilo.linearGradient}>
      <View>
        <Image
          style={estilo.image}
          source={require('../../assets/img/icons/Services.png')}>
        </Image>
      </View>
      <View style={estilo.loginContainer}>
        <ScrollView>
          <SafeAreaView>
            <View>
              <Text style={estilo.centerTitle}>
                Adicionar Serviço
              </Text>
              <View>
                <Card style={estilo.card}>
                  <Card.Title
                    style={estilo.dataText}
                    title={servicos[0]["Nome"]}
                    subtitle={servicos[0]["Descricao"]}>
                  </Card.Title>
                  <Card.Content>
                    <Text style={estilo.dataTitle}>
                      R$ {servicos[0]["Preco"]}</Text>
                  </Card.Content>
                  <Card.Actions>
                    <TouchableOpacity style={estilo.cardButton}
                    onPress ={() => adicionarServico()}>
                      <Text style={estilo.buttonText}>Selecionar</Text>
                    </TouchableOpacity>
                  </Card.Actions>
                </Card>
                <Card style={estilo.card}>
                  <Card.Title
                    title={servicos[1]["Nome"]}
                    subtitle={servicos[1]["Descricao"]}
                    style={estilo.dataText}>
                  </Card.Title>
                  <Card.Content>
                    <Text style={estilo.dataTitle}>
                      R$ {servicos[1]["Preco"]}</Text>
                  </Card.Content>
                  <Card.Actions>
                    <TouchableOpacity style={estilo.cardButton}
                    onPress ={() => adicionarServico()}>
                      <Text style={estilo.buttonText}>Selecionar</Text>
                    </TouchableOpacity>
                  </Card.Actions>
                </Card>
                <Card style={estilo.card}>
                  <Card.Title
                    title={servicos[2]["Nome"]}
                    subtitle={servicos[2]["Descricao"]}
                    style={estilo.dataText}>
                  </Card.Title>
                  <Card.Content>
                    <Text style={estilo.dataTitle}>
                      R$ {servicos[2]["Preco"]}</Text>
                  </Card.Content>
                  <Card.Actions>
                    <TouchableOpacity style={estilo.cardButton}>
                      <Text style={estilo.buttonText}>Selecionar</Text>
                    </TouchableOpacity>
                  </Card.Actions>
                </Card>
              </View>
              <View>
                <TouchableOpacity style={estilo.singUpButton}>
                  <Text style={estilo.buttonText}>
                    Confirmar escolhas</Text>
                </TouchableOpacity>
              </View>
            </View>
          </SafeAreaView>
        </ScrollView>
      </View>
    </LinearGradient >
  )
}
