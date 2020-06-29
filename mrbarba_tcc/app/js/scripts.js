
$(document).ready(function(){
    // ações da página
        $("#agendas").click(function(){
            $("#content").toggle(1000);            
        });
        
        $("#cad-barbeiro").click(function(){
            $("#modal-1").toggle(1000);            
        });

        $("#cad-servico").click(function(){
            $("#modal-2").toggle(1000);            
        });



    $("#txttelefone").mask("(99) 9 9999-9999") 
    function ApenasLetras(e, t) {
        try {
            if (window.event) {
                var charCode = window.event.keyCode;
            } else if (e) {
                var charCode = e.which;
            } else {
                return true;
            }
            if (
                (charCode > 64 && charCode < 91) || 
                (charCode > 96 && charCode < 123) ||
                (charCode > 191 && charCode <= 255) // letras com acentos
            ){
                return true;
            } else {
                return false;
            }
        } catch (err) {
            alert(err.Description);
        }
    }
    
});

