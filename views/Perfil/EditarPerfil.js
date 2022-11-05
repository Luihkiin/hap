import React, { useState, useEffect } from 'react';
import { Alert, StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { estilo } from '../../assets/css/Css'
import { LinearGradient } from 'expo-linear-gradient';
import { TextInput } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import { ServicoFunc } from '../Servicos/TelaInicial';
import API from '../../helpers/Api';

export default function EditarPerfil({ route, navigation }) {
    //Declaração de variáveis
    const { cpf } = route.params;
    const [loading, setLoading] = useState(true);
    const [infos, setInfos] = useState([]);
    var [email, setEma] = useState('');
    var [celular, setCel] = useState('');
    var [cep, setCep] = useState('');
    var [cidade, setCid] = useState('');
    var [bairro, setBai] = useState('');
    var [rua, setRua] = useState('');
    var [complemento, setCom] = useState('');
    var [numero, setNum] = useState('');
    const [image, setImage] = useState(null);
    global.cpfGlobal = cpf;
    global.emailGlobal = email;
    global.celGlobal = celular;
    global.cepGlobal = cep;
    global.cidadeGlobal = cidade;
    global.bairroGlobal = bairro;
    global.ruaGlobal = rua;
    global.complementoGlobal = complemento;
    global.numeroGlobal = numero;
    global.imageGlobal = image;

    //Processamento
    //Constultar Perfil
    const coletarInfos = async () => {
        API.profileSelect();
        setInfos(jsonProfile);
        setLoading(false);
    }

    useEffect(() => {
        coletarInfos();
    }, [])

    //Atualizar Perfil
    AtualizarInfos = () => {
        if ((email.length == 0) || (celular.length == 0) || (cep.length == 0) || (cidade.length == 0) || (bairro.length == 0) || (rua.length == 0) || (complemento.length == 0) || (numero.length == 0)) {
            Alert.alert("Campos faltando", "Insira suas informações!!!");
        } else {
            API.profileUpdate();
            if (token === 'access') {
                navigation.navigate('TelaInicial', { cpf })
            }
        }
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

    //Front-End
    return (
        <LinearGradient
            colors={['#FFFFFF', '#00FFF0']}
            style={estilo.linearGradient}>
            <View>
                <Image
                    style={estilo.image}
                    source={require('../../assets/img/Person.png')}>
                </Image>
            </View>
            <View style={estilo.loginContainer}>
                <ScrollView>
                    <Text style={estilo.dataTitle}>Informações de Contato</Text>
                    <View style={estilo.rowContainer}>
                        <Text style={estilo.dataText}>Email:</Text>
                        <View style={estilo.updateBox}>
                            <TextInput style={estilo.updateText}
                                onChangeText={(text) => setEma(text)}
                                placeholder={infos["Email"]}>
                            </TextInput>
                        </View>
                    </View>
                    <View style={estilo.rowContainer}>
                        <Text style={estilo.dataText}>Celular:</Text>
                        <View style={estilo.updateBox}>
                            <TextInput
                                style={estilo.updateText}
                                onChangeText={(text) => setCel(text)}
                                placeholder={infos["Celular"]}>
                            </TextInput>
                        </View>

                    </View>
                    <Text style={estilo.dataTitle}>
                        Endereço Cadastrado:
                    </Text>
                    <View style={estilo.rowContainer}>
                        <Text style={estilo.dataText}>Cep:</Text>
                        <View style={estilo.updateBox}>
                            <TextInput
                                style={estilo.updateText}
                                onChangeText={(text) => setCep(text)}
                                placeholder={infos["Cep"]}>
                            </TextInput>
                        </View>
                    </View>
                    <View style={estilo.rowContainer}>
                        <Text style={estilo.dataText}>Cidade:</Text>
                        <View style={estilo.updateBox}>
                            <TextInput
                                style={estilo.updateText}
                                onChangeText={(text) => setCid(text)}
                                placeholder={infos["Cidade"]}>
                            </TextInput>
                        </View>
                    </View>
                    <View style={estilo.rowContainer}>
                        <Text style={estilo.dataText}>Bairro:</Text>
                        <View style={estilo.updateBox}>
                            <TextInput
                                style={estilo.updateText}
                                onChangeText={(text) => setBai(text)}
                                placeholder={infos["Bairro"]}>
                            </TextInput>
                        </View>
                    </View>
                    <View style={estilo.rowContainer}>
                        <Text style={estilo.dataText}>Rua:</Text>
                        <View style={estilo.updateBox}>
                            <TextInput
                                style={estilo.updateText}
                                onChangeText={(text) => setRua(text)}
                                placeholder={infos["Rua"]}>
                            </TextInput>
                        </View>
                    </View>
                    <View style={estilo.rowContainer}>
                        <Text style={estilo.dataText}>Número:</Text>
                        <View style={estilo.updateSmallBox}>
                            <TextInput
                                style={estilo.updateText}
                                onChangeText={(text) => setNum(text)}
                                placeholder={infos["Numero"]}>
                            </TextInput>
                        </View>
                    </View>
                    <View style={estilo.rowContainer}>
                        <Text style={estilo.dataText}>Complemento:</Text>
                        <View style={estilo.updateTextBox}>
                            <TextInput
                                style={estilo.updateText}
                                multiline={true}
                                onChangeText={(text) => setCom(text)}
                                placeholder={infos["Complemento"]}>
                            </TextInput>
                        </View>
                    </View>
                    <TouchableOpacity
                        onPress={() => AtualizarInfos()}
                        style={estilo.singUpButton}>
                        <Text style={estilo.buttonText}>
                            Atualizar Dados
                        </Text>
                    </TouchableOpacity>
                </ScrollView>
            </View >
        </LinearGradient >
    );
}