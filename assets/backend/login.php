<?php

include('conexao.php');

$cpf = $decodedData["CPF"];
$senha = $decodedData["PWD"];

$SQL = "SELECT * FROM cliente WHERE CLI_ST_CPF = '$cpf'";
$exeSQL = mysqli_query($con, $SQL);
$checkCPF = mysqli_num_rows($exeSQL);
  
if ($checkCPF != 0) {
    $arrayu = mysqli_fetch_array($exeSQL);
    if ($arrayu['CLI_ST_SENHA'] != $senha) {
        $Message = 'Senha Incorreta';
    } else {
        $SQLNOME = "SELECT CLI_ST_NOME FROM cliente WHERE CLI_ST_CPF = '$cpf'";
        $exeNOME = mysqli_query($con, $SQLNOME);
        if ($nome = $exeNOME->fetch_assoc()) {
            $Message = ('Bem-Vindo');  
            }
        }
} else {
    $Message = "Conta não cadastrada";
}


$response[] = array("Message" => $Message);
echo json_encode($response);

$con->close();
?>