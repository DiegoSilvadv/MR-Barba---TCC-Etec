<?php
    header("Access-Control-Allow-Origin: *");
    include_once "conexao.php";
    include_once "funcoes.php";
    include_once "email.php";

    global $con;
    $tipo = $_POST["tipo"];

    if($tipo == "login-registro") {
        // registro de usuarios 
        $email = $_POST["email"];  
        $senha = $_POST["senha"];  
        $repetir_senha = $_POST["repetir_senha"]; 

        
        if(!isset($_POST["email"]) && isset($_POST["senha"]) && isset($_POST["repetir_senha"]) ){
            echo "Por favor verifique os dados!"; 
        }   
        else if ($senha == $repetir_senha){     
            $sql = "INSERT INTO login_user VALUES(0, :email, :senha, :repetir_senha)";
            $command = $con->prepare($sql);
            $command->bindParam(":email", $email);
            $command->bindParam(":senha", $senha);
            $command->bindParam(":repetir_senha", $repetir_senha);
            $command->execute();
            EnviarEmail($email); 
        } else {
            Echo "Dados não correspondentes";
        }
           
    } 

?>