
function ListarBarbeiroSelect(){
    $.post(rota, {"tipo": "listar-barbeiro", "nome_barbeiro": "" })
    .done(function(retorno){

        let json = $.parseJSON(retorno);
        let lista_barbeiro = $("#tipo-barbeiro");
        lista_barbeiro.append(`<option value='0'>Selecione uma opção</option>`);
       
        for (let i = 0; i < json.length; i++) {
            lista_barbeiro.append(`<option value='${json[i].id_barbeiro}'>${json[i].nome_barbeiro}</option>`);
        }
        
    });
}
function ListarBarbeiro(){
    $.post(rota, {"tipo": "listar-barbeiro", "nome_barbeiro": "" })
    .done(function(retorno){

        let json = $.parseJSON(retorno);
        let conteudo = "";
        let lista = $("#listagem-barbeiro");
       
        for (let i = 0; i < json.length; i++) {
            lista.append( 
                ` 
                <tr>
                    <td>${json[i].id_barbeiro}</td>
                    <td>${json[i].nome_barbeiro}</td>
                    <td>
                        <a href="javascript:DeletarBarbeiro(${json[i].id_barbeiro})">
                            <img src="https://image.flaticon.com/icons/svg/325/325093.svg" alt="Deletar">
                        </a>
                        <a href="javascript:ConsultarBarbeiro(${json[i].id_barbeiro})">
                            <img src="https://image.flaticon.com/icons/svg/715/715750.svg" data-toggle="modal" data-target="#modal-barbeiro" alt="Editar">
                        </a>
                    </td>
                        
                </tr>`
            );
        }
        
    });
}
function DeletarBarbeiro(id_barbeiro){
    $.post(rota, {"tipo": "deletar-barbeiro", "id_barbeiro": id_barbeiro})
    .done(function(retorno){
        alert(retorno);
        window.location = "index.html";
    });
}
function ConsultarBarbeiro(id_barbeiro){
    $.post(rota, {"tipo": "consultar-barbeiro", "id_barbeiro": id_barbeiro}).
        done(function(retorno){

        let json = $.parseJSON(retorno);
        $("#txt-nome").val(json.nome_barbeiro);
        $("#txt-id-barbeiro").val(json.id_barbeiro);
    });      
}
function EditarBarbeiro(){
    $("#btn-update-barbeiro").click(function(){
        let nome_barbeiro = $("#txt-nome").val();
        let id_barbeiro = $("#txt-id-barbeiro").val();
        
        $.post(rota, {"tipo": "alterar-barbeiro", "id_barbeiro": id_barbeiro, "nome_barbeiro": nome_barbeiro}).
            done(function(retorno){
                alert(retorno);
        });
    });
}

$(document).ready(function(){
    EditarBarbeiro();
    ListarBarbeiro();
    ListarBarbeiroSelect();
});