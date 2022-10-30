import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
    linearGradient: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    container: {
        flex: 1,
        position: 'relative',
        top: 500,
        borderRadius: 50,
        backgroundColor: '#fff',
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

    footer: {
        paddingTop: 60,
    },

    textFooter: {
        fontSize: 15,
    },

    image: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
        marginTop: 100,
    },

    centerTitle: {
        fontSize: 30,
        textAlign: 'center',
        paddingTop: 80,
        //margin: 30,
        fontWeight: 'bold',
    },

    loginContainer: {
        backgroundColor: 'white',
        width: '100%',
        height: '70%',
        position: 'relative',
        top: 60,
        borderRadius: 50,
    },

    singUpContainer: {
        backgroundColor: 'white',
        width: '100%',
        flex: 1,
        position: 'relative',
        top: 60,
        borderRadius: 50,
    },

    infoContainer: {
        borderWidth: 2,
        margin: 10,
        borderRadius: 20,
        borderColor: '#A2FFF0',
        padding: 10,
    },

    serviceContainer: {
        backgroundColor: 'white',
        width: '100%',
        flex: 1,
        position: 'relative',
        top: 0,
    },

    text: {
        fontSize: 15,
        textAlign: 'center',
        margin: 20,
    },

    dataText: {
        fontSize: 20,
        textAlign: 'left',
        marginLeft: 20,
        marginTop: 5,
    },

    dataTitle: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        fontWeight: 'bold',
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

    smallButton: {
        backgroundColor: '#A2FFF0',
        height: 60,
        margin: 15,
        width: 150,
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    },

    button: {
        marginTop: 50,
        backgroundColor: '#A2FFF0',
        height: 60,
        width: '80%',
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    },

    singUpButton: {
        //backgroundColor: 'white',
        backgroundColor: '#A2FFF0',
        height: 60,
        width: '80%',
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        marginTop: 40,
        marginBottom: 80,
    },

    buttonText: {
        fontSize: 15,
        textAlign: 'center',
        fontWeight: 'bold',
    },

    box: {
        //backgroundColor: 'white',
        backgroundColor: '#A2FFF0',
        margin: 10,
        alignSelf: 'center',
        borderRadius: 20,
        padding: 15,
        height: 60,
        width: '80%',
        justifyContent: 'center',
    },

    dateBox: {
        backgroundColor: '#A2FFF0',
        margin: 10,
        borderRadius: 15,
        padding: 5,
        height: 60,
        width: '23%',
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

    input: {
        flex: 1,
        height: 50,
        backgroundColor: '#FFFFFF',
        marginBottom: 30,
        marginTop: 20,
        marginLeft: 30,
        borderRadius: 5,
        fontSize: 19,
        paddingLeft: 15,
        paddingRight: 15,
        color: '#000000',
        textAlign: 'center',
    },
    searchArea: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 400,
        marginLeft: 30,
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