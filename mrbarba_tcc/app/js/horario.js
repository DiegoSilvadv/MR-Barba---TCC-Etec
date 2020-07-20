
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
                            <img src="https://image.flaticon.com/icons/svg/1214/1214428.svg" alt="Deletar">
                        </a>
                        <a href="javascript:EditarHorario(${json[i].id_horario})">
                            <img src="https://image.flaticon.com/icons/svg/860/860814.svg" alt="Editar">
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

function EditarHorario(id_horario){
    $.post(rota, {"tipo": "consultar-horario", "id_horario": id_horario}).
        done(function(retorno){
            
        let json = $.parseJSON(retorno);

        $("#txtdia").val(json.dia);
        $("#txthora").val(json.hora);
        $("button[type=submit]").html("Salvar");
        $("button[id=cad-horario]").id("save");
      
    });
}


$(document).ready(function(){
    
    ListarHorario();
    ListarHorarioSelect();
});