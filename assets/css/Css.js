import { StyleSheet } from "react-native";

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
        fontFamily: 'Poppins',
    },

    informacao: {
        margin: 20,
    },

    texto: {
        fontSize: 20,
        fontFamily: 'Poppins',
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

    rodape: {
        fontSize: 15,
        fontFamily: 'Poppins',
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export { estilo };