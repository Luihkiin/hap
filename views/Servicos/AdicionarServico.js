import React, { useState, useEffect, useReducer } from 'react';
import { Alert, Text, View, TouchableOpacity, Image, TextInput, SafeAreaView, ScrollView } from "react-native";
import { estilo } from '../../assets/css/Css.js'
import { LinearGradient } from 'expo-linear-gradient';
import { RadioButton } from 'react-native-paper';
import SelectDropdown from 'react-native-select-dropdown';
import { setStatusBarBackgroundColor } from 'expo-status-bar';
import { ActivityIndicator } from 'react-native';
//import { moment } from 'moment';
import { Card, Button } from 'react-native-elements';

export default function AdicionarServico({ navigation }) {

  const [loading, setLoading] = useState(true);
  const [servicos, setServicos] = useState([]);

  //Processamento
  const coletarServico = async () => {
    const response = await
      fetch('http://192.168.0.100:80/hap/servicos/servico.php')
        .then((response) => response.json())
        .then((response) => console.log(response))
    setLoading(false);
  }


  useEffect(() => {
    coletarServico();
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


  //FRONT-END
  return (
    /* <View style={estilo.container}>
      <Card>
        <Card.Title
        //title={articles[0].title}
        />
        <Card.Cover
        //source={{ uri: articles[0].url }}
        />
        <View>
          <Text> Source</Text>

        </View>

        <View>
          <Text>Published</Text>
          <Text></Text>
        </View>
      </Card>
    </View>*/
    //)
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
                Adicionar Serviço {servicos[0]}
              </Text>
              <View>
                <SelectDropdown
                  buttonStyle={estilo.box}
                  defaultButtonText={"Serviço"}
                  data={servicos}
                  onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index)
                  }}
                  buttonTextAfterSelection={(selectedItem, index) => {
                    // text represented after item is selected
                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                    setServicos(selectedItem);
                    return selectedItem
                  }}
                  rowTextForSelection={(item, index) => {
                    // text represented for each item in dropdown
                    // if data array is an array of objects then return item.property to represent item in dropdown
                    return item
                  }}
                />
                <TextInput
                  style={estilo.box}
                  onChangeText={(text) => setPreco(text)}
                  keyboardType='numeric'
                  placeholder="Preço do serviço">
                </TextInput>
                <TextInput
                  style={estilo.box}
                  onChangeText={(text) => setDesc(text)}
                  placeholder="Descrição do serviço"
                  maxLenght="100"
                >
                </TextInput>
                <TouchableOpacity
                  onPress={() => AssociarServico()}
                  style={estilo.button}>
                  <Text style={estilo.buttonText}>
                    Confirmar Cadastro
                  </Text>
                </TouchableOpacity>
              </View>

            </View>
          </SafeAreaView>
        </ScrollView>
      </View>

    </LinearGradient >
  )
}
