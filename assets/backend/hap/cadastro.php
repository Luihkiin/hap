<?php

include('database.php');


$nome = $decodedData["nome"];
$sexo = $decodedData["sexo"];
$cpf = $decodedData["cpf"];
$email = $decodedData["email"];
$cel = $decodedData["celular"];
$pwd = $decodedData["pwd"];
$dataNasc = $decodedData["dataNasc"];
$dataAtual = $decodedData["dataAtual"];
$idade = $decodedData["idade"];
$id365 = $decodedData["id365"];
$perfil = $decodedData["perfil"];


$SQL = "SELECT * FROM CLIENTE WHERE CLI_ST_CPF = '$cpf'";
$exeSQL = mysqli_query($connection, $SQL);
$checkCPF = mysqli_num_rows($exeSQL);

if ($checkCPF != 0) 
{
    $arrayu = mysqli_fetch_array($exeSQL);
    $Message = "CPF já cadastrado, efetue o login.";
} else 
{
    if ($perfil === '1') 
    {
        $CLISQL = "INSERT INTO CLIENTE 
        (END_INT_ID, SEX_INT_ID, STP_INT_ID, CLI_ST_NOME, CLI_ST_CPF, CLI_ST_EMAIL, CLI_ST_CELULAR, CLI_ST_SENHA, CLI_DT_DATANASCIMENTO, CLI_INT_IDADE, CLI_DTM_DATACRIACAO, CLI_ST_IDD365)
        VALUES (1, $sexo, $perfil, '$nome', '$cpf', '$email', '$cel', '$pwd', '$dataNasc', '$idade', '$dataAtual', '$id365')";
        //Endereço com ID 1, porque este será adicionado na personalização do perfil
        if ($connection->query($CLISQL) === TRUE) 
        {
            $Message = "Cadastro efetuado com sucesso";
        } else 
        {
            $Message = "Erro ao cadastrar: " . $CLISQL . "<br>" . $con->error;
        }
    } else if ($perfil === '2')
    {
        $FUNCSQL = "INSERT INTO FUNCIONARIO (END_INT_ID, SEX_INT_ID, STP_INT_ID, FUN_ST_NOME, FUN_ST_CPF, FUN_ST_EMAIL, FUN_ST_CELULAR, FUN_DT_DATANASCIMENTO, FUN_INT_IDADE, FUN_ST_SENHA, FUN_DTM_DATACRIACAO, FUN_ST_IDD365) 
        VALUES (1, $sexo, $perfil, '$nome', '$cpf', '$email', '$cel', '$dataNasc', '$idade', '$pwd', '$dataAtual', '$id365')";
        //Endereço com ID 1, porque este será adicionado na personalização do perfil
        if ($connection->query($FUNCSQL) === TRUE) 
        {
            $Message = "Cadastro efetuado com sucesso";
        } else 
        {
            $Message = "Erro ao cadastrar: " . $FUNCSQL . "<br>" .$con->error;
        }
    } else 
    {
        $Message = "Perfil invalido";
    }       
}

$response = $Message;
echo json_encode($response);

$connection->close();
?>