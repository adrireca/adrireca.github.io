<?php

    include("conexion_db.php");

    if(isset($_POST['boton_form'])){
        if(strlen($_POST["nombre"]) >= 1 && strlen($_POST["email"]) >= 1 && strlen($_POST["asunto"]) >= 1){
            $nombre = trim($_POST["nombre"]);
            $apellidos = trim($_POST["apellidos"]);
            $email = trim($_POST["email"]);
            $telefono = trim($_POST["telefono"]);
            $fecha_consulta = date('d/m/y');
            date_default_timezone_set("Europe/Madrid");
            $hora_consulta = date("H:i:sa");
            $asunto = $_POST["asunto"];
            

            $query = "insert into clientes (nombre, apellidos, email, telefono, fecha_consulta, hora_consulta, asunto) values('$nombre','$apellidos','$email','$telefono', '$fecha_consulta', '$hora_consulta', '$asunto')";

            $resultado=mysqli_query($conexion, $query);

            if($resultado){
                ?>
                    <div class="consulta_ok alert alert-success text-center mt-2" role="alert"><span>Gracias por tu confianza. En breve me pondré en contacto con usted.</span><div>
                <?php
            }else{
                ?>
                    <div class="consulta_error alert alert-danger text-center mt-2" role="alert"><span>¡Ups! ha ocurrido un error. Vuelve a intentarlo.</span><div>
                <?php           
            }
        }else{
            ?>
                <div class=" consulta_error alert alert-danger text-center mt-2" role="alert"><span>Por favor, rellena los campos.</span><div>
            <?php
        }
    }

?>