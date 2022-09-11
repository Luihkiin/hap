import React, { useEffect, useReducer } from 'react';
import { Alert, Text, View, TouchableOpacity, Image, TextInput } from "react-native";
import { estilo } from '../assets/css/Css.js'
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import Login from './Login';

export default function EsqSenha({ navigation }) {
    return (
        <LinearGradient
            colors={['#FFFFFF', '#00FFF0']}
            style={estilo.linearGradient}>
            <Text style={estilo.titulo}>
                Recuperar Senha
            </Text>
            <Text>
                Email Cadastrado
            </Text>
            <TextInput
                style={estilo.caixa}>
            </TextInput>
            <TouchableOpacity
            style={estilo.caixa}
            onPress={() => navigation.navigate(Login)}>
                <Text style={estilo.textoCentro}>
                    Confirmar
                </Text>
            </TouchableOpacity>
        </LinearGradient>
    )
}