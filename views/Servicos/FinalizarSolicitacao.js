import React, { useState, useEffect, useReducer } from 'react';
import { Alert, Text, View, TouchableOpacity, Image, TextInput, SafeAreaView, ScrollView, FlatList } from "react-native";
import { estilo } from '../../assets/css/Css.js'
import { LinearGradient } from 'expo-linear-gradient';
import SelectDropdown from 'react-native-select-dropdown';
import { setStatusBarBackgroundColor } from 'expo-status-bar';
import API from '../../helpers/Api';

export default function FinalizarSolicitacao({ navigation }) {
    return (
        <LinearGradient
            colors={['#FFFFFF', '#00FFF0']}
            style={estilo.linearGradient}>
            <View>
                <Image
                    style={estilo.image}
                    source={require('../../assets/img/icons/Success.png')}>
                </Image>
                <Text style={estilo.centerTitle}>
                    Solicitação Efetuada com Sucesso!
                </Text>
            </View>
        </LinearGradient>
    )
}

