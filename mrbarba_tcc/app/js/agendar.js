
function ListarAgenda(){
    $.post(rota, {"tipo": "listar-agenda" })
    .done(function(retorno){

        let json = $.parseJSON(retorno);
        let conteudo = "";
        let lista = $("#listagem-registro");
       
        for (let i = 0; i < json.length; i++) {
            lista.append( 
                ` 
                <tr>
                    <td>${json[i].nome}</td>
                    <td>${json[i].email}</td>
                    <td>${json[i].telefone}</td>
                    <td>${json[i].dia}</td>
                    <td>${json[i].hora}</td>
                    <td>${json[i].tipo_servico}</td>
                    <td>${json[i].nome_barbeiro}</td>

                    <td>
                        <a href="javascript:ConfirmarAgenda('${json[i].email}')">
                            <img src="https://image.flaticon.com/icons/svg/845/845646.svg" alt="Confirmação">
                        </a>
                        <a href="javascript:DeletarAgendamento(${json[i].id})">
                            <img src="https://image.flaticon.com/icons/svg/325/325093.svg" alt="Deletar">
                        </a>            
                    </td>
                        
                </tr>`
            );
        }
        
    });
}

function DeletarAgendamento(id){
    $.post(rota, {"tipo": "deletar-agenda", "id": id})
    .done(function(retorno){
        alert(retorno);
        window.location = "index.html";
    });
}

function ConfirmarAgenda(email){
    $.post(rota, {"tipo": "confirmar-agenda", "email" :email})
    .done(function(retorno){
        alert("Email de confirmação enviado ao cliente");
        window.location = "index.html";
    });
}

$(document).ready(function(){   
    ListarAgenda();

});