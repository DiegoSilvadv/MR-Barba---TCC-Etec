
$(document).ready(function(){
    // ações da página
        $("#agendas").click(function(){
            $("#content").toggle(1000);            
        });
        
        $("#barbeiros").click(function(){
            $("#modal-2").toggle(1000);            
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
    $("#txttelefone").mask("(99) 9 9999-9999") 
    //função para digitar apenas letras
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
    // verificar email 
    function verificaremail(email){
        if(email.split(" ").length>1)
          return false;
        let partes = email.split("@");
        if(partes.length == 2){
          return partes[1].split(".").length>1;
        }
        else{
          return false;
        }
    }
    //verificar senha com quantidade minima de digitos 6
    function verificarsenha(senha, rsenha, qtddig){
        return (senha == rsenha && senha.length>=qtddig);
    }
    
});

