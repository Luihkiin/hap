import React, { useState, useEffect, useReducer } from 'react';
import { Alert, Text, View, TouchableOpacity, Image, TextInput, SafeAreaView, ScrollView } from "react-native";
import { estilo } from '../assets/css/Css.js'
import { LinearGradient } from 'expo-linear-gradient';
import { RadioButton } from 'react-native-paper';
import Login from './Login';
import SelectDropdown from 'react-native-select-dropdown';
import { TextInputMask } from 'react-native-masked-text';
import API from '../helpers/Api';

export default function Cadastro({ navigation }) {
  //VARIÁVEIS
  var [sexo, setSex] = useState('');
  global.sexoGlobal = sexo;
  var [nome, setNom] = useState('');
  global.nomeGlobal = nome;
  var [cpfMask, setCpfMask] = useState('');
  var cpf = cpfMask.replace(/[-.]/g, '');
  global.cpfGlobal = cpf;
  var [email, setEma] = useState('');
  global.emailGlobal = email;
  var [celMask, setCelMask] = useState('');
  var celular = celMask.replace(/[()-]/g, '');
  global.celGlobal = celular;
  var [pwd, setPwd] = useState('');
  global.pwdGlobal
  var [diaNasc, setDiaNasc] = useState('');
  var [mesNasc, setMesNasc] = useState('');
  var [anoNasc, setAnoNasc] = useState('');
  var [dataAtual, setDataAtual] = useState('');
  global.dataAtualGlobal = dataAtual;
  var [dataNasc, setDataNasc] = useState('');
  global.dataNascGlobal = dataNasc;
  var [idade, setIdade] = useState('');
  global.idadeGlobal = idade;
  //Variáveis para selecionar data
  const diaSeletor = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];
  const mesSeletor = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
  //Variável plano Premium. Criar laço com base na idade, para liberar o premium para quem tiver mais que 60 anos
  //var [premium] = useState('');
  /*A variável id365 define o status da pessoa
  1 - Ativo | 2 - Inativo | 3 - Aguardando aprovação | 4 - Banido*/
  global.id365 = useState('');

  /*Variavel que determina cliente ou funcionário.
  1 - Cliente | 2 - Funcionário */
  var [perfil, setPer] = useState('1');
  global.perfilGlobal = perfil;

  //Variável para comparação de senha
  var [pwdC, setPwdC] = useState('');

  //PROCESSAMENTO
  //Função para definir data Atual
  useEffect(() => {
    let hoje = new Date();
    //let data = hoje.getFullYear() + '-' + (hoje.getMonth() + 1) + '-' + hoje.getDate();
    setDataAtual(hoje);
    ConversorData();
  }, []);

  //If para definição de perfil de cliente ou funcionário
  if (perfil === '1') {
    global.id365 = '1'; //Cliente aprovado
  } else {
    global.id365 = '3'; //Funcionário aguardando aprovação
  }

  //Função para definir data Nascimento
  const ConversorData = () => {
    var nascObj = anoNasc + '-' + mesNasc + '-' + diaNasc;
    setDataNasc(nascObj);
    const dataFinal = dataAtual;
    const dataInicial = new Date(anoNasc, +mesNasc, +diaNasc);
    var milissegundos = dataFinal - dataInicial;
    var periodo = Math.floor(milissegundos / 31536000000);
    setIdade(periodo);
  }

  //Processamento de informações
  const ConfirmarInfo = async () => {
    if (idade == 0) {
      Alert.alert("Erro!", "Confirme sua idade");
    } else if (pwd === pwdC) {
      if ((nome.length == 0) || (pwd.length == 0) || (cpf.length == 0) || (email.length == 0)) {
        Alert.alert("Campos Faltando", "Insira as informações e tente novamente!");
      } else {
        await API.singUp();
        if ((token === 'access') || (token === 'permit')) {
          await navigation.navigate(Login);
        }
      }
    } else {
      Alert.alert("As senhas não conferem", "tente novamente!!!");
    }
  }

  //FRONT-END
  return (
    <LinearGradient
      colors={['#FFFFFF', '#00FFF0']}
      style={estilo.linearGradient}>
      <View>
        <Image
          style={estilo.image}
          source={require('../assets/img/icons/user.png')}>
        </Image>
      </View>
      <View style={estilo.singUpContainer}>
        <ScrollView>
          <Text style={estilo.centerTitle}>
            Cadastro
          </Text>
          <View style={estilo.rowContainer}>
            <Text style={estilo.text}>
              Você será:
            </Text>
            <View style={estilo.rowContainer}>
              <Text>
                Cliente
              </Text>
              <RadioButton
                value="1"
                status={perfil === '1' ? 'checked' : 'unchecked'}
                onPress={() => setPer('1')}
                color={'black'} />
              <Text>
                Funcionário
              </Text>
              <RadioButton
                value="2"
                status={perfil === '2' ? 'checked' : 'unchecked'}
                onPress={() => setPer('2')}
                style={estilo.radio}
                color={'black'} />
            </View>
          </View>
          <View>
            <TextInput
              style={estilo.box}
              onChangeText={(text) => setNom(text)}
              placeholder="Nome Completo">
            </TextInput>
            <View style={estilo.rowContainer}>
              <Text style={estilo.text}>
                Sexo:
              </Text>
              <View style={estilo.rowContainer}>
                <Text>
                  M
                </Text>
                <RadioButton
                  value="1"
                  status={sexo === '1' ? 'checked' : 'unchecked'}
                  onPress={() => setSex('1')}
                  color={'black'} />
                <Text>
                  F
                </Text>
                <RadioButton
                  value="2"
                  status={sexo === '2' ? 'checked' : 'unchecked'}
                  onPress={() => setSex('2')}
                  color={'black'} />
                <Text>
                  Outro
                </Text>
                <RadioButton
                  value="3"
                  status={sexo === '3' ? 'checked' : 'unchecked'}
                  onPress={() => setSex('3')}
                  color={'black'} />
              </View>
            </View>
            <TextInputMask
              style={estilo.box}
              type={'cpf'}
              value={cpfMask}
              onChangeText={(text) => setCpfMask(text)}
              placeholder="CPF" />
            <TextInput
              style={estilo.box}
              onChangeText={(text) => setEma(text)}
              placeholder="E-mail">
            </TextInput>
            <TextInputMask
              style={estilo.box}
              type={'cel-phone'}
              value={celMask}
              onChangeText={(text) => setCelMask(text)}
              placeholder="Celular" />
            <Text style={estilo.text}>
              Data de Nascimento
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
                  // text represented after item is selected
                  // if data array is an array of objects then return selectedItem.property to render after item is selected
                  setDiaNasc(selectedItem);
                  ConversorData();
                  return selectedItem
                }}
                rowTextForSelection={(item, index) => {
                  // text represented for each item in dropdown
                  // if data array is an array of objects then return item.property to represent item in dropdown
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
                  // Representação textual após o item ser selecionado
                  setMesNasc(selectedItem);
                  ConversorData();
                  return selectedItem
                }}
                rowTextForSelection={(item, index) => {
                  // Representação textual para cada item na caixa
                  return item
                }} />
              <TextInput
                style={estilo.dateBox}
                onChangeText={(text) => (setAnoNasc(text), ConversorData())}
                placeholder="Ano"
                keyboardType='numeric'>
              </TextInput>
            </View>
            <TextInput
              style={estilo.box}
              onChangeText={(text) => setPwd(text)}
              secureTextEntry={true}
              placeholder="Senha">
            </TextInput>
            <TextInput
              style={estilo.box}
              onChangeText={(text) => setPwdC(text)}
              secureTextEntry={true}
              placeholder="Confirme sua senha">
            </TextInput>
            <TouchableOpacity
              onPress={() => { ConfirmarInfo(), ConversorData() }}
              style={estilo.singUpButton}>
              <Text style={estilo.buttonText}>
                Confirmar Cadastro
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </LinearGradient >
  );
}
