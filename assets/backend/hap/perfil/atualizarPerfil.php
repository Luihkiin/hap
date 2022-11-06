<?php

include('../database.php');

/*
$cpf = "12345678911";
$email = "alterado@hotmail.com";
$celular = "11912345678";
$cep = '06447125';
$estado = 'São Paulo';
$cidade = 'Barueri';
$bairro = 'Jardim Paulista';
$rua = 'Rua Hortolândia';
$complemento = 'Apartamento 21';
$numero = '23';
*/

$cpf = $decodedData["cpf"];
$email = $decodedData["email"];
$celular = $decodedData["celular"];
$cep = $decodedData["cep"];
$estado = "São Paulo";
$cidade = $decodedData["cidade"];
$bairro = $decodedData["bairro"];
$rua = $decodedData["rua"];
$complemento = $decodedData["complemento"];
$numero = $decodedData["numero"];

//Checar tipo de usuário: Cliente ou Funcionário
$checkSQL = "SELECT * FROM CLIENTE WHERE CLI_ST_CPF = '$cpf'";
$exeCHECK = mysqli_query($connection, $checkSQL);
$check = mysqli_num_rows($exeCHECK);

//Caso cliente
if ($check != 0) {
    $CLISQL = "SELECT END_INT_ID FROM CLIENTE WHERE CLI_ST_CPF = '$cpf'";
    $exeCLI = mysqli_query($connection, $CLISQL);
    $checkCEND = mysqli_fetch_assoc($exeCLI);
    $UPDATECTT = "UPDATE CLIENTE SET CLI_ST_EMAIL = '$email', CLI_ST_CELULAR = '$celular' WHERE CLI_ST_CPF = '$cpf'";
    $exeUPCTT = mysqli_query($connection, $UPDATECTT);

    if ($exeUPCTT === TRUE) {
        echo "Contato Atualizado com sucesso!";
    } else {
        echo "Erro ao atualizar contato";
    }
    
    if ($checkCEND["END_INT_ID"] === '1') {
        $INSERT = "INSERT INTO ENDERECO (END_ST_ESTADO, END_ST_CIDADE, END_ST_BAIRRO, END_ST_RUA, END_INT_NUMERO, END_TXT_COMPLEMENTO, END_ST_CEP)
        VALUES ('$estado', '$cidade', '$bairro', '$rua', '$numero', '$complemento', '$cep')";
        $exeINS = mysqli_query($connection, $INSERT);
        $INSERTID = mysqli_insert_id($connection);
        $UPDATEIN = "UPDATE CLIENTE SET END_INT_ID = '$INSERTID' WHERE CLI_ST_CPF = '$cpf'";
        $exeUPDATE = mysqli_query($connection, $UPDATEIN);
        echo "Endereço adicionado!";
    } else {
        $IDUPDATE = "SELECT END_INT_ID from CLIENTE WHERE CLI_ST_CPF = '$cpf'";
        $exeID = mysqli_query($connection, $IDUPDATE);
        $checkUP = mysqli_fetch_assoc($exeID);
        $checkID = $checkUP['END_INT_ID'];
        $UPDATE = "UPDATE ENDERECO SET END_ST_CIDADE = '$cidade', END_ST_BAIRRO = '$bairro', END_ST_RUA = '$rua', END_INT_NUMERO = '$numero', END_TXT_COMPLEMENTO = '$complemento', END_ST_CEP = '$cep'
        WHERE END_INT_ID = '$checkID'";
        $exeUP = mysqli_query($connection, $UPDATE);
        echo "Endereço cadastrado!";
    }
    //Caso funcionário
} else {
    $FUNSQL = "SELECT END_INT_ID FROM FUNCIONARIO WHERE FUN_ST_CPF = '$cpf'";
    $exeFUN = mysqli_query($connection, $FUNSQL);
    $checkFEND = mysqli_fetch_assoc($exeFUN);
    $UPDATECTT = "UPDATE FUNCIONARIO SET FUN_ST_EMAIL = '$email', FUN_ST_CELULAR = '$celular' WHERE FUN_ST_CPF = '$cpf'";
    $exeUPCTT = mysqli_query($connection, $UPDATECTT);

    if ($exeUPCTT === TRUE) {
        echo "Contato Atualizado com sucesso!";
    } else {
        echo "Erro ao atualizar contato";
    }
    
    if ($checkFEND["END_INT_ID"] === '1') {
        $INSERT = "INSERT INTO ENDERECO (END_ST_ESTADO, END_ST_CIDADE, END_ST_BAIRRO, END_ST_RUA, END_INT_NUMERO, END_TXT_COMPLEMENTO, END_ST_CEP)
        VALUES ('$estado', '$cidade', '$bairro', '$rua', '$numero', '$complemento', '$cep')";
        $exeINS = mysqli_query($connection, $INSERT);
        $INSERTID = mysqli_insert_id($connection);
        $UPDATEIN = "UPDATE FUNCIONARIO SET END_INT_ID = '$INSERTID' WHERE FUN_ST_CPF = '$cpf'";
        $exeUPDATE = mysqli_query($connection, $UPDATEIN);
        echo "Endereço adicionado!";
    } else {
        $IDUPDATE = "SELECT END_INT_ID from FUNCIONARIO WHERE FUN_ST_CPF = '$cpf'";
        $exeID = mysqli_query($connection, $IDUPDATE);
        $checkUP = mysqli_fetch_assoc($exeID);
        $checkID = $checkUP['END_INT_ID'];
        $UPDATE = "UPDATE ENDERECO SET END_ST_CIDADE = '$cidade', END_ST_BAIRRO = '$bairro', END_ST_RUA = '$rua', END_INT_NUMERO = '$numero', END_TXT_COMPLEMENTO = '$complemento', END_ST_CEP = '$cep'
        WHERE END_INT_ID = '$checkID'";
        $exeUP = mysqli_query($connection, $UPDATE);
        echo "Endereço cadastrado!";
    }
}

$response[] = array($Message);
echo json_encode($response);
