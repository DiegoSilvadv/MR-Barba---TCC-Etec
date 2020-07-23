
<?php
    $servidor = "localhost";
    $bd = "mrbarba";
    $usuario = "root";
    $senha = "";
    $con = new PDO("mysql:host=$servidor;dbname=$bd;port=3306",
        $usuario,
        $senha);
?>
