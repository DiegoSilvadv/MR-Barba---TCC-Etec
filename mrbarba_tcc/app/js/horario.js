// function ListarHorario(){
//     $.post(rota, {"tipo": "listar-horario", "dia": "" })
//     .done(function(retorno){

//         let json = $.parseJSON(retorno);
        
//         let lista_horario = $("#listagem-horario");
//         lista_horario.append(`<option value='0'>Selecione uma opção</option>`);
       
//         for (let i = 0; i < json.length; i++) {
//             lista_horario.append(`<option value='${json[i].id_horario}'>${json[i].hora}</option>`);
//         }
        
//     });
// }

function ListarHorario(){
    $.post(rota, {"tipo": "listar-horario" })
    .done(function(retorno){

        let json = $.parseJSON(retorno);
        let conteudo = "";
        let lista = $("#listagem-horario");
       
        for (let i = 0; i < json.length; i++) {
            lista.append( 
                ` 
                <tr>
                    <td>${json[i].dia}</td>
                    <td>${json[i].hora}</td>
                    <td>
                        <a href="javascript:Deletarbarbeiro(${json[i].id_horario})">
                            <img src="https://image.flaticon.com/icons/svg/1214/1214428.svg" alt="Deletar">
                        </a>
                        <a href="javascript:EditarBarbeiro(${json[i].id_horario}">
                            <img src="https://image.flaticon.com/icons/svg/860/860814.svg" alt="Editar">
                        </a>
                    </td>
                        
                </tr>`
            );
        }
        
    });
}


$(document).ready(function(){

  ListarHorario();
});