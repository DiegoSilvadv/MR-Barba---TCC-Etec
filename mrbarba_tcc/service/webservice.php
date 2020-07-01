<?php
    header("Access-Control-Allow-Origin: *");
    include_once "conexao.php";

    global $con;
    

    $tipo = $_POST["tipo"];

    if($tipo=="login-registro") {
        
                $email = $_POST["email"];  
                $senha = $_POST["senha"];  
                $repetir_senha = $_POST["repetir_senha"];  

                $sql = "INSERT INTO login_user VALUES(0, ':email', ':senha', ':repetir_senha')";
                $command = $con->prepare($sql);
                $command->bindParam(":email", $email);
                $command->bindParam(":senha", $senha);
                $command->bindParam(":repetir_senha", $repetir_senha);
                $command->execute();
                
                return 1;
            
            return 0;    
    
    }

    
    









?>