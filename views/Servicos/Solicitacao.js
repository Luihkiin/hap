import { useState, useEffect } from 'react';
import { View, StyleSheet, Image, Button, ScrollView } from 'react-native';
import { RadioButton, Text, TextInput } from 'react-native-paper';
import { estilo } from '../../assets/css/Css.js';
import { LinearGradient } from 'expo-linear-gradient';
import { ActivityIndicator } from 'react-native';
import TelaInicial from './TelaInicial';
import API from '../../helpers/Api';
import { TouchableOpacity } from 'react-native-gesture-handler';
import SelectDropdown from 'react-native-select-dropdown';

export default function Solicitacao({ navigation }) {
  const [pagamento, setPgto] = useState('dinheiro');
  const [infos, setInfos] = useState([]);
  const [loading, setLoading] = useState(true);
  var [dataSol, setDataSol] = useState('');
  //Variáveis para selecionar data
  const diaSeletor = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];
  const mesSeletor = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
  var [diaAten, setDiaAten] = useState('');
  var [mesAten, setMesAten] = useState('');
  var [anoAten, setAnoAten] = useState('');

  //Processamento
  const criarSolicitacao = async () => {
    await API.createOrder();

  }

  const endereco = async () => {
    await API.profileSelect();
    setInfos(jsonProfile);
    setLoading(false);
  }

  const dataAtual = async () => {
    let hoje = new Date();
    setDataSol(hoje);
    let ano = hoje.getFullYear();
    setAnoAten(ano);
  }

  const dataAten = async () =>{
    var dataAten = new Date(anoAten, +mesAten, +diaAten);
  }

  useEffect(() => {
    setLoading(true);
    endereco();
    dataAtual();
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

  //Criar uma variável para DATA DA SOLICITAÇÃO e DATA ATENDIMENTO


  return (
    <LinearGradient
      colors={['#FFFFFF', '#00FFF0']}
      style={estilo.linearGradient}>
      <View>
        <Image
          style={estilo.image}
          source={require('../../assets/img/icons/Order.png')}>
        </Image>
      </View>
      <View style={estilo.loginContainer}>
        <ScrollView>
          <Text style={estilo.centerTitle}>
            Criar pedido
          </Text>
          <View style={estilo.infoContainer}>
            <Text style={estilo.dataTitle}>
              Informações do serviço
            </Text>
            <Text style={estilo.dataText}>
              Serviço escolhido: {solicitacao[0]}
            </Text>
            <Text style={estilo.dataText}>
              Preço: R$ {solicitacao[1]}
            </Text>
            <Text style={estilo.dataText}>
              Descrição:
            </Text>
            <Text style={estilo.dataText}>
              {solicitacao[2]}
            </Text>
          </View>
          <View style={estilo.infoContainer}>
            <Text style={estilo.dataTitle}>
              Forma de Pagamento
            </Text>
            <View style={estilo.rowContainer}>
              <Text style={estilo.dataText}>
                Dinheiro
              </Text>
              <RadioButton
                value="Dinheiro"
                status={pagamento === 'Dinheiro' ? 'checked' : 'unchecked'}
                onPress={() => setPgto('Dinheiro')}
                color={'black'} />
              <Text style={estilo.dataText}>
                Pix
              </Text>
              <RadioButton
                value="Pix"
                status={pagamento === 'Pix' ? 'checked' : 'unchecked'}
                onPress={() => setPgto('Pix')}
                color={'black'} />
              <Text style={estilo.dataText}>
                Cartão
              </Text>
              <RadioButton
                value="Cartao"
                status={pagamento === 'Cartao' ? 'checked' : 'unchecked'}
                onPress={() => setPgto('Cartao')}
                color={'black'} />
            </View>
          </View>
          <View style={estilo.infoContainer}>
            <Text style={estilo.dataTitle}>
              Endereço cadastrado:
            </Text>
            <Text style={estilo.dataText}>Cep: {infos["Cep"]}</Text>
            <Text style={estilo.dataText}>Estado: {infos["Estado"]}</Text>
            <Text style={estilo.dataText}>Cidade: {infos["Cidade"]}</Text>
            <Text style={estilo.dataText}>Bairro: {infos["Bairro"]}</Text>
            <Text style={estilo.dataText}>Rua: {infos["Rua"]}</Text>
            <Text style={estilo.dataText}>Número: {infos["Numero"]}</Text>
            <Text style={estilo.dataText}>Complemento: {infos["Complemento"]}</Text>
          </View>
          <View style={estilo.infoContainer}>
            <Text style={estilo.dataTitle}>
              Data de atendimento:
            </Text>
            <View style={estilo.rowContainer}>
              <SelectDropdown
                buttonStyle={estilo.dateBox}
                defaultButtonText={"Dia"}
                data={diaSeletor}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index)
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                  setDiaAten(selectedItem);
                  dataAten();
                  return selectedItem
                }}
                rowTextForSelection={(item, index) => {
                  return item
                }} />
              <SelectDropdown
                buttonStyle={estilo.dateBox}
                defaultButtonText={"Mês"}
                data={mesSeletor}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index)
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                  setMesAten(selectedItem);
                  dataAten();
                  return selectedItem
                }}
                rowTextForSelection={(item, index) => {
                  return item
                }} />
            </View>
          </View>
          <TouchableOpacity
            style={estilo.singUpButton}
            onPress={() => (criarSolicitacao(), dataAten())}>
            <Text style={estilo.buttonText}> Confirmar Solicitação</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </LinearGradient>
  );
}


