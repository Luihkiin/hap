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

    header: {
        paddingTop:100,
    },

    imagem: {
        width: 150,
        height: 150,
        resizeMode: 'contain', 
        marginBottom: 30,
        marginTop: 50,        
    },

    tituloIcon: {
        fontSize: 30,
        fontFamily: 'Poppins-Regular',
    },

    icon: {
        width: 280,
        heith: 280,
        resizeMode: 'contain',
    },

    titulo: {
        fontSize: 30,
        fontFamily: 'Poppins-Regular',
        marginBottom: 20,
    },

    informacao: {
        margin: 20,
    },

    texto: {
        fontSize: 20,
        alignSelf: 'center',
        marginBottom: 10,
        paddingLeft:74,
        paddingRight: 74
    },

    textoCentro: {
        fontSize: 20,
        alignSelf: 'center',
        marginBottom: 10
    },

    paragrafo: {
        fontSize: 20,
        paddingLeft: 70,
        paddingRight: 70,
        marginTop: 50,
        marginBottm: 30,
        justifyContent: 'center'
    },

    caixa: {
        backgroundColor: 'white',
        margin: 10,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        height: 40,
        width: 250,
        justifyContent: 'center',
    },

    botao: {
        marginTop: 50,
        marginBottom: 50,
        backgroundColor:'white',
        width: 150,
        borderColor: 'black',
        alignSelf:'center',
        borderRadius: 10,
    },

    clicavel: {
        alignSelf:'center',
        fontSize: 15,
        fontFamily: 'Poppins-Regular',
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    caixaGrande: {
        justifyContent: 'space-between',
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignContents: 'center',
        position: 'relative',
        backgroundColor: 'white',
        margin: 20,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 5,
        height: 170,
        width: 250,        
    },
})

export {estilo};