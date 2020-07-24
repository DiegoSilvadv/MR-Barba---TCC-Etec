
$(document).ready(function(){
    
    $("#repetir-senha").hide(); 
    $("#btn-registrar").hide();
    
    $("#registrar-login").click(function(){
        $("#repetir-senha").show(1000); 
        $("#registrar-login").hide(1000);
        $("#btn-registrar").show();
        $("#btn-login").hide();
    });

    // $.post( rota, {"tipo": "checkCookie"})
    // .done(function(retorno) 
    // {        
    //     let json = $.parseJSON(retorno);
    //     if(json.status != 0){
    //         window.location = "http://localhost/projects/TCC_MR_Barba/MR-Barba---TCC-Etec/mrbarba_tcc/app/src/pages/home/index.html";
    //     } 
    // });
    
    $("#btn-registrar").click(function(){
        $("#form-login").submit(function(event) {
            event.preventDefault();
                let email = $("#email").val();  
                let senha = $("#senha").val();  
                let repetir_senha = $("#repetir_senha").val();
                
                // .done executa direto diferente do succes que so executa se der sucesso o return
                $.post( rota, {"tipo": "login-registro", "email": email, "senha": senha, "repetir_senha": repetir_senha})
                    .done(function(retorno) 
                    {        
                        // alert("E-mail de confirmação enviado, por favor cheque sua caixa de e-mail!");
                        window.location = "http://localhost/projects/TCC_MR_Barba/MR-Barba---TCC-Etec/mrbarba_tcc/app/src/pages/home/";         
                    });
        });
    });
    
    $("#btn-login").click(function(){
        let email = $("#email").val();  
        let senha = $("#senha").val();
        
        $.post( rota, {"tipo": "login", "email": email, "senha": senha})
            .done(function(retorno) 
            {   
                let json = $.parseJSON(retorno);
                if(json.status == 1){
                    window.location = "http://localhost/projects/TCC_MR_Barba/MR-Barba---TCC-Etec/mrbarba_tcc/app/src/pages/home/";
                } else {
                    alert("Login ou senha inválido");
                }

            });
             
    });
});