<?php

include('../database.php');


$SQL = "SELECT SER_ST_NOME, SER_ST_DESCRICAO, SER_FL_PRECOMEDIO FROM servico";
$exeSQL = mysqli_query($connection, $SQL);
$checkSQL = mysqli_num_rows($exeSQL)-1;


if (!$exeSQL) {
    $Message = "Erro ao executar a query";
} else {
    while ($linha = mysqli_fetch_assoc($exeSQL)) {
        $dados[] = array(
            $linha["SER_ST_NOME"],
            $linha["SER_ST_DESCRICAO"],
            $linha["SER_FL_PRECOMEDIO"],
        );
    }
}

for ($i = 0; $i <= $checkSQL; $i++) {
    $response[] = array (
        "Servicos: ", "Nome" => $dados[$i][0], "Descricao" => $dados[$i][1], "Preco" => $dados[$i][2]
    );
}

echo json_encode($response);

$connection->close();
