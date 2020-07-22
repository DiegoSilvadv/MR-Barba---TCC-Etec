<?php
    header("Access-Control-Allow-Origin: *");
    include_once "conexao.php";
    include_once "funcoes.php";
    include_once "email.php";

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
        if(isset($_COOKIE["token"])){
            $sql = "SELECT count(*) 'qtd' FROM login_user WHERE token=:token";
            $command = $con->prepare($sql);
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
    }

    else if ($tipo == "login"){
            $sql = "SELECT id_login, token, email, senha FROM login_user WHERE email=:email AND senha=sha1(:senha)";
            $command = $con->prepare($sql);
            $command->bindParam(":email", $email);
            $command->bindParam(":senha", $senha);
            $command->execute();
            $data = $command->fetch();               
                if($data){
                    setcookie("token", $data['token'], time() + (86400 * 60), "/");
                    $response["status"] = 1;
                    arrayJSON($response);
                } else{
                    $response["status"] = 0;
                    arrayJSON($response);
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

    else if($tipo == "alterar-horario"){
        $sql = "UPDATE horario SET dia=:dia, hora=:hora WHERE id_horario=:id_horario";                   
        $command = $con->prepare($sql);
        $command->bindParam(":dia", $dia);
        $command->bindParam(":hora", $hora);
        $command->bindParam(":id_horario", $id_horario);
        
        if($command->execute())
            echo"Alterado com sucesso!"; 
    }


    else if($tipo == "deletar-barbeiro"){
        
        $sql = "DELETE FROM barbeiro WHERE id_barbeiro = :id_barbeiro";
        $command = $con->prepare($sql);
        $command->bindParam(":id_barbeiro", $id_barbeiro);
        if($command->execute()){
            echo "Deletado com sucesso!";
        }  
    }

    else if($tipo == "deletar-servico"){
        
        $sql = "DELETE FROM servico WHERE id_servico = :id_servico";
        $command = $con->prepare($sql);
        $command->bindParam(":id_servico", $id_servico);
        if($command->execute()){
            echo "Deletado com sucesso!";
        }  
    }

    
    else if($tipo == "consultar-servico"){
        $sql = "SELECT * FROM servico WHERE id_servico = :id_servico";
        $command = $con->prepare($sql);
        $command->bindParam(":id_servico", $id_servico);
        $command->execute();
        if($data = $command->fetch())
            arrayJSON($data);
    }
    
    else if ($tipo == "alterar-servico"){
        $sql = "UPDATE servico SET tipo_servico = :tipo_servico WHERE id_servico= :id_servico";  
                       
        $command = $con->prepare($sql);
        $command->bindParam(":tipo_servico", $tipo_servico);
        $command->bindParam(":id_servico", $id_servico);
        
        if($command->execute())
            echo"Alterado com sucesso!";
    }
    
    
    else if($tipo == "consultar-barbeiro"){
        $sql = "SELECT * FROM barbeiro WHERE id_barbeiro = :id_barbeiro";
        $command = $con->prepare($sql);
        $command->bindParam(":id_barbeiro", $id_barbeiro);
        $command->execute();
        if($data = $command->fetch())
            arrayJSON($data);
    }

    else if ($tipo == "alterar-barbeiro"){
        $sql = "UPDATE barbeiro SET nome_barbeiro = :nome_barbeiro WHERE id_barbeiro= :id_barbeiro";  
                       
        $command = $con->prepare($sql);
        $command->bindParam(":nome_barbeiro", $nome_barbeiro);
        $command->bindParam(":id_barbeiro", $id_barbeiro);
        
        if($command->execute())
            echo"Alterado com sucesso!";
    }

    // agenda
    else if ($tipo == "agenda"){
        $sql = "INSERT INTO agendamento VALUES(0, :nome, :email, :telefone, :id_horario, :id_servico, :id_barbeiro )";
        $command = $con->prepare($sql);
        $command->bindParam(":nome", $nome);
        $command->bindParam(":email", $email);
        $command->bindParam(":telefone", $telefone);
        $command->bindParam(":id_horario", $id_horario);
        $command->bindParam(":id_servico", $id_servico);
        $command->bindParam(":id_barbeiro", $id_barbeiro);
            
        if($command->execute()){
            echo"Cadastrado com sucesso";    
        } else {
            echo "Erro de conexão";
        }
    }

    else if ($tipo == "listar-agenda"){
        $sql = "SELECT a.id, a.nome, a.email, a.telefone, h.dia, h.hora, s.tipo_servico, b.nome_barbeiro 
        FROM agendamento a, horario h, servico s, barbeiro b WHERE a.id_horario = h.id_horario 
        and a.id_servico = s.id_servico and a.id_barbeiro = b.id_barbeiro ";
        $command = $con->prepare($sql);
        if($command->execute()){
            $data = $command->fetchAll();
            arrayJSON($data);
        } else 
            echo"Erro ao consultar banco de dados.";  
    }


    else if($tipo == "deletar-agenda"){
        $sql = "DELETE FROM agendamento WHERE id = :id";
        $command = $con->prepare($sql);
        $command->bindParam(":id", $id);
        if($command->execute()){
            echo "Deletado com sucesso!";
        }  
    }

    else if($tipo == "confirmar-agenda"){
        EnviarEmail($email);    
    }
        
   



    // id INT PRIMARY KEY AUTO_INCREMENT,
    // nome VARCHAR(120) NOT NULL,
    // email varchar(120) NOT NULL,
    // telefone VARCHAR(11) NOT NULL,
    // id_horario INT,
    // id_servico INT,
    // id_barbeiro INT
    
    




?>