


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
                        <a href="javascript:Deletarbarbeiro(${json[i].id_barbeiro})">
                            <img src="https://image.flaticon.com/icons/svg/1214/1214428.svg" alt="Deletar">
                        </a>
                        <a href="javascript:EditarBarbeiro(${json[i].id_barbeiro}">
                            <img src="https://image.flaticon.com/icons/svg/860/860814.svg" alt="Editar">
                        </a>
                    </td>
                        
                </tr>`
            );
        }
        
    });
}

$(document).ready(function(){
    ListarBarbeiro();
    ListarBarbeiroSelect();
});