<?php

include ('../database.php');

header('Content-Type: application/json');

$cpf = '12345678911';

$SQL = "SELECT * FROM CLIENTE WHERE CLI_ST_CPF = '$cpf'";
$exeSQL = mysqli_query($connection, $SQL);
$image = mysqli_fetch_assoc($exeSQL);
$image = $image['CLI_FIL_FOTOPERFIL'];

echo json_encode($image);