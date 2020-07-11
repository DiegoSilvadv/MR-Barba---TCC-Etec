
$(document).ready(function(){


    $("#btn-login").click(function(){
        Login();
    })
    function Login(){
        $("#form-login").submit(function(e){
            e.preventDefault();
            let email = $("#email").val();  
            let senha = $("#senha").val(); 

            $.post( rota, {"tipo": "login", "email": email, "senha": senha})
                .done(function(retorno) 
                {   
                    alert(retorno);         
                    window.location.href = "http://localhost:4000/agenda/mrbarba_tcc/MR-Barba---TCC-Etec/mrbarba_tcc/app/src/pages/home/";
                });
        });
    }
    
   
});