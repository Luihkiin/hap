import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { estilo } from '../../../assets/css/Css'

const Button = ({labelButton, onpress}) => {
  return (
   <TouchableOpacity style={ estilo.caixa }
   onPress = { onpress }
   >
   
    <Text>{ labelButton }</Text>
   </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({})