import React, { useState, useEffect, useReducer } from 'react';
import { Alert, Text, View, TouchableOpacity, Image, TextInput } from "react-native";
import { estilo } from '../assets/css/Css.js'
import { LinearGradient } from 'expo-linear-gradient';
import Login from './Login';
import API from '../helpers/Api';

export default function EsqSenha({ navigation }) {
    //Declaração das Variáveis
    var [email, setEma] = useState('');
    global.emailGlobal = email;

    //Recuperar Senha
    RecuperarSenha = async () => {
        if (email.length == 0) {
            Alert.alert("Campos Faltando", "Insira seu email e tente novamente!");
        } else {
            await API.forgotPass();
            if (token === 'access') {
                {
                    await navigation.navigate(Login);
                }
            }
        }
    }

    //Front-end
    return (
        <LinearGradient
            colors={['#FFFFFF', '#00FFF0']}
            style={estilo.linearGradient}>
            <View>
                <Image
                    style={estilo.image}
                    source={require('../assets/img/icons/user.png')}>
                </Image>
            </View>
            <View style={estilo.singUpContainer}>
                <Text style={estilo.centerTitle}>
                    Recuperar Senha
                </Text>
                <TextInput
                    style={estilo.box}
                    onChangeText={(text) => setEma(text)}
                    placeholder="Email Cadastrado">
                </TextInput>
                <TouchableOpacity
                    style={estilo.button}
                    onPress={() => RecuperarSenha()}>
                    <Text style={estilo.buttonText}>
                        Confirmar
                    </Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    )
}