<?php

include("../database.php");

//$cpf = '12345678911';

//$cpf = $decodedData["cpf"];

$CLISQL = "SELECT STP_INT_ID FROM cliente WHERE CLI_ST_CPF = '$cpf'";
$FUNSQL = "SELECT STP_INT_ID FROM funcionario WHERE FUN_ST_CPF = '$cpf'";

$exeCLI = mysqli_query($connection, $CLISQL);
$exeFUN = mysqli_query($connection, $FUNSQL);

$checkCSTP = mysqli_num_rows($exeCLI);
$checkFSTP = mysqli_num_rows($exeFUN);
  
if ($checkCSTP != 0) {
    $Message = mysqli_fetch_assoc($exeCLI);
} else if ($checkFSTP != 0) {
    $Message = mysqli_fetch_assoc($exeFUN);
} else {
    $Message = "Erro!";
}

$response[] = array("Message" => $Message);
echo json_encode($response);