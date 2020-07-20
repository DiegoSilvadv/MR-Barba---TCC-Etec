<?php
    header("Access-Control-Allow-Origin: *");
    include_once "conexao.php";
    include_once "funcoes.php";
    // include_once "email.php";

    global $con;
    $tipo = $_POST["tipo"];
    extract($_POST);

    function error($message){
        $response["status"] = 0;   
        $response["error"] = $message;    
        arrayJSON($response);    
    }
    
    function arrayJSON($response){
        echo json_encode($response, JSON_UNESCAPED_UNICODE);
        exit;
    }

    function checkLogin(){
        global $con;
        if(isset($_COOKIE["token"], $_COOKIE["id_login"])){
            $sql = "SELECT count(*) 'qtd' FROM login_user WHERE id_login=:id_login AND token=:token";
            $command = $con->prepare($sql);
            $command->bindParam(":id_login", $_COOKIE["id_login"]);
            $command->bindParam(":token", $_COOKIE["token"]);
            $command->execute();
            $data = $command->fetch();
            $count = $data["qtd"];
            return $count;
        }
        return 0;    
    }
    
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
            
            if($command->execute()){
                $response["status"] = 1;
                arrayJSON($response);
            }
            
        } else {
            Echo "Dados não correspondentes";
        }
           
    } 

    if($tipo == "checkCookie"){
        if(checkLogin()==1){    
            $response["status"] = 1;
            arrayJSON($response);
        }     
        else{
            error("Você precisa fazer o login");
        }
    }

    else if ($tipo == "login"){

            $sql = "SELECT * FROM login_user WHERE email=:email AND senha=sha1(:senha)";
            $command = $con->prepare($sql);
            $command->bindParam(":email", $email);
            $command->bindParam(":senha", $senha);
            $command->execute();
            $data = $command->fetch();
           
            
            if($data){
                
                $sqlToken = "UPDATE login_user SET token=:token WHERE id_login = :id_login"; 
                $token = bin2hex(random_bytes(32));
                $commandToken = $con->prepare($sqlToken);
                $commandToken->bindParam(":token", $token);
                $commandToken->bindParam(":id_login", $data["id_login"]);
               
                if($commandToken->execute()){
                    setcookie("id_login", $data["id_login"] , time() + (86400 * 60), "/");
                    setcookie("token", $token , time() + (86400 * 60), "/");
                    $response["status"]= 1;
                    arrayJSON($response);
                } else{
                    error("Error on generate Token");
                } 
            } else {
                echo "Não existe esse registro, por favor registre-se";
            }
        }

    
    else if($tipo == "cad-servico"){
        
        $sql = "INSERT INTO servico VALUES(0, :tipo_servico)";
        $command = $con->prepare($sql);
        $command->bindParam(":tipo_servico", $tipo_servico);
        if($command->execute()){
            echo"Cadastrado com sucesso"; 
        }else {
            echo "Erro de conexão";
        }    
    }

    else if($tipo == "cad-barbeiro"){
        
        $sql = "INSERT INTO barbeiro VALUES(0, :nome_barbeiro)";
        $command = $con->prepare($sql);
        $command->bindParam(":nome_barbeiro", $nome_barbeiro);
            
        if($command->execute()){
            echo"Cadastrado com sucesso";    
        } else {
            echo "Erro de conexão";
        }
        
    }

    else if ($tipo == "cad-horario"){
        $sql = "INSERT INTO horario VALUES(0, :dia, :hora)";
        $command = $con->prepare($sql);
        $command->bindParam(":dia", $dia);
        $command->bindParam(":hora", $hora);
            
        if($command->execute()){
            echo"Cadastrado com sucesso";    
        } else {
            echo "Erro de conexão";
        }
    }


    
    else if($tipo == "listar-horario") {
        $sql = "SELECT * FROM horario";
        $command = $con->prepare($sql);
        $command->execute();
        $data = $command->fetchAll();
        arrayJSON($data);
    }

    else if($tipo == "listar-barbeiro") {
        $sql = "SELECT * FROM barbeiro";
        $command = $con->prepare($sql);
        $command->execute();
        $data = $command->fetchAll();
        arrayJSON($data);
    }

    else if($tipo == "listar-servico") {
        $sql = "SELECT * FROM servico";
        $command = $con->prepare($sql);
        $command->execute();
        $data = $command->fetchAll();
        arrayJSON($data);
    }

    //delete
    else if($tipo == "deletar-horario"){
        
        $sql = "DELETE FROM horario WHERE id_horario = :id_horario";
        $command = $con->prepare($sql);
        $command->bindParam(":id_horario", $id_horario);
        if($command->execute()){
            echo "Deletado com sucesso!";
        }  
    }

    else if($tipo == "consultar-horario"){
        $sql = "SELECT * FROM horario WHERE id_horario = :id_horario";
        $command = $con->prepare($sql);
        $command->bindParam(":id_horario", $id_horario);
        $command->execute();
        $data = $command->fetch();
        arrayJSON($data);
    }

    else if($tipo = "alterar-horario"){
        $sql = "UPDATE horario SET dia=:dia, hora=:hora WHERE id_horario=:id_horario";                   
        $command = $con->prepare($sql);
        $command->bindParam(":dia", $dia);
        $command->bindParam(":hora", $hora);
        $command->bindParam(":id_horario", $id_horario);
        $command->execute();
        $data = $command->fetch();
        arrayJSON($data);
    }
    
    




?>