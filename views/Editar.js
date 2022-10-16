import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import { estilo } from '../assets/css/Css'
import { LinearGradient } from 'expo-linear-gradient';


import Button from './servico/components/Button';
export default Editar= (props) => {

    const [id] = useState(props.match.params.id);
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');

    const [status, setStatus] = useState({
        type: '',
        mensagem: ''
    })

    const editProduto = async e => {
        e.preventDefault();

        await fetch("http://localhost/celke/editar.php", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id, titulo, descricao })
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                if (responseJson.erro) {
                    setStatus({
                        type: 'error',
                        mensagem: responseJson.mensagem
                    });
                } else {
                    setStatus({
                        type: 'success',
                        mensagem: responseJson.mensagem
                    });
                }
            }).catch(() => {
                setStatus({
                    type: 'error',
                    mensagem: "Produto não editado com sucesso, tente mais tarde!"
                });
            });
    }

    useEffect(() => {
        const getProduto = async () => {
            await fetch("http://localhost/celke/visualizar.php?id=" + id)
                .then((response) => response.json())
                .then((responseJson) => {
                    setTitulo(responseJson.produto.titulo);
                    setDescricao(responseJson.produto.descricao);
                });
        }
        getProduto();
    }, [id]);



    return (
        <SafeAreaView>
            <View>
                <Text>
                    <Titulo>Editar</Titulo>
                    
                        
                            <Button>Listar</Button>
                        </Text>
                    
                

                {status.type === 'erro' ? <AlertDanger>{status.mensagem}</AlertDanger> : ""}
                {status.type === 'success' ? <AlertSuccess>{status.mensagem}</AlertSuccess> : ""}


                <View onSubmit={editProduto}>
                    <Label>Título: </Label>
                    <Input type="text" name="titulo" placeholder="Título do produto" value={titulo} onChange={e => setTitulo(e.target.value)} />

                    <Text>Descrição: </Text>
                    <Text type="text" name="descricao" placeholder="Descrição do produto" value={descricao} onChange={e => setDescricao(e.target.value)} />

                    <Button type="submit">Editar</Button>
                
                </View>
            </View>
        </SafeAreaView>
    );
}