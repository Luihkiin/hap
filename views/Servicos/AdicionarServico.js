import React, { useState, useEffect } from 'react';
import { SafeAreaView, Alert, Text, View, TouchableOpacity, TextInput, Image } from "react-native";
import { estilo } from '../../assets/css/Css.js';
import { LinearGradient } from 'expo-linear-gradient';
import Servico from './Servico';
import { ScrollView } from 'react-native-gesture-handler';
import API from '../../helpers/Api';
import { ActivityIndicator } from 'react-native';
import { TelaInicial } from './TelaInicial';

export default function AdicionarServico({ navigation }) {
    const [loading, setLoading] = useState(true);
    const [perfil, setPer] = useState('');
    const [servico, setSer] = useState([]);
    global.funcionarioId = perfil;
    global.servicoId = servico["Id"];

    console.log(perfil)
    console.log(servicoId)

    const coletarServico = async () => {
        await API.listOneService();
        setSer(jsonOneService);
        setPer(jsonProfile["Id"]);
        setLoading(false);
    }

    useEffect(() => {
        coletarServico();
    }, [])

    const associarServico = async () => {
        await API.associateService();
        if (token === 'access') {
            navigation.navigate('TelaInicial')
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
            <View>
                <Image
                    style={estilo.image}
                    source={require('../../assets/img/icons/Services.png')}>
                </Image>
            </View>
            <View style={estilo.loginContainer}>
                <ScrollView>
                    <SafeAreaView>
                        <View>
                            <Text style={estilo.centerTitle}>
                                Confirmar Serviço
                            </Text>
                            <View style={estilo.infoContainer}>
                                <Text style={estilo.dataText}>{servico["Nome"]}</Text>
                                <Text style={estilo.dataText}>Versão: {servico["Premium"]}</Text>
                                <Text style={estilo.dataText}>{servico["Descricao"]}</Text>
                                <Text style={estilo.dataText}>Preço: R$ {servico["Preco"]} </Text>
                            </View>
                            <TouchableOpacity
                            onPress={() => associarServico()}
                            style={estilo.singUpButton}>
                                <Text style={estilo.buttonText}>
                                    Confirmar escolha
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </SafeAreaView>
                </ScrollView>
            </View>
        </LinearGradient>
    )
}