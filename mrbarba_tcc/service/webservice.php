<?php
    header("Access-Control-Allow-Origin: *");
    include_once "conexao.php";
    require_once ('./src/PHPMailer.php');
    require_once ('./src/SMTP.php');
    require_once ('./src/Exception.php');

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;
    

    global $con;
    
    $mail = new PHPMailer(true);
    $tipo = $_POST["tipo"];

    if($tipo=="login-registro") {

        $email = $_POST["email"];  
        $senha = $_POST["senha"];  
        $repetir_senha = $_POST["repetir_senha"];  
        
        if(isset($_POST["email"]) && isset($_POST["senha"]) && isset($_POST["repetir_senha"]) ){
            $sql = "INSERT INTO login_user VALUES(0, :email, :senha, :repetir_senha)";
            $command = $con->prepare($sql);
            $command->bindParam(":email", $email);
            $command->bindParam(":senha", $senha);
            $command->bindParam(":repetir_senha", $repetir_senha);
            $command->execute(); 

                $mail->SMTPDebug = SMTP::DEBUG_SERVER;
                $mail->isSMTP();
                $mail->Host = 'smtp.gmail.com';
                $mail->SMTPAuth = true;
                $mail->Username = 'noreply.mrbarba@gmail.com';
                $mail->Password = 'mrbarba123';
                $mail->Port = 587;

                $mail->setFrom('noreply.mrbarba@gmail.com');
                $mail->addAddress($email);
                
                $mail->isHTML(true);
                $mail->Subject = 'Confirmacao de email';
                $mail->Body = 'Para confirmar seu cadastro clique <a href="http://localhost/projects/TCC_MR_Barba/MR-Barba---TCC-Etec/mrbarba_tcc/app/src/pages/home/index.html">Aqui</a> ';
                $mail->AltBody = 'Chegou o email teste';
                    
                $mail->send(); 
    
        } else {
            echo "Não enviado";
        }
           
    }

?>