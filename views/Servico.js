import React, { useState, useEffect, useReducer } from 'react';
import { SafeAreaView, Alert, Text, View, TouchableOpacity, Image, TextInput, FlatList } from "react-native";
import { estilo } from '../assets/css/Css.js'
import { LinearGradient } from 'expo-linear-gradient';
import Login from './Login';
import Pesquisa from './Servico/Pesquisa.js';
import { StatusBar } from 'expo-status-bar';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ListItem from './Servico/components/ListItem.js';
import resultado from './Servico/resultado';
import Perfil from './Perfil';

export default function Servico({ navigation }) {
    //DECLARAÇÃO DAS VARIÁVEIS
    const [searchText, setSearchText] = useState('');
    const [list, setList] = useState(resultado);
    var [nome, setNome] = useState('');

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

    return (
        <LinearGradient
            colors={['#FFFFFF', '#00FFF0']}
            style={estilo.linearGradient}>
            <Text style={estilo.topo}>
                Bem-vindo
            </Text>

            <View>
                <TouchableOpacity
                onPress={()=>navigation.navigate(Perfil)}>
                    <Text>
                        Meu Perfil
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={estilo.container}>
                <SafeAreaView>
                    <View style={estilo.searchArea}>
                        <TextInput
                            style={estilo.input}
                            placeholder="Pesquise um Serviço"
                            placeholderTextColor="#888"
                            value={searchText}
                            onChangeText={(t) => setSearchText(t)}
                        />
                        <TouchableOpacity onPress={handleOrderClick} style={estilo.orderButton}>
                            <MaterialCommunityIcons
                                service="Ordem alfabética"
                                size={32}
                                color="#888"
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
                </SafeAreaView>
            </View>

            <View
                style={estilo.footer}>
                <TouchableOpacity
                    onPress={() => navigation.navigate(Login)}
                    style={estilo.caixa}>
                    <Text style={estilo.textoCentro}>
                        Sair da conta
                    </Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    )
}