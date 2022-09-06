import { StyleSheet } from "react-native";
import { useFonts} from 'expo-font';

export default function fonte(){

const [fontsLoaded] = useFonts ({
    'Poppins-Regular': require('../fonts/Poppins-Regular.ttf'),
});
}

const estilo = StyleSheet.create({
    linearGradient: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    imagem: {
        width: 150,
        height: 150,
        resizeMode: 'contain', 
        marginBottom: 30,
        marginTop: 50,        
    },

    titulo: {
        fontSize: 30,
        fontFamily: 'Poppins-Regular',
    },

    informacao: {
        margin: 20,
    },

    texto: {
        fontSize: 20,
    },

    paragrafo: {
        fontSize: 20,
        paddingLeft: 70,
        paddingRight: 70,
        marginTop: 50,
        marginBottom: 50,
        justifyContent: 'center'
    },

    caixa: {
        backgroundColor: 'white',
        margin: 10,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 5,
        height: 40,
        width: 250,
        justifyContent: 'center'
    },

    caixaGrande: {
        backgroundColor: 'white',
        margin: 20,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 5,
        height: 140,
        width: 250,
        justifyContent: 'center',
        alignItems: 'center', 
    },

    rodape: {
        fontSize: 15,
        fontFamily: 'Poppins-Regular',
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export {estilo};