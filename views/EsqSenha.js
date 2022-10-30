import React, { useState, useEffect, useReducer } from 'react';
import { Alert, Text, View, TouchableOpacity, Image, TextInput } from "react-native";
import { estilo } from '../assets/css/Css.js'
import { LinearGradient } from 'expo-linear-gradient';
import Login from './Login';

export default function EsqSenha({ navigation }) {

    var [email, setEma] = useState('');

    //Função RecuperarSenha
    RecuperarSenha = () => {
        if (email.length == 0) {
            Alert.alert("Campos Faltando", "Insira seu email e tente novamente!");
        } else {
            //Variável que conecta com o login.php, que está dentro de htdocs
            var APIURL = new URL('http://192.168.0.100:80/hap/esqSenha.php');

            var headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            };

            //Variáveis que serão utilizadas na função fetch
            var Data = {
                email: email,
            };

            //Função Fetch (Leva os dados para o PHP)
            fetch(APIURL, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(Data),
            })
                .then((response) => response.json())
                .then((response) => {
                    alert(response[0].Message)
                    if (response[0].Message == "Um email de recuperação será enviado dentro de alguns momentos, aguarde!") {
                        console.log("true")
                        navigation.navigate(Login);
                    }
                    console.log(Data);
                })
                .catch((error) => {
                    console.log("Erro encontrado: " + error);
                })
        }
    }

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