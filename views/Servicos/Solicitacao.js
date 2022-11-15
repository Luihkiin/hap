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
import FinalSolicitacao from './FinalSolicitacao.js';

export default function Solicitacao({ navigation }) {
  //Variáveis gerais
  const [pagamento, setPgto] = useState('Dinheiro');
  const [infos, setInfos] = useState([]);
  const [funcionarios, setFuncs] = useState([]);
  var [funcEscolhido, setFuncE] = useState('');
  const [loading, setLoading] = useState(true);
  var [dataSol, setDataSol] = useState('');
  var [descricao, setDescricao] = useState('');
  //Variáveis para selecionar data
  const diaSeletor = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];
  const mesSeletor = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
  var [diaAten, setDiaAten] = useState('');
  var [mesAten, setMesAten] = useState('');
  var [anoAten, setAnoAten] = useState('');
  var [dataAten, setDataAten] = useState('');
  //Variáveis Globais
  global.pagGlobal = pagamento;
  global.dataSolGlobal = dataSol;
  global.dataAtenGlobal = dataAten;
  global.servico = solicitacao[3];
  global.descGlobal = descricao;
  global.funcionario = funcEscolhido;

  //Processamento
  const criarSolicitacao = async () => {
    await API.createOrder();
    if (global.token = 'access') {
      navigation.navigate('FinalSolicitacao');
    }
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

  const dataAtendimento = () => {
    var dataProgramada = anoAten + '-' + mesAten + '-' + diaAten;
    setDataAten(dataProgramada);
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
              Selecionar Profissional
            </Text>
            <Text style={estilo.dataText}>
              ESCOLHER
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
                  dataAtendimento();
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
                  dataAtendimento();
                  return selectedItem
                }}
                rowTextForSelection={(item, index) => {
                  return item
                }} />
            </View>
          </View>
          <View style={estilo.infoContainer}>
            <View style={estilo.bigBox}>
              <TextInput
                onChangeText={(text) => setDescricao(text)}
                placeholder="Deseja adicionar mais alguma informação?"
                multiline={true}
                style={estilo.bigText}>
              </TextInput>
            </View>
          </View>
          <TouchableOpacity
            style={estilo.singUpButton}
            onPress={() => (dataAtendimento(), criarSolicitacao())}>
            <Text style={estilo.buttonText}> Confirmar Solicitação</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </LinearGradient>
  );
}


