function ListarBarbeiro(){
    
    $.post(rota, {"tipo": "listar-barbeiro", "nome_barbeiro": "" })
    .done(function(retorno){

        let json = $.parseJSON(retorno);
        let conteudo = "";
        let lista = $("#listagem-barbeiro");
       
        
        for (let i = 0; i < json.length; i++) {
            lista.append( 
                ` <tr>
                    <td>${json[i].id_barbeiro}</td>
                    <td>${json[i].nome_barbeiro}</td>
                    <td>
                        <a href="javascript:Deletarbarbeiro(${json[i].id_barbeiro})">
                            <img src="https://image.flaticon.com/icons/svg/395/395848.svg" alt="Deletar">
                        </a>
                    </td>
                    
                    <td>
                        <a href="javascript:EditarBarbeiro(${json[i].id_barbeiro}">
                            <img src="https://image.flaticon.com/icons/svg/257/257198.svg" alt="Editar">
                        </a>
                    </td>
                </tr>`
            );
        }
        
    });
}


$(document).ready(function(){
    ListarBarbeiro();
});