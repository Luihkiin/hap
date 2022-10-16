import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import { estilo } from '../assets/css/Css'
import { LinearGradient } from 'expo-linear-gradient';

import Button from './servico/components/Button';

export default function Perfil({ navigation }) {
  
  

  
//front-end
  return (
    <LinearGradient colors={['#FFFFFF', '#00FFF0']}
    style={estilo.linearGradient}>

    

    <SafeAreaView style={estilo.container}>
     
      
      <Text style={ estilo.titulo}>TESTE DA SILVA</Text>
      <StatusBar style = "auto" />
    
         <Image style={styles.logo} source={require('../assets/img/Logo.png')} />

         <Text style={ estilo.textoCentro}> Dados Cadastrados: </Text>
         <Text style={ estilo. caixaPequena}>xxxxxxxxx</Text>
         <Text style={ estilo. caixaPequena}>xxxxxxxx</Text>
         <Text style={ estilo. caixaPequena}>xxxxxxxx</Text>
         <Text style={ estilo. caixaPequena}>xxxxxx</Text>
         <Text style={ estilo. caixaPequena}>xxxxxx</Text>
        
         <Button labelButton='Atualizar Dados'  onpress={() => navigation.navigate('Editar')} />
         
    </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  
  logo:{
    width: 175,
    height: 175,
    borderRadius: 75,
    marginTop: 15,
    padding: 30,
    margin: 30
    
  },
 

});
