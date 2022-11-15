import React, { useState } from 'react';
import { Alert, Text, View, TouchableOpacity, Image } from "react-native";
import { estilo } from '../../assets/css/Css.js'
import { LinearGradient } from "expo-linear-gradient";
import TelaInicial from '../Servicos/TelaInicial';

export default function FinalSolicitacao({ navigation }) {
    return (
        <LinearGradient
            colors={['#FFFFFF', '#00FFF0']}
            style={estilo.linearGradient}>
            <View>
                <Image
                    style={estilo.image}
                    source={require('../../assets/img/icons/Success.png')}>
                </Image>
            </View>
            <View>
                <Text style={estilo.centerTitle}>
                    Solicitação concluída!
                </Text>
                <TouchableOpacity
                    style={estilo.cardButton}
                    onPress={() => navigation.navigate('TelaInicial')}>
                    <Text style={estilo.buttonText}> Voltar ao início</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );
}