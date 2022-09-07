const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const models = require('./models');
const { useReducer } = require('react');

const app=express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false}));
let pessoa=models.pessoa

app.post('/login',async (req,res)=>{
    let response=await pessoa.findOne({
        where:{cpf:req.body.CPF, senha: req.body.PWD}
    });
    if(response === null){
        res.send(JSON.stringify('error'));
    }else{
        res.send(response);
    }
});

app.get('/create',async (req,res)=>{
    let create=await pessoa.create({
        CPF: "51008361801",
        senha: "123456",
        createdAt: new Date(),
        updateAt: new Date()
    });
    res.send('Usuário criado com sucesso!');
});

app.get('/read', async (req,res)=>{
    let read=await pessoa.findAll({
        raw:true,
    });
    console.log(read);
});

app.get('/update',async (req,res)=> {
    let update=await useReducer.findByPk(2,
        {include:[{all:true}]}).then((response)=>{
            response.Trackings[0].local='Novo Registro';
            response.Trackings[0].save();
        });
});

app.get('/delete', async (req,res)=> {
    pessoa.destroy({
        where: {id:2}
    });
});

let port=process.env.PORT || 3000;
app.listen(port,(req,res)=>{
    console.log('Servidor Rodando');
})