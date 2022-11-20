import React, { useState, useEffect } from 'react';
import { SafeAreaView, Alert, Text, View, TouchableOpacity, TextInput, Image } from "react-native";
import { estilo } from '../../assets/css/Css.js';
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';
import API from '../../helpers/Api';
import { ActivityIndicator } from 'react-native';
import { TelaInicial } from './TelaInicial';
import { Card } from 'react-native-paper';

export default function SolicitacaoFuncionario({ navigation }) {
    const [loading, setLoading] = useState(true);
    let [mensageiro, setMen] = useState('');
    global.funcionarioId = jsonProfile["Id"];


    useEffect(() => {
        listarSolicitacoes();
        setLoading(false);
    }, [])


    const listarSolicitacoes = async () => {
        await API.listSolicitationAssociate();
        //Render condicional = verifica se existe registros de solicitações
        if (solicitacaoAssociada == "Nada") {
            const naoSol =
                <Text style={estilo.text}>
                    Você não possui solicitações de serviço
                </Text>;
            setMen(naoSol);
        } else {
            const simSol =
            solicitacaoAssociada.map((solicitacaoAssociada) => {
                    return (
                        <View>
                            <Card style={estilo.card}>
                                <Card.Title
                                    style={estilo.dataText}
                                    title={solicitacaoAssociada.NomeServico}
                                    subtitle={solicitacaoAssociada.Descricao}>
                                </Card.Title>
                                <Card.Content>
                                    <Text style={estilo.dataText}>
                                        R$ {solicitacaoAssociada.Preco}
                                    </Text>
                                    <Text style={estilo.dataText}>
                                        Pagamento: {solicitacaoAssociada.Pagamento}
                                    </Text>
                                    <Text style={estilo.dataText}>
                                        Atender no dia: {solicitacaoAssociada.DataAtendimento}
                                    </Text>
                                    <Text style={estilo.dataText}>
                                        Criado no dia: {solicitacaoAssociada.DataCriacao}
                                    </Text>
                                    <Text style={estilo.dataText}>
                                        Cliente: {solicitacaoAssociada.NomeCli}
                                    </Text>
                                    <Text style={estilo.dataText}>
                                        Contato: {solicitacaoAssociada.CelularCli}
                                    </Text>
                                    <Text style={estilo.dataText}>
                                        Email: {solicitacaoAssociada.EmailCli}
                                    </Text>
                                    <Text style={estilo.dataText}>
                                        CEP: {solicitacaoAssociada.CEP}
                                    </Text>
                                    <Text style={estilo.dataText}>
                                        Cidade: {solicitacaoAssociada.Cidade}
                                    </Text>
                                    <Text style={estilo.dataText}>
                                        Bairro: {solicitacaoAssociada.Bairro}
                                    </Text>
                                    <Text style={estilo.dataText}>
                                        Rua: {solicitacaoAssociada.Rua}
                                    </Text>
                                    <Text style={estilo.dataText}>
                                        Número: {solicitacaoAssociada.Numero}
                                    </Text>
                                    <Text style={estilo.dataText}>
                                        Complemento: {solicitacaoAssociada.Complemento}
                                    </Text>
                                </Card.Content>
                                <Card.Actions>
                                </Card.Actions>
                            </Card>
                        </View>
                    )
                })
            setMen(simSol);
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

    return (
        <LinearGradient
            colors={['#FFFFFF', '#00FFF0']}
            style={estilo.linearGradient}>
            <View style={estilo.serviceContainer}>
                <ScrollView>
                    <SafeAreaView>
                        <View>
                            <Text style={estilo.centerTitle}>
                                Solicitações existentes
                            </Text>
                        </View>
                        <View>
                            {mensageiro}
                        </View>
                    </SafeAreaView>
                </ScrollView>
            </View>
        </LinearGradient>
    )
}