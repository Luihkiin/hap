<?php

$encodedData = file_get_contents('php://input');
$decodedData = json_decode($encodedData, true);

/*
$host = 'localhost';
$db = 'hap_teste';
$user = 'root';
$pwd = '';
*/

$host = 'hap.c1kvet3sqbni.sa-east-1.rds.amazonaws.com';
$db = 'HAP';
$user = 'hapadmin';
$pwd = 'Hap#dmin.2022';

$connection = mysqli_connect($host, $user, $pwd);
$dbConnection = mysqli_select_db($connection, $db);
