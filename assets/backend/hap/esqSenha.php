<?php

include('database.php');

$email= $decodedData["email"];

$CLIEMAIL = "SELECT * FROM cliente WHERE CLI_ST_EMAIL = '$email'";
$FUNEMAIL = "SELECT * FROM funcionario WHERE FUN_ST_EMAIL = '$email'";
$exeCLI = mysqli_query($connection, $CLIEMAIL);
$exeFUN = mysqli_query($connection, $FUNEMAIL);
$checkCLI = mysqli_num_rows($exeCLI);
$checkFUN = mysqli_num_rows($exeFUN);

if ($checkCLI != 0) 
{
        $Message = 'Email encontrado';
} else if ($checkFUN != 0) 
{
        $Message = 'Email encontrado';
} else 
{
    $Message = "Email nao encontrado";
}

$response = $Message;
echo json_encode($response);
?>