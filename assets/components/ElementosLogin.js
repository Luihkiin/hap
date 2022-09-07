import React, { Component } from 'react';
import Cadastro from '../../views/Cadastro';

//Construtor
export default class ElementosLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            CPF: '',
            PWD: '',
            check_textInputChange: false,
            secureTextEntry: true,
        };
    }


    //InsertRecord
    InsertRecord = () => {
        var CPF = this.state.CPF;
        var PWD = this.state.PWD;

        if ((CPF.length == 0) || PWD.length == 0) {
            Alert.alert("Campos faltando!");
        } else {
            var APIURL = "http://localhost:80/Entrar/login.php"; //Utilizar este diretório dentro de HTDOCS (Retirar arquivos .php antigos)

            var headers = {
                'Accept': 'application/json',
                'Content-Type': 'appplication/json'
            };

            var Dados = {
                CPF: CPF,
                PWD: PWD,
            };

            //Função Fetch
            fetch(APIURL, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(Dados) //Converte Dados para JSON
            })
                .then((Response) => Response.json())
                .then((Response) => {
                    alert(Response[0].Message)
                    if (Response[0].Message == "Sucesso") {
                        console.log("true")
                        this.props.navigation.navigate(Cadastro); //Navega para a Tela Inicial (COM SERVIÇOS)
                    }
                    console.log(Date);
                })
                .catch((error) => {
                    console.error("Erro encontrado" + error);
                })
        }
    }

    //Classe para ocultar a senha digitada

    updateSecureTextEntry() {
        if (secureTextEntry == true) {
            this.setState({ secureTextEntry: false })
        } else {
            this.setState({ secureTextEntry: true })
        };

    };
}
