<?php

$encodedData = file_get_contents('php://input');
$decodedData = json_decode($encodedData, true);

$host = 'localhost';
$db = 'hap_teste';
$user = 'root';
$pwd = '';

$connection = mysqli_connect(
    $host,
    $user,
    $pwd
);

$dbConnection = mysqli_select_db($connection, $db);
