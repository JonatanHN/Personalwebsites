<?php 

$name = $_POST['Nombre'];
$email = $_POST['Email'];
$message = $_POST['Mensaje'];
$asunto = $_POST['Asunto'];
$info = "El usuario con el correo: ".$email." Deja el siguiente mensaje: ".$message;
$destino = "jonatanhn@protonmail.com";

mail($destino, $asunto , $info);

header('location: https://jonatanhn.tk');

?>