<?php

include('../database.php');

//Variáveis
$cpf = $decodedData["cpf"];//'12345678911';

//Select para Cliente
$CLISQL = "SELECT END_INT_ID, SEX_INT_ID, STP_INT_ID, CLI_ST_NOME, CLI_ST_CPF, CLI_ST_EMAIL, CLI_ST_CELULAR, CLI_DT_DATANASCIMENTO, CLI_INT_IDADE, CLI_BL_PREMIUM, CLI_DTM_DATACRIACAO, CLI_FIL_FOTOPERFIL 
FROM cliente WHERE CLI_ST_CPF = '$cpf'";
$exeCLI = mysqli_query($connection, $CLISQL);
$checkCLI = mysqli_num_rows($exeCLI);

//Select para Funcionário
$FUNSQL = "SELECT END_INT_ID, SEX_INT_ID, STP_INT_ID, FUN_ST_NOME, FUN_ST_CPF, FUN_ST_EMAIL, FUN_ST_CELULAR, FUN_DT_DATANASCIMENTO, FUN_INT_IDADE, FUN_DTM_DATACRIACAO, FUN_FIL_FOTOPERFIL 
FROM funcionario WHERE FUN_ST_CPF = '$cpf'";
$exeFUN = mysqli_query($connection, $FUNSQL);

//Processamento
if ($checkCLI != 0) {
    while ($linha = mysqli_fetch_assoc($exeCLI)) {
        $dados[] = array(
            $linha["SEX_INT_ID"],
            $linha["CLI_ST_NOME"],
            $linha["CLI_ST_CPF"],
            $linha["CLI_ST_EMAIL"],
            $linha["CLI_ST_CELULAR"],
            $linha["CLI_DT_DATANASCIMENTO"],
            $linha["CLI_INT_IDADE"],
            $linha["CLI_BL_PREMIUM"],
            $linha["CLI_DTM_DATACRIACAO"],
            $linha["END_INT_ID"],
            $linha["STP_INT_ID"],
        );
    }

    $enderecoID = $dados[0][9];
    $ENDCLI = "SELECT END_ST_ESTADO, END_ST_CIDADE, END_ST_BAIRRO, END_ST_RUA, END_INT_NUMERO, END_TXT_COMPLEMENTO, END_ST_CEP 
        FROM endereco INNER JOIN cliente ON endereco.END_INT_ID = cliente.END_INT_ID WHERE cliente.END_INT_ID = '$enderecoID'";
    $exeENDC = mysqli_query($connection, $ENDCLI);

    while ($linhaEnd = mysqli_fetch_assoc($exeENDC)) {
        $endDados[] = array(
            $linhaEnd["END_ST_ESTADO"],
            $linhaEnd["END_ST_CIDADE"],
            $linhaEnd["END_ST_BAIRRO"],
            $linhaEnd["END_ST_RUA"],
            $linhaEnd["END_INT_NUMERO"],
            $linhaEnd["END_TXT_COMPLEMENTO"],
            $linhaEnd["END_ST_CEP"],
        );
    }
    $response = array(
        "Cliente: ", "Sexo" => $dados[0][0], "Nome" => $dados[0][1], "CPF" => $dados[0][2],
        "Email" => $dados[0][3], "Celular" => $dados[0][4], "DataNasc" => $dados[0][5], "Idade" => $dados[0][6], "Premium" => $dados[0][7],
        "DataCri" => $dados[0][8], "Perfil" => $dados[0][10], "Endereco: ", "Estado" => $endDados[0][0], "Cidade" => $endDados[0][1], "Bairro" => $endDados[0][2],
        "Rua" => $endDados[0][3], "Numero" => $endDados[0][4], "Complemento" => $endDados[0][5], "Cep" => $endDados[0][6]
    );
} else{
    while ($linha = mysqli_fetch_assoc($exeFUN)) {
        $dados[] = array(
            $linha["SEX_INT_ID"],
            $linha["STP_INT_ID"],
            $linha["FUN_ST_NOME"],
            $linha["FUN_ST_CPF"],
            $linha["FUN_ST_EMAIL"],
            $linha["FUN_ST_CELULAR"],
            $linha["FUN_DT_DATANASCIMENTO"],
            $linha["FUN_INT_IDADE"],
            $linha["FUN_DTM_DATACRIACAO"],
            $linha["END_INT_ID"],
        );
    }

    $enderecoID = $dados[0][9];
    $ENDFUN = "SELECT END_ST_ESTADO, END_ST_CIDADE, END_ST_BAIRRO, END_ST_RUA, END_INT_NUMERO, END_TXT_COMPLEMENTO, END_ST_CEP 
        FROM endereco INNER JOIN funcionario ON endereco.END_INT_ID = funcionario.END_INT_ID WHERE funcionario.END_INT_ID = '$enderecoID'";
    $exeENDF = mysqli_query($connection, $ENDFUN);


    while ($linhaEnd = mysqli_fetch_assoc($exeENDF)) {
        $endDados[] = array(
            $linhaEnd["END_ST_ESTADO"],
            $linhaEnd["END_ST_CIDADE"],
            $linhaEnd["END_ST_BAIRRO"],
            $linhaEnd["END_ST_RUA"],
            $linhaEnd["END_INT_NUMERO"],
            $linhaEnd["END_TXT_COMPLEMENTO"],
            $linhaEnd["END_ST_CEP"],
        );
    }
    $response = array(
        "Funcionario: ", "Sexo" => $dados[0][0], "StatusP" => $dados[0][1], "Nome" => $dados[0][2], "CPF" => $dados[0][3],
        "Email" => $dados[0][4], "Celular" => $dados[0][5], "DataNasc" => $dados[0][6], "Idade" => $dados[0][7], "DataCri" => $dados[0][8],
        "Endereco: ", "Estado" => $endDados[0][0], "Cidade" => $endDados[0][1], "Bairro" => $endDados[0][2],
        "Rua" => $endDados[0][3], "Numero" => $endDados[0][4], "Complemento" => $endDados[0][5], "Cep" => $endDados[0][6]
    );
}


//Saída de dados
echo json_encode($response);
