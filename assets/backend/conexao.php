<?php

$con = mysqli_connect("localhost", "root", "");
$database = mysqli_select_db($con, "hap_teste");

$encodedData = file_get_contents('php://input');
$decodedData = json_decode($encodedData, true);