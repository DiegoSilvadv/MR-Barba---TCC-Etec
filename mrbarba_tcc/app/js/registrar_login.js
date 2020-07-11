


$(document).ready(function(){
    $("#repetir-senha").hide(); 
    $("#btn-registrar").hide();

    
    $("#registrar-login").click(function(){
        $("#repetir-senha").show(1000); 
        $("#registrar-login").hide(1000);
        $("#btn-registrar").show();
        $("#btn-login").hide();
    });
    $("#btn-registrar").click(function(){
        RegistrarLogin();
    });
    
function RegistrarLogin(){
    
    $("#form-login").submit(function(e){
        e.preventDefault();
        let email = $("#email").val();  
        let senha = $("#senha").val();  
        let repetir_senha = $("#repetir_senha").val();

        // .done executa direto diferente do succes que so executa se der sucesso o return
        $.post( rota, {"tipo": "login-registro", "email": email, "senha": senha, "repetir_senha": repetir_senha})
            .done(function(retorno) 
            {   
                alert("E-mail encaminhado para confirmação de login");         
            }) 
         
    });   
}




});