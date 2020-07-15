
$(document).ready(function(){
    
    $("#repetir-senha").hide(); 
    $("#btn-registrar").hide();

    $.post( rota, { tipo: "checkCookie"}).done(function(retorno) {
        let json = $.parseJSON(retorno);
        if(json.status!=0){
            window.location.href = "http://localhost/projects/TCC_MR_Barba/MR-Barba---TCC-Etec/mrbarba_tcc/app/src/pages/home/index.html";
        } 
    });

    

    $("#registrar-login").click(function(){
        $("#repetir-senha").show(1000); 
        $("#registrar-login").hide(1000);
        $("#btn-registrar").show();
        $("#btn-login").hide();
    });
    
    $("#btn-registrar").click(function(){
        let email = $("#email").val();  
        let senha = $("#senha").val();  
        let repetir_senha = $("#repetir_senha").val();
        
        // .done executa direto diferente do succes que so executa se der sucesso o return
        $.post( rota, {"tipo": "login-registro", "email": email, "senha": senha, "repetir_senha": repetir_senha})
            .done(function(retorno) 
            {        
                window.location = "http://localhost/projects/TCC_MR_Barba/MR-Barba---TCC-Etec/mrbarba_tcc/app/src/";         
            });
    });
    
    $("#btn-login").onSubmit(function(){
        
        let email = $("#email").val();  
        let senha = $("#senha").val(); 
        
        $.post( rota, {"tipo": "login", "email": email, "senha": senha})
            .done(function(retorno) 
            {   alert(retorno);
                let json = $.parseJSON(retorno);           
                if(json.status == 1)
                    window.location = "http://localhost/projects/TCC_MR_Barba/MR-Barba---TCC-Etec/mrbarba_tcc/app/src/pages/home/";     
            });     
    });

});