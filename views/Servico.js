import React, { useEffect, useReducer } from 'react';
import { Alert, Text, View, TouchableOpacity, Image, TextInput } from "react-native";
import { estilo } from '../assets/css/Css.js'
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import Login from './Login';

export default function Servico (){
    return (
        <LinearGradient
            colors={['#FFFFFF', '#00FFF0']}
            style={estilo.linearGradient}>
            <Text style={estilo.titulo}>
                Serviços
            </Text>

            <View>

            </View>
            <TouchableOpacity
                onPress={() => navigation.navigate(Login)}
                style={estilo.caixa}>
                <Text style={estilo.textoCentro}>
                    Sair da conta
                </Text>
            </TouchableOpacity>
        </LinearGradient>
    )
}