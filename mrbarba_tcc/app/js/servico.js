function ListarServico(){
    $.post(rota, {"tipo": "listar-servico", "tipo_servi": "" })
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
                            <img src="https://image.flaticon.com/icons/svg/1214/1214428.svg" alt="Deletar">
                        </a>
                        <a href="javascript:EditarServico(${json[i].id_servico}">
                            <img src="https://image.flaticon.com/icons/svg/860/860814.svg" alt="Editar">
                        </a>
                    </td>
                        
                </tr>`
            );
        }
        
    });
}

$(document).ready(function(){
    ListarServico();
});