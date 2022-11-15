import React, { useState, useEffect, useReducer } from 'react';
import { SafeAreaView, Alert, Text, View, TouchableOpacity, Image, TextInput, FlatList } from "react-native";
import { estilo } from '../../assets/css/Css.js';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { MaterialCommunityIcons } from '@expo/vector-icons';
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
                    <View>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Perfil', { cpf })}
                            style={estilo.smallButton}>
                            <Text style={estilo.buttonText}>
                                Meu Perfil
                            </Text>
                        </TouchableOpacity>
                    </View>
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
                                                        onPress={() => (navigation.navigate(Solicitacao),
                                                            setSolNome(servicos.Nome),
                                                            setSolPreco(servicos.Preco),
                                                            setSolDesc(servicos.Descricao),
                                                            setSolId(servicos.Id))}>
                                                        <Text style={estilo.buttonText}>Selecionar</Text>
                                                    </TouchableOpacity>
                                                </Card.Actions>
                                            </Card>
                                        </View>
                                    )
                                })}
                            </View>
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
                    </View>
                </View>
            </ScrollView>
        </LinearGradient>
    )
}