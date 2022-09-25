<?php
$con = mysqli_connect("localhost", "root", "");
$database = mysqli_select_db($con, "hap");

$encodedData = file_get_contents('php://input');
$decodedData = json_decode($encodedData, true);

$cpf = $decodedData["CPF"];
$senha = $decodedData["PWD"];

$SQL = "SELECT * FROM pessoa WHERE rg_pessoa = '$cpf'";
$exeSQL = mysqli_query($con, $SQL);
$checkCPF = mysqli_num_rows($exeSQL);
  
if ($checkCPF != 0) {
    $arrayu = mysqli_fetch_array($exeSQL);
    if ($arrayu['senha'] != $senha) {
        $Message = 'Senha Incorreta';
    } else {
        $Message = 'Bem-Vindo';
    }
} else {
    $Message = "Conta não cadastrada";
}

$response[] = array("Message" => $Message);
echo json_encode($response);

$con->close();
?>