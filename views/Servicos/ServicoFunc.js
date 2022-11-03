import React, { useState, useEffect, useReducer } from 'react';
import { SafeAreaView, Alert, Text, View, TouchableOpacity, Image, TextInput, FlatList } from "react-native";
import { estilo } from '../../assets/css/Css.js'
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

export default function ServicoFunc({ route, navigation }) {
    //DECLARAÇÃO DAS VARIÁVEIS
    const [searchText, setSearchText] = useState('');
    const [list, setList] = useState(resultado);
    const { CPFMask } = route.params;
    const { cpf } = route.params;

    //Processamento
    useEffect(() => {
        if (searchText === '') {
            setList(resultado);
        } else {
            setList(
                resultado.filter(
                    (item) =>
                        item.service.toLowerCase().indexOf(searchText.toLowerCase()) > -1
                )
            );
        }
    }, [searchText]);

    const handleOrderClick = () => {
        let newList = [...resultado];

        newList.sort((a, b) => (a.service > b.service ? 1 : b.service > a.service ? -1 : 0));

        setList(newList);
    };

    //Front-End
    return (
        <LinearGradient
            colors={['#FFFFFF', '#00FFF0']}
            style={estilo.linearGradient}>
            <View style={estilo.serviceContainer}>
                <Text style={estilo.centerTitle}>
                    Bem-vindo
                </Text>
                <View style={estilo.serviceContainer}>
                    <View style={estilo.searchArea}>
                        <TextInput
                            style={estilo.input}
                            placeholder="Pesquise um Serviço"
                            placeholderTextColor="#000000"
                            value={searchText}
                            onChangeText={(t) => setSearchText(t)}
                        />
                        <TouchableOpacity onPress={handleOrderClick} style={estilo.orderButton}>
                            <MaterialCommunityIcons
                                service="Ordem alfabética"
                                size={32}
                                color="black"
                            />
                        </TouchableOpacity>
                    </View>

                    <FlatList
                        data={list}
                        style={estilo.list}
                        renderItem={({ item }) => <ListItem data={item} />}
                        keyExtractor={(item) => item.id}
                    />
                    <StatusBar style="light" />

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
        </LinearGradient>
    )
}