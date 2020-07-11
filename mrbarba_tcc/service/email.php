<?php
require_once ('./src/PHPMailer.php');
require_once ('./src/SMTP.php');
require_once ('./src/Exception.php');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;


function EnviarEmail($email){
    
    $mail = new PHPMailer(true);

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
    $mail->AltBody = 'Email de teste';
    $envio = $mail->Send();
    
}


?>