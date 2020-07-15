<?php
    //função de erro  
    function verificarsenha ($senha, $repetir_senha){
        if($senha == $repetir_senha){}
    }

    function verificaremail($email){
        if(filter_var($email, FILTER_VALIDATE_EMAIL)){}      
    }


?>