$(document).ready(function(){

    $("#btn-logar").click(function(){
        $("#login-form").submit(function(event) {
            event.preventDefault();
        
        let user_admin = $("#username").val();  
        let password_admin = $("#senha").val();
        
        $.post( rota, {"tipo": "login-adm", "user_admin": user_admin, "password_admin": password_admin, })
            .done(function(retorno) 
            {   
                // $("#username").val("");  
                // $("#senha").val("");
                let json =$.parseJSON(retorno);
                if(json.status !=0){
                    window.location = "http://localhost/projects/TCC_MR_Barba/MR-Barba---TCC-Etec/mrbarba_tcc/app/src/pages/dashboard/";
                } else {
                    window.location = "http://localhost/projects/TCC_MR_Barba/MR-Barba---TCC-Etec/mrbarba_tcc/app/src/pages/login_adm/";
                    alert("Login ou senha inválidos");
                    abort();
                }
            });
        });
             
    });

});