import React, { useState, useEffect, useReducer } from 'react';
import { Alert, Text, View, TouchableOpacity, Image, TextInput, SafeAreaView, ScrollView } from "react-native";
import { estilo } from '../assets/css/Css.js'
import { LinearGradient } from 'expo-linear-gradient';
import { RadioButton } from 'react-native-paper';
import Login from './Login';
import CadastroFunc from './CadastroFunc';
import SelectDropdown from 'react-native-select-dropdown';
import { setStatusBarBackgroundColor } from 'expo-status-bar';

export default function Cadastro({ navigation }) {

  //VARIÁVEIS
  var [sexo, setSex] = useState('');
  var [nome, setNom] = useState('');
  var [cpf, setCpf] = useState('');
  var [email, setEma] = useState('');
  var [celular, setCel] = useState('');
  var [pwd, setPwd] = useState('');
  var [diaNasc, setDiaNasc] = useState('');
  var [mesNasc, setMesNasc] = useState('');
  var [anoNasc, setAnoNasc] = useState('');
  var [dataAtual, setDataAtual] = useState('');
  var [dataNasc, setDataNasc] = useState('');
  var [idade, setIdade] = useState('');
  //Variáveis para selecionar data
  const diaSeletor = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];
  const mesSeletor = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
  //Variável plano Premium. Criar laço com base na idade, para liberar o premium para quem tiver mais que 60 anos
  //var [premium] = useState('');
  /*A variável id365 define o status da pessoa
  1 - Ativo | 2 - Inativo | 3 - Aguardando aprovação | 4 - Banido*/
  var [id365] = useState('');
  //Essas variáveis pódem ser utilizadas depois do cadastro (na parte de personalização do perfil)
  var [fotoRg] = useState('');
  var [fotoPerfil] = useState('');
  /*Variavel que determina cliente ou funcionário.
  0 - Cliente | 1 - Funcionário */
  const [perfil, setPer] = React.useState('1');
  /* Variáveis para endereço
  var [estado, setEst] = useState('');
  var [cidade, setCid] = useState('');
  var [bairro, setBai] = useState('');
  var [rua, setRua] = useState('');
  var [numero, setNum] = useState('');
  var [complemento, SetCom] = useState('');
  var [cep, setCep] = useState('');
  */
  /*Variáveis para funcionário. Pode ser atribuída no perfil, assim ele é cadastrado como ativo e ao inserir essas informações, 
  irá para o Id: aguardando aprovação.
  var [curriculo, setCur] = useState('');
  var [cpnj, setCnp] = useState('');
  var [antCriminal, setAnc] = useState('');*/

  //Variável para comparação de senha
  var [pwdC, setPwdC] = useState('');

  //PROCESSAMENTO
  //Função para definir data Atual
  useEffect(() => {
    let hoje = new Date();
    let data = hoje.getFullYear() + '-' + (hoje.getMonth() + 1) + '-' + hoje.getDate();
    setDataAtual(data);
  }, []);

  //If para definição de perfil de cliente ou funcionário
  if (perfil === '1') {
    id365 = '1'; //Cliente
  } else {
    id365 = '3'; //Funcionário
  }

  //Função para definir data Nascimento
  ConversorData = () => {
    var nascObj = anoNasc + '-' + mesNasc + '-' + diaNasc;
    setDataNasc(nascObj);
    const dataFinal = new Date(dataAtual);
    const dataInicial = new Date(+anoNasc, +mesNasc, +diaNasc);
    var milissegundos = dataFinal - dataInicial;
    var periodo = Math.floor(milissegundos / 31536000000);
    setIdade(periodo);
  }

  ConfirmarInfo = () => {
    if (idade == 0) {
      Alert.alert("Erro!", "Confirme sua idade");
    } else if (pwd === pwdC) {
      //Função para fazer o cadastro e Conferir senhas antes de prosseguir com o cadastro
      //Conferir campos vazios
      if ((nome.length == 0) || (pwd.length == 0) || (cpf.length == 0) || (email.length == 0)) {
        Alert.alert("Campos Faltando", "Insira as informações e tente novamente!");
      } else {
        //Variável que conecta com o cadastro.php, que está dentro de htdocs
        var APIURL = new URL('http://192.168.0.100:80/cadastro.php');

        var headers = {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        };

        //Variáveis que serão utilizadas na função fetch
        var Data = {
          nome: nome,
          sexo: sexo,
          cpf: cpf,
          email: email,
          celular: celular,
          pwd: pwd,
          dataNasc: dataNasc,
          idade: idade,
          dataAtual: dataAtual,
          id365: id365,
          perfil: perfil,
        };

        //Função Fetch (Leva os dados para o PHP)
        fetch(APIURL, {
          method: 'POST',
          headers: headers,
          body: JSON.stringify(Data),
        })
          .then((response) => response.json())
          .then((response) => {
            alert(response[0].Message)
            if (response[0].Message == "Cadastro efetuado com sucesso") {
              console.log("true")
              navigation.navigate(Login);
            }
          })
          .catch((error) => {
            console.log("Erro encontrado: " + error);
          })
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
      <SafeAreaView style={estilo.container}>
        <Text style={estilo.titulo}>
          Cadastro
        </Text>
        <ScrollView>
          <View>
            <Text style={estilo.texto}>
              Você será
            </Text>
            <View style={estilo.rowContainer}>
              <Text>
                Cliente
              </Text>
              <RadioButton
                value="1"
                status={perfil === '1' ? 'checked' : 'unchecked'}
                onPress={() => setPer('1')}
                color={'black'}
              />
              <Text>
                Funcionário
              </Text>
              <RadioButton
                value="2"
                status={perfil === '2' ? 'checked' : 'unchecked'}
                onPress={() => setPer('2')}
                style={estilo.radio}
                color={'black'}
              />
            </View>
          </View>
          <View style={estilo.container}>
            <Text style={estilo.texto}>
              Nome Completo
            </Text>
            <TextInput
              style={estilo.caixa}
              onChangeText={(text) => setNom(text)}>
            </TextInput>
            <Text style={estilo.texto}>
              Sexo
            </Text>
            <View style={estilo.rowContainer}>
              <Text>
                Masculino
              </Text>
              <RadioButton
                value="1"
                status={sexo === '1' ? 'checked' : 'unchecked'}
                onPress={() => setSex('1')}
                color={'black'}
              />
              <Text>
                Feminino
              </Text>
              <RadioButton
                value="2"
                status={sexo === '2' ? 'checked' : 'unchecked'}
                onPress={() => setSex('2')}
                color={'black'}
              />
              <Text>
                Outro
              </Text>
              <RadioButton
                value="3"
                status={sexo === '3' ? 'checked' : 'unchecked'}
                onPress={() => setSex('3')}
                color={'black'}
              />
            </View>
            <Text style={estilo.texto}>
              CPF
            </Text>
            <TextInput
              style={estilo.caixa}
              onChangeText={(text) => setCpf(text)}
              keyboardType='numeric'>
            </TextInput>
            <Text style={estilo.texto}>
              E-Mail
            </Text>
            <TextInput
              style={estilo.caixa}
              onChangeText={(text) => setEma(text)}>
            </TextInput>
            <Text style={estilo.texto}>
              Celular
            </Text>
            <TextInput
              style={estilo.caixa}
              onChangeText={(text) => setCel(text)}
              keyboardType='numeric'>
            </TextInput>
            <Text style={estilo.texto}>
              Data de Nascimento
            </Text>
            <View style={estilo.rowContainer}>
              <SelectDropdown
                buttonStyle={estilo.caixaPequena}
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
                }}
              />
              <SelectDropdown
                buttonStyle={estilo.caixaPequena}
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
                }}
              />
              <TextInput
                style={estilo.caixaPequena}
                onChangeText={(text) => (setAnoNasc(text), ConversorData())}
                placeholder="Ano"
                keyboardType='numeric'>
              </TextInput>
            </View>
            <Text style={estilo.texto}>
              Senha
            </Text>
            <TextInput
              style={estilo.caixa}
              onChangeText={(text) => setPwd(text)}
              secureTextEntry={true}>
            </TextInput>
            <Text style={estilo.texto}>
              Confirmar Senha
            </Text>
            <TextInput
              style={estilo.caixa}
              onChangeText={(text) => setPwdC(text)}
              secureTextEntry={true}>
            </TextInput>
          </View>
          <TouchableOpacity
            onPress={() => ConfirmarInfo()}
            style={estilo.botao}>
            <Text style={estilo.clicavel}>
              Confirmar Cadastro
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient >
  );
}
