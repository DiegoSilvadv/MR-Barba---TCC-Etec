<?php
    header("Access-Control-Allow-Origin: *");
    include_once "conexao.php";
    include_once "funcoes.php";
    include_once "email.php";

    global $con;
    $tipo = $_POST["tipo"];
    extract($_POST);

    if($tipo == "login-registro") {

        // registro de usuarios
        if(!isset($_POST["email"]) && isset($_POST["senha"]) && isset($_POST["repetir_senha"]) ){
            echo "Por favor verifique os dados!"; 
        }   
        else if ($senha == $repetir_senha){  
            $token = bin2hex(random_bytes(32));   
            $sql = "INSERT INTO login_user VALUES(0, :email, sha1(:senha), sha1(:repetir_senha), :token)";
            $command = $con->prepare($sql);
            $command->bindParam(":email", $email);
            $command->bindParam(":senha", $senha);
            $command->bindParam(":repetir_senha", $repetir_senha);
            $command->bindParam(":token", $token);
            $command->execute();
            EnviarEmail($email); 
        } else {
            Echo "Dados não correspondentes";
        }
           
    } 

    else if ($tipo == "login"){
        if(isset($email, $senha)){
            $sql = "SELECT email, senha FROM login_user WHERE email=:email AND senha=sha1(:senha)";
            $command = $con->prepare($sql);
            $command->bindParam(":email", $email);
            $command->bindParam(":senha", $senha);
            $command->execute();
            $data = $command->fetch(PDO::FETCH_OBJ);

            if(is_object($data)){
                echo "ok";
            } else {
                echo "não logado";
            }

        } else {
            echo "Informações invalida ";
        }
            
    }

?>