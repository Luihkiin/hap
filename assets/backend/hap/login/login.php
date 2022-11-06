<?php

include("../database.php");

//$cpf = '12345678911';
//$cpf = '15987463214';
//$pwd = '123456';

$cpf = $decodedData["cpf"];
$pwd = $decodedData["pwdGlobal"];

$CLISQL = "SELECT * FROM CLIENTE WHERE CLI_ST_CPF = '$cpf'";
$FUNSQL = "SELECT * FROM FUNCIONARIO WHERE FUN_ST_CPF = '$cpf'";

$exeCLI = mysqli_query($connection, $CLISQL);
$exeFUN = mysqli_query($connection, $FUNSQL);

$checkCCPF = mysqli_num_rows($exeCLI);
$checkFCPF = mysqli_num_rows($exeFUN);
  
if ($checkCCPF != 0) {
    $arrayu = mysqli_fetch_array($exeCLI);
    if ($arrayu['CLI_ST_SENHA'] != $pwd) {
        $Message = 'Senha Incorreta';
    } else if ($arrayu['CLI_ST_CPF'] = $cpf){
        $Message = ('Bem-Vindo');        
    }
} else if ($checkFCPF != 0) {
    $arrayu = mysqli_fetch_array($exeFUN);
    if ($arrayu['FUN_ST_SENHA'] !=$pwd) {
        $Message = 'Senha Incorreta';
    } else {
        $Message = ('Bem-Vindo');
    }
} else {
    $Message = "Conta nao cadastrada";
}


$response = $Message;

echo json_encode($response);