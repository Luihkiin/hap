import React, { useState, useEffect, useReducer } from 'react';
import { SafeAreaView, Alert, Text, View, TouchableOpacity, Image, TextInput, FlatList } from "react-native";
import { estilo } from '../../assets/css/Css.js';
import { LinearGradient } from 'expo-linear-gradient';
import Pesquisa from './Elementos/Pesquisa.js';
import { StatusBar } from 'expo-status-bar';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ListItem from './Elementos/components/ListItem.js';
import resultado from './Elementos/resultado';
import Perfil from '../Perfil/Perfil';
import AdicionarServico from './AdicionarServico';
import { ScrollView } from 'react-native-gesture-handler';
import API from '../../helpers/Api';
import { ActivityIndicator } from 'react-native';
import { Card } from 'react-native-paper';
import Solicitacao from './Solicitacao.js';

export default function ServicoFunc({ navigation }) {
    //DECLARAÇÃO DAS VARIÁVEIS
    const [searchText, setSearchText] = useState('');
    const [loading, setLoading] = useState(true);
    const [servicos, setServicos] = useState([]);
    const [list, setList] = useState([]);
    var [solNome, setSolNome] = useState('');
    var [solPreco, setSolPreco] = useState('');
    var [solDesc, setSolDesc] = useState('');
    var [solId, setSolId] = useState('');
    global.solicitacao = [solNome, solPreco, solDesc, solId];

    //Processamento
    const coletarServico = async () => {
        await API.listServices();
        setServicos(jsonService)
        setLoading(false)
    }

    useEffect(() => {
        coletarServico();
    }, [])

    //
    const countService = () => {
        for (var i = 0; i < servicos.lenght; i++) {

            setList([
                {
                    Id: servicos[i]["Id"],
                    Nome: servicos[i]["Nome"],
                    Preco: servicos[i]["Preco"],
                    Descricao: servicos[i]["Descricao"],
                }
            ])
        }

        console.log(list);
    }
    //

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
            <ScrollView style={estilo.serviceContainer}>
                <View>
                    <Text style={estilo.centerTitle}>
                        Bem-vindo
                    </Text>
                    <View style={estilo.serviceContainer}>
                        <View style={estilo.searchArea}>
                            <TextInput
                                style={estilo.text}
                                placeholder="Pesquise um Serviço"
                                value={searchText}
                                onChangeText={(text) => setSearchText(text)}
                            />
                        </View>
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
                                        onPress={() => (navigation.navigate(Solicitacao),
                                            setSolNome(servicos[0]["Nome"]),
                                            setSolPreco(servicos[0]["Preco"]),
                                            setSolDesc(servicos[0]["Descricao"]),
                                            setSolId(servicos[0]["Id"]))}>
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
                                        onPress={() => (navigation.navigate(Solicitacao),
                                            setSolNome(servicos[1]["Nome"]),
                                            setSolPreco(servicos[1]["Preco"]),
                                            setSolDesc(servicos[1]["Descricao"]),
                                            setSolId(servicos[1]["Id"]))}>
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
                                    <TouchableOpacity style={estilo.cardButton}
                                        onPress={() => (navigation.navigate(Solicitacao),
                                            setSolNome(servicos[2]["Nome"]),
                                            setSolPreco(servicos[2]["Preco"]),
                                            setSolDesc(servicos[2]["Descricao"]),
                                            setSolId(servicos[2]["Id"]))}>
                                        <Text style={estilo.buttonText}>Selecionar</Text>
                                    </TouchableOpacity>
                                </Card.Actions>
                            </Card>
                        </View>
                    </View>
                    <View style={estilo.rowContainer}>
                        <View>
                            <TouchableOpacity
                                onPress={() => navigation.navigate(AdicionarServico)}
                                style={estilo.smallButton}>
                                <Text style={estilo.buttonText}>
                                    Adicionar Serviços
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Perfil', { cpf })}
                                style={estilo.smallButton}>
                                <Text style={estilo.buttonText}>
                                    Meu Perfil
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </LinearGradient>
    )
}