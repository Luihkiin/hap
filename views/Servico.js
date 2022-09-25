import React, { useState, useEffect, useReducer, Component } from 'react';
import { Alert, Text, View, TouchableOpacity, Image, TextInput, FlatList } from "react-native";
import { estilo } from '../assets/css/Css.js'
import { ListItem, SearchBar } from "react-native-elements";
import filter from "lodash.filter";
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import Login from './Login';

export default function Servico({ navigation }) {

    return (
        <LinearGradient
            colors={['#FFFFFF', '#00FFF0']}
            style={estilo.linearGradient}>
            <Text style={estilo.titulo}>
                Serviços
            </Text>

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