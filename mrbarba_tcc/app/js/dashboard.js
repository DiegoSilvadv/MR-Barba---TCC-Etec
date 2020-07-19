$(document).ready(function(){
    
    //cadastrar um serviço
    $("#cad-servico").click(function(){
           
        $("#form-add-servico").submit(function(event) {
            event.preventDefault(); 
            let tipo_servico = $("#servico").val();
            $.post(rota, {"tipo": "cad-servico", "tipo_servico": tipo_servico})
                .done(function(retorno){ 
                        alert(retorno);
                        $("#servico").val("");
                });
        });
    });

    //cadastrar um barbeiro 
    $("#cad-barbeiro").click(function(){
        $("#form-add-barbeiro").submit(function(event) {
            event.preventDefault();
        let nome_barbeiro = $("#barbeiro").val();

        $.post(rota, {"tipo": "cad-barbeiro", "nome_barbeiro": nome_barbeiro})
            .done(function(retorno){    
                    alert(retorno);
                    $("#barbeiro").val("");
            })
        });
    });

    //cadastrar um horario
    $("#cad-horario").click(function(){
        $("#form-add-horario").submit(function(event) {
            event.preventDefault();
        let dia = $("#dia").val();
        let hora = $("#hora").val();

        $.post(rota, {"tipo": "cad-horario", "dia": dia, "hora": hora})
            .done(function(retorno){    
                    alert(retorno);
                    $("#dia").val("");
                    $("#hora").val("");
            })
        });
    });
    



});