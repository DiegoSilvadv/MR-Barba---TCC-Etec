function ListarServico(){
    $.post(rota, {"tipo": "listar-servico", "tipo_servico": "" })
    .done(function(retorno){

        let json = $.parseJSON(retorno);
        let conteudo = "";
        let lista = $("#listagem-servico");
       
        for (let i = 0; i < json.length; i++) {
            lista.append( 
                ` 
                <tr>
                    <td>${json[i].id_servico}</td>
                    <td>${json[i].tipo_servico}</td>
                    <td>
                        <a href="javascript:DeletarServico(${json[i].id_servico})">
                            <img src="https://image.flaticon.com/icons/svg/325/325093.svg" alt="Deletar">
                        </a>
                        <a href="javascript:ConsultarServico(${json[i].id_servico})">
                            <img src="https://image.flaticon.com/icons/svg/715/715750.svg" data-toggle="modal" data-target="#modal-servico" alt="Editar">
                        </a>
                    </td>
                        
                </tr>`
            );
        }
        
    });
}
function ListarServicoSelect(){
    $.post(rota, {"tipo": "listar-servico", "tipo_servico": "" })
    .done(function(retorno){

        let json = $.parseJSON(retorno);
        let lista_servico = $("#tipo-serviço");
        lista_servico.append(`<option value='0'>Selecione uma opção</option>`);
       
        for (let i = 0; i < json.length; i++) {
            lista_servico.append(`<option value='${json[i].id_servico}'>${json[i].tipo_servico}</option>`);
        }
        
    });
}
function DeletarServico(id_servico){
    $.post(rota, {"tipo": "deletar-servico", "id_servico": id_servico})
    .done(function(retorno){
        alert(retorno);
        window.location = "index.html";
    });
}
function ConsultarServico(id_servico){
    $.post(rota, {"tipo": "consultar-servico", "id_servico": id_servico}).
        done(function(retorno){

        let json = $.parseJSON(retorno);
        $("#txt-servico").val(json.tipo_servico);
        $("#txt-id-servico").val(json.id_servico);
    });      
}
function EditarServico(){
    $("#btn-update-servico").click(function(){
        let tipo_servico = $("#txt-servico").val();
        let id_servico = $("#txt-id-servico").val();
        
        $.post(rota, {"tipo": "alterar-servico", "id_servico": id_servico, "tipo_servico": tipo_servico}).
            done(function(retorno){
                alert(retorno);
        });
    });
}

$(document).ready(function(){
    EditarServico();
    ListarServico();
    ListarServicoSelect();
});