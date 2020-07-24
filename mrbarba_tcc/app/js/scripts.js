
$(document).ready(function(){
    // Animações da página
    $(".menu").hide();
    $(".menu").slideDown(1500);

    $("#servico-registro").hide();
    $("#barbeiros-registro").hide(); 
    $("#modal-1").hide();
    $("#modal-3").hide();  
    $("#horario-registro").hide();
    $("#modal-2").hide();  
    $("#agenda-registros").hide();

        $("#agendas").click(function(){
            $("#agenda-registros").toggle(1000);            
        });
        
        $("#barbeiros").click(function(){
            $("#modal-2").toggle(1000);         
        });

        $("#list-horario").click(function(){
            $("#horario-registro").toggle(1000);            
        });

        $("#horarios").click(function(){
            $("#modal-3").toggle(1000);           
        });

        $("#servicos").click(function(){
            $("#modal-1").toggle(1000);           
        });

        $("#list-barbeiro").click(function(){
            $("#barbeiros-registro").toggle(1000);           
        });

        $("#list-servico").click(function(){
            $("#servico-registro").toggle(1000);      
        });


    //mascaras 
    $("#txttelefone").mask("(99) 9 9999-9999");
    
    //horario
    $('#txtdia').mask("99/99/9999");
    $('#txthora').mask('99:99');
    $('#txt-dia').mask("99/99/9999");
    $('#txt-hora').mask('99:99');
    
});

