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
  var [servicoId, setServId] = useState('');
  global.servicos = servicoId;
  
  const coletarServico = async () => {
    setServicos(jsonService)
    setLoading(false)
  }

  useEffect(() => {
    coletarServico();
  }, [])

  const selecionarServicos = () => {
    navigation.navigate('AdicionarServico')    
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
                {servicos.map((servicos) => {
                  return (
                    <View>
                      <Card style={estilo.card}>
                        <Card.Title
                          style={estilo.dataText}
                          title={servicos.Nome}
                          subtitle={servicos.Descricao}>
                        </Card.Title>
                        <Card.Content>
                          <Text style={estilo.dataTitle}>
                            R$ {servicos.Preco}</Text>
                        </Card.Content>
                        <Card.Actions>
                          <TouchableOpacity style={estilo.cardButton}
                            onPress={() => (setServId(servicos.Id), selecionarServicos())}>
                            <Text style={estilo.buttonText}>Selecionar</Text>
                          </TouchableOpacity>
                        </Card.Actions>
                      </Card>
                    </View>
                  )
                })}
              </View>
            </View>
          </SafeAreaView>
        </ScrollView>
      </View>
    </LinearGradient>
  )
}
