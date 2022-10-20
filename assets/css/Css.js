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

    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
    },

    header: {
        paddingTop: 100,
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
    },

    icon: {
        width: 280,
        heith: 280,
        resizeMode: 'contain',
    },

    titulo: {
        fontSize: 30,
        marginBottom: 20,
    },

    topo: {
        fontSize: 20,
        paddingTop: 60,
    },

    informacao: {
        margin: 20,
    },

    texto: {
        fontSize: 20,
        alignSelf: 'center',
        marginBottom: 10,
        paddingLeft: 74,
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

    botao: {
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: 'white',
        width: 150,
        borderColor: 'black',
        alignSelf: 'center',
        borderRadius: 10,
    },

    clicavel: {
        alignSelf: 'center',
        fontSize: 15,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    caixa: {
        backgroundColor: 'white',
        margin: 10,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        padding: 5,
        height: 40,
        width: 250,
        justifyContent: 'center',
    },

    caixaPequena: {
        backgroundColor: 'white',
        margin: 10,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        padding: 5,
        height: 40,
        width: 80,
        justifyContent: 'center',
        textAlign: 'center',
    },

    caixaGrande: {
        backgroundColor: 'white',
        margin: 20,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 5,
        height: 170,
        width: 250,
    },

    footer: {
        paddingBottom: 10,
        marginBottom: 0,
    },

    input: {
        flex: 1,
        height: 50,
        backgroundColor: '#FFFFFF',
        margin: 30,
        borderRadius: 5,
        fontSize: 19,
        paddingLeft: 15,
        paddingRight: 15,
        color: '#000000',
    },
    searchArea: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    orderButton: {
        width: 32,
        marginRight: 30,
    },
    list: {
        flex: 1,
    },

    logo: {
        width: 200,
        height: 200,
        borderRadius: 100,
        marginTop: 0,
        marginBottom: 30,
        backgroundColor: '#FFFFFF',
    },
})

export { estilo };