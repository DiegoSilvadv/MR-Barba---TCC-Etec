


$(document).ready(function(){
    $("#repetir-senha").hide(); 
    
    $("#registrar-login").click(function(){
        $("#repetir-senha").show(1000); 
        $("#registrar-login").hide(1000);
        $("#btn-registrar").html("Registrar-se", 1000);


        let email = $("#email").val();  
        let password = $("#password").val();  
        $.post( url, { "type": "login", "email": email, "password": password})
            .done(function(retorno) 
            {            
                let json = $.parseJSON(retorno);           
                if(json.status == 1)
                    window.location = "home.html";
                else
                    alert(json.error);
            });
});