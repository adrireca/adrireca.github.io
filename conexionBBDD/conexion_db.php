<?php

include("datos_conexion.php");

$conexion = mysqli_connect($db_localhost, $db_user, $db_password, $db_name);

if(mysqli_connect_errno()){
    echo 'Fallo al conectar con la bbdd';
    exit();
}

mysqli_set_charset($conexion, 'utf8');

?>