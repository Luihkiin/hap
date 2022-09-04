import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    allignItems: 'center',
    justifyContent: 'center'
  },

  imagem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "center"
  },

  titulo: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 50,
    height: 40,
    margin: 30,
  },

  subtitulo: {
    alignItems: 'center',
  },

  entradaDados: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 20,
    height: 50,
    width: 200,
    shadowRadius: 20,
    shadowOpacity: 0.3,
    backgroundColor: 'white',
    borderWidth: 1,
    padding: 10,
  },

  Background: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },

  botao: {
    backgroundColor: 'white',
    padding: 10,
    margin: 5,
    height: 40,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },

  informativo: {
    marginTop: 15,
  }
});

export { estilo };