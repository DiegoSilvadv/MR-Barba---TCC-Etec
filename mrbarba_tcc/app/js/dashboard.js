$(document).ready(function(){
    
    $("#cad-servico").click(function(){
        let servico = $("#servico").val();
        $.post(rota, {"tipo": "cad-servico", "servico": servico})
            .done(function(retorno){
                alert(retorno);
            })

       
    });
    



});