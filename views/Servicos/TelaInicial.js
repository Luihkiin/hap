import React, { useState, useEffect } from 'react';
import { SafeAreaView, Alert, Text, View, TouchableOpacity, TextInput } from "react-native";
import { estilo } from '../../assets/css/Css.js';
import { LinearGradient } from 'expo-linear-gradient';
//import { StatusBar } from 'expo-status-bar';
//import { MaterialCommunityIcons } from '@expo/vector-icons';
import Perfil from '../Perfil/Perfil';
import AdicionarServico from './AdicionarServico';
import { ScrollView } from 'react-native-gesture-handler';
import API from '../../helpers/Api';
import { ActivityIndicator } from 'react-native';
import { Card } from 'react-native-paper';
import Solicitacao from './Solicitacao.js';

export default function ServicoFunc({ navigation }) {
    const [searchText, setSearchText] = useState('');
    const [loading, setLoading] = useState(true);
    const [servicos, setServicos] = useState([]);
    const [historico, setHist] = useState([]);
    let [mensageiro, setMen] = useState('');
    let [mensageiroUsuario, setMenU] = useState('1');
    const [list, setList] = useState([]);
    const [perfil, setPerfil] = useState([]);
    var [solNome, setSolNome] = useState('');
    var [solPreco, setSolPreco] = useState('');
    var [solDesc, setSolDesc] = useState('');
    var [solId, setSolId] = useState('');
    global.solicitacao = [solNome, solPreco, solDesc, solId];

    useEffect(() => {
        coletarServico();
        coletarPerfil();
        coletarSolicitacao();
        setLoading(false);
        pesquisarServico;
    }, [])

    const coletarServico = async () => {
        await API.listServices();
        setServicos(jsonService);
    }

    const coletarPerfil = async () => {
        await API.profileSelect();
        setPerfil(jsonProfile);
        //Render condicional = verifica tipo de perfil do usuário
        if (perfil["Perfil"] == '1') {
            const cliente =
                <TouchableOpacity
                    style={estilo.smallButton}>
                    <Text style={estilo.buttonText}>
                        Solicitações
                    </Text>
                </TouchableOpacity>;
            setMenU(cliente);
        } else {
            const funcionario =
                <TouchableOpacity
                    onPress={() => navigation.navigate(AdicionarServico)}
                    style={estilo.smallButton}>
                    <Text style={estilo.buttonText}>
                        Adicionar Serviços
                    </Text>
                </TouchableOpacity>;
            setMenU(funcionario);
        }
    }

    const coletarSolicitacao = async () => {
        await API.listSolicitation();
        setHist(jsonHistory);
        //Render condicional = verifica se existe registros de solicitações
        if (historico === "Nada") {
            const naoHist =
                <Text style={estilo.text}>
                    Nenhuma Solicitação realizada
                </Text>;
            setMen(naoHist);
        } else {
            const simHist =
                <Card style={estilo.card}>
                    <Card.Title
                        style={estilo.dataText}
                        title={historico["Nome"]}
                        subtitle={historico["NomeFun"] + ' - ' + historico["Contato"]}>
                    </Card.Title>
                    <Card.Content>
                        <Text style={estilo.dataText}>
                            {historico["Pagamento"] + ' R$ ' + historico["Preco"]}
                        </Text>
                        <Text style={estilo.dataText}>
                            Data Prevista: {historico["Data"]}
                        </Text>
                    </Card.Content>
                </Card>;
            setMen(simHist);
        }
    }

    const pesquisarServico = ( () => {
        if (searchText === '') {
            setList(servicos);
        } else {
            setList(
                servicos.filter(
                    (item) => 
                    item.Nome.toLowerCase().indexOf(searchText.toLowerCase())
                )
            )
        }
    }, [searchText])

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
            <ScrollView style={estilo.serviceContainer}>
                <View>
                    <View>
                        <Text style={estilo.centerTitle}>
                            Bem-vindo
                        </Text>
                        <View style={estilo.rowContainer}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Perfil', { cpf })}
                                style={estilo.smallButton}>
                                <Text style={estilo.buttonText}>
                                    Perfil
                                </Text>
                            </TouchableOpacity>
                            <View>
                                {mensageiroUsuario}
                            </View>
                        </View>
                    </View>
                    <View style={estilo.serviceContainer}>
                        <View>
                            <TouchableOpacity
                                onPress={() => (coletarSolicitacao())}>
                                <Text style={estilo.dataTitle}>Última Solicitação</Text>
                            </TouchableOpacity>
                            <View>
                                {mensageiro}
                            </View>
                        </View>
                        <View style={estilo.searchArea}>
                            <TextInput
                                style={estilo.text}
                                placeholder="Pesquise um Serviço"
                                value={searchText}
                                onChangeText={(text) => setSearchText(text)} />
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
                </View>
            </ScrollView>
        </LinearGradient >
    )
}
