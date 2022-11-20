import React, { useState, useEffect } from 'react';
import { SafeAreaView, Alert, Text, View, TouchableOpacity, TextInput } from "react-native";
import { estilo } from '../../assets/css/Css.js';
import { LinearGradient } from 'expo-linear-gradient';
//import { StatusBar } from 'expo-status-bar';
//import { MaterialCommunityIcons } from '@expo/vector-icons';
import Perfil from '../Perfil/Perfil';
import Servico from './Servico';
import { ScrollView } from 'react-native-gesture-handler';
import API from '../../helpers/Api';
import { ActivityIndicator } from 'react-native';
import { Card } from 'react-native-paper';
import Solicitacao from './Solicitacao.js';
import SolicitacaoFuncionario from './SolicitacaoFuncionario.js';

export default function TelaInicial({ navigation }) {
    const [searchText, setSearchText] = useState('');
    const [loading, setLoading] = useState(true);
    const [servicos, setServicos] = useState([]);
    let [mensageiro, setMen] = useState('');
    let [mensageiroUsuario, setMenU] = useState('');
    const [list, setList] = useState([]);
//    const [perfil, setPerfil] = useState([]);
    var [solNome, setSolNome] = useState('');
    var [solPreco, setSolPreco] = useState('');
    var [solDesc, setSolDesc] = useState('');
    var [solId, setSolId] = useState('');
    global.solicitacao = [solNome, solPreco, solDesc, solId];

    useEffect(() => {
        coletarServico();
        coletarPerfil();
        setLoading(false);
    }, [])

    const coletarServico = async () => {
        await API.listServices();
        setServicos(jsonService);
        await API.listSolicitation();
        //Render condicional = verifica se existe registros de solicitações
        if (jsonHistory === "Nada") {
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
                        title={jsonHistory["Nome"]}
                        subtitle={jsonHistory["NomeFun"] + ' - ' + jsonHistory["Contato"]}>
                    </Card.Title>
                    <Card.Content>
                        <Text style={estilo.dataText}>
                            {jsonHistory["Pagamento"] + ' R$ ' + jsonHistory["Preco"]}
                        </Text>
                        <Text style={estilo.dataText}>
                            Data Prevista: {jsonHistory["Data"]}
                        </Text>
                    </Card.Content>
                </Card>;
            setMen(simHist);
        }
    }

    const coletarPerfil = async () => {
        await API.profileSelect();
        //Render condicional = verifica tipo de cliente
        if (jsonProfile["Perfil"] == '1') {
            let usuario =
                <TouchableOpacity
                    onPress={() => navigation.navigate('Perfil', { cpf })}
                    style={estilo.smallButton}>
                    <Text style={estilo.buttonText}>
                        Perfil
                    </Text>
                </TouchableOpacity>
            setMenU(usuario);
        } else if (jsonProfile["Perfil"] == '2') {
            let usuario =
                <>
                    <View>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Perfil', { cpf })}
                            style={estilo.smallButton}>
                            <Text style={estilo.buttonText}>
                                Perfil
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={estilo.rowContainer}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Servico')}
                            style={estilo.smallButton}>
                            <Text style={estilo.buttonText}>
                                Adicionar Serviços
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('SolicitacaoFuncionario')}
                            style={estilo.smallButton}>
                            <Text style={estilo.buttonText}>
                                Solicitações
                            </Text>
                        </TouchableOpacity>
                    </View>
                </>
            setMenU(usuario);
        }
    }

    /*
    const pesquisarServico = (() => {
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
    */

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
                        <View>
                            {mensageiroUsuario}
                        </View>
                    </View>
                    <View style={estilo.serviceContainer}>
                        <View style={estilo.searchArea}>
                            <TextInput
                                style={estilo.text}
                                placeholder="Pesquise um Serviço"
                                value={searchText}
                                onChangeText={(text) => setSearchText(text)} />
                        </View>
                        <View>
                            <Text style={estilo.dataTitle}>
                                Última solicitação
                            </Text>
                            <View>
                                {mensageiro}
                            </View>
                        </View>
                        <View>
                            <Text style={estilo.dataTitle}>
                                Serviços disponíveis
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
                                                        onPress={() => (navigation.navigate('Solicitacao'),
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
