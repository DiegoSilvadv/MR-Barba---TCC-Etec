
function ListarHorarioSelect(){
    $.post(rota, {"tipo": "listar-horario"})
    .done(function(retorno){

        let json = $.parseJSON(retorno);
        let lista = $("#horario");
        lista.append(`<option value='0'>Selecione um horário disponível</option>`);
       
        for (let i = 0; i < json.length; i++) {
            lista.append(`<option value='${json[i].id_horario}'>${json[i].dia} Hora: ${json[i].hora}</option>`); 
        }
        
    });
}
function ListarHorario(){
    $.post(rota, {"tipo": "listar-horario"})
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
                        <a href="javascript:DeletarHorario(${json[i].id_horario})">
                            <img src="https://image.flaticon.com/icons/svg/325/325093.svg" alt="Deletar">
                        </a>
                        <a href="javascript:ConsultarHorario(${json[i].id_horario})">
                            <img src="https://image.flaticon.com/icons/svg/715/715750.svg" data-toggle="modal" data-target="#exampleModalCenter" alt="Editar">
                        </a>
                    </td>
                        
                </tr>`
            );
        }
        
    });
}
function DeletarHorario(id_horario){
    $.post(rota, {"tipo": "deletar-horario", "id_horario": id_horario})
    .done(function(retorno){
        alert(retorno);
        window.location = "index.html";
    });
}
function ConsultarHorario(id_horario){
    $.post(rota, {"tipo": "consultar-horario", "id_horario": id_horario}).
        done(function(retorno){
            
        let json = $.parseJSON(retorno);
        $("#txt-dia").val(json.dia);
        $("#txt-hora").val(json.hora);
        $("#txt-id").val(json.id_horario);
    });      
}
function EditarHorario(){
    $("#btn-update-horario").click(function(){
        let dia = $("#txt-dia").val();
        let hora =  $("#txt-hora").val();
        let id_horario = $("#txt-id").val();
        
        $.post(rota, {"tipo": "alterar-horario", "id_horario": id_horario, "dia": dia, "hora": hora}).
            done(function(retorno){
                alert(retorno);
        });
    });
}

$(document).ready(function(){
    
    ListarHorario();
    ListarHorarioSelect();
    EditarHorario();

});