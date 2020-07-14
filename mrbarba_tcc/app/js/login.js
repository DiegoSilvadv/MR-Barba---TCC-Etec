
$(document).ready(function(){

    $("#btn-login").click(function(){
        $("input").removeClass("is-invalid");
        $("input").removeClass("is-valid");
        let email = $("#email").val();  
        let senha = $("#senha").val(); 

        $.post( rota, {"tipo": "login", "email": email, "senha": senha})
            .done(function(retorno) 
            {   
                alert(retorno);         
                window.location.href = "http://localhost/projects/TCC_MR_Barba/MR-Barba---TCC-Etec/mrbarba_tcc/app/src/pages/home";
            });     
    });
});