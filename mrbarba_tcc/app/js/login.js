


$(document).ready(function(){
    $("#repetir-senha").hide(); 
    $("#btn-registrar").hide();

    
    $("#registrar-login").click(function(){
        $("#repetir-senha").show(1000); 
        $("#registrar-login").hide(1000);
        $("#btn-registrar").show();
        $("#btn-login").hide();
    });

    

    $("#form-login").submit(function(e){
        e.preventDefault();
        let email = $("#email").val();  
        let senha = $("#senha").val();  
        let repetir_senha = $("#repetir_senha").val();

        // .done executa direto diferente do succes que so executa se der sucesso o return
        $.post( rota, {"tipo": "login-registro", "email": email, "senha": senha, "repetir_senha": repetir_senha})
            .done(function(retorno) 
            {   
                alert("Email encaminhado");         
                window.location.href = "http://localhost/projects/TCC_MR_Barba/MR-Barba---TCC-Etec/mrbarba_tcc/app/src/";
            }) 
         
    });   
});