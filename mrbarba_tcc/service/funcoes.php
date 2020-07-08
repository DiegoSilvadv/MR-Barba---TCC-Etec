<?php
    //função de erro  
    function error($message){
        $response["status"] = 0;   
        $response["error"] = $message;    
        arrayJSON($response);    
    }

    function verificarsenha ($senha, $repetir_senha){
        if($senha == $repetir_senha){}
    }

    function verificaremail($email){
        if(filter_var($email, FILTER_VALIDATE_EMAIL)){}      
    }


?>