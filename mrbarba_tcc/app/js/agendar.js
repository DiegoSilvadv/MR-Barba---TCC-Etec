$(document).ready(function(){
    $("#btn-salvar").click(function(){
        $("#form-agendamento").submit(function(event) {
            event.preventDefault();
            
            $.post(rota, {"tipo": "agendar", "": "" })
            .done(function(retorno){
                alert(retorno);  
            });
        });
    });


});