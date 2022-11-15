import { Alert } from "react-native";

const ApiBase = "http://192.168.0.100:80/hap";

var headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
};

const API = {
    //Cadastro
    singUp: async () => {
        var Data = {
            nome: nomeGlobal,
            sexo: sexoGlobal,
            cpf: cpfGlobal,
            email: emailGlobal,
            celular: celGlobal,
            pwd: pwdGlobal,
            dataNasc: dataNascGlobal,
            dataAtual: dataAtualGlobal,
            idade: idadeGlobal,
            id365: id365,
            perfil: perfilGlobal,
        };

        await fetch(ApiBase + '/cadastro.php', {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(Data),
        })
            .then((response) => response.json())
            .then((response) => {
                alert(response)
                if (response === "Cadastro efetuado com sucesso") {
                    console.log("Cadastro realizado")
                    global.token = 'access'
                } else if (response === 'CPF já cadastrado, efetue o login.') {
                    console.log("Cadastro existente")
                    global.token = 'permit'
                }
            })
            .catch((error) => {
                Alert.alert("Erro ao cadastrar", "Tente novamente!")
                console.log("Erro encontrado: " + error);
            })
    },

    //Login
    login: async () => {
        global.token = '';

        var Data = {
            cpf: cpf,
            pwdGlobal: pwdGlobal,
        };

        await fetch(ApiBase + '/login/login.php', {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(Data),
        })
            .then((response) => response.json())
            .then((response) => {
                if (response === "Bem-Vindo") {
                    Alert.alert("Olá", "Bem-vindo(a)!")
                    console.log("Login bem-sucedido")
                    global.token = 'access'
                    console.log(token)
                } else if (response === "Senha Incorreta") {
                    Alert.alert("Informações incorretas", "Verifique seus dados")
                } else {
                    Alert.alert("Conta não encontrada", "Realize seu cadastro!")
                    console.log("Conta não cadastrada")
                    global.token = 'restrict'
                    console.log(token)
                }
                console.log(Data);
            })
            .catch((error) => {
                console.log("Erro encontrado: " + error);
            })
    },

    //Esqueci Senha
    forgotPass: async () => {
        if (emailGlobal.length == 0) {
            Alert.alert("Campos Faltando", "Insira seu email e tente novamente!");
        } else {
            var Data = {
                email: emailGlobal,
            };

            await fetch(ApiBase + '/esqSenha.php', {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(Data),
            })
                .then((response) => response.json())
                .then((response) => {
                    if (response === "Email encontrado") {
                        Alert.alert("Atenção!", "Um email de recuperação será enviado dentro de alguns momentos, aguarde!")
                        console.log("Sucesso na recuperação de senha")
                        global.token = 'access'
                    } else if (response === 'Email nao encontrado') {
                        Alert.alert("Erro", "Email não encontrado!")
                        global.token = 'restrict'
                    } else {
                        Alert.alert("Erro", "Foi encontrado um erro")
                    }
                    console.log(Data);
                })
                .catch((error) => {
                    console.log("Erro encontrado: " + error);
                })
        }
    },

    //Consultar Perfil
    profileSelect: async () => {
        global.token = '';
        global.jsonProfile = '';

        var Data = {
            cpf: cpf,
        };

        const response = await fetch(ApiBase + '/perfil/perfilSelect.php', {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(Data),
        }).then((response) => response.json())
        global.jsonProfile = response;

        return jsonProfile;
    },

    //Atualizar Perfil
    profileUpdate: async () => {
        global.token = '';

        var DataUpdate = {
            cpf: cpfGlobal,
            email: emailGlobal,
            celular: celGlobal,
            cep: cepGlobal,
            cidade: cidadeGlobal,
            bairro: bairroGlobal,
            rua: ruaGlobal,
            numero: numeroGlobal,
            complemento: complementoGlobal,
        };

        const formData = new FormData();
        formData.append('image', imageGlobal);

        await fetch(ApiBase + '/perfil/atualizarPerfil.php', {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(DataUpdate, formData),
        })
            .then(global.token = 'access')
            .catch((error) => {
                console.log("Erro encontrado: " + error)
            })
        Alert.alert("Cadastro atualizado", "Suas informações foram atualizadas com sucesso");
    },

    pictureSelect: async () => {
        const image = await fetch(ApiBase + '/perfil/profilePicSelect.php', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            body: JSON.stringify()}
        })
            .then((image) => image.json())
            .then((image) => image)
            .catch(error => console.log(error));

        global.profilePic = image;
        return profilePic;
    },

    listServices: async () => {
        const response = await
            fetch(ApiBase + '/servicos/servico.php')
                .then((response) => response.json())
        global.jsonService = response;
    },

    createOrder: async () => {
        var Data = {
            cpf: cpf,
            funcionario: funcionario,
            pagamento: pagGlobal,         
            servico: servico,
            dataAten: dataAtenGlobal,
            dataSol: dataSolGlobal,
            descricao: descGlobal,        
        };

        await fetch(ApiBase + '/servicos/solicitacao.php', {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(Data),
        })
            .then((response) => response.json())
            .then((response) => {
                if (response = "Solicitacao Efetuada") {
                    Alert.alert("Solicitação Efetuada", "Aguarde o atendimento");
                    global.token = 'access';
                } else {
                    Alert.alert("Erro", "Tente novamente");
                }
            })
            .catch((error) => {
                Alert.alert("Erro ao solicitar serviço", "Tente novamente!")
                console.log("Erro encontrado: " + error);
            })
    },

    employeeSelect: async () => {
        const response = await fetch(ApiBase + '/servicos/employee.php')
        .then((response) => response.json())
        global.jsonEmployee = response;
    },

    associateService: async () => {

    },
}

export default API;