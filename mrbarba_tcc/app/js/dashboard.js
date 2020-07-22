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
        let dia = $("#txtdia").val();
        let hora = $("#txthora").val();

        $.post(rota, {"tipo": "cad-horario", "dia": dia, "hora": hora})
            .done(function(retorno){    
                    alert(retorno);
                    $("#txtdia").val("");
                    $("#txthora").val("");
            })
        });
    });

    // agendar
    $("#btn-agendar").click(function(){
       
        $("#form-agendamento").submit(function(event){
            event.preventDefault();
        
            let nome = $("#nome").val();
            let email = $("#email").val();
            let id_horario = $("#horario").val();
            let telefone = $("#txttelefone").val();
            let id_servico = $("#tipo-serviço").val();
            let id_barbeiro = $("#tipo-barbeiro").val();

            $.post(rota, {"tipo": "agenda", "nome": nome, "email": email, "id_horario" :id_horario, "telefone" :telefone, "id_servico": id_servico, "id_barbeiro" :id_barbeiro})
                .done(function(retorno){ 

                    alert("Agendamento feito, aguarde a confirmação em seu e-mail")
                    nome = $("#nome").val("");
                    email = $("#email").val("");
                    id_horario = $("#horario").val(0);
                    telefone = $("#txttelefone").val("");
                    id_servico = $("#tipo-serviço").val(0);
                    id_barbeiro = $("#tipo-barbeiro").val(0);  
                    
            });
        });
    });
    



});