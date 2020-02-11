// Navbar
const elemsDropdown = document.querySelectorAll(".dropdown-trigger");
const instancesDropdown = M.Dropdown.init(elemsDropdown, {
    coverTrigger: false
});
const elemsSidenav = document.querySelectorAll(".sidenav");
const instancesSidenav = M.Sidenav.init(elemsSidenav, {
    edge: "left"
});

function changePropucao(prop) {

  console.log(prop);

  var lavarArray = {"":"Selecione", "Bateria": "Bateria", "BateriaDupla": "Bateria dupla", "Diesel": "Diesel", "Gasolina": "Gasolina"}
  var varrerArray = {"":"Selecione", "Bateria": "Bateria", "Cabo": "Cabo", "GasLP": "Gas LP"};
  var polirArray = {"":"Selecione", "Cabo": "Cabo", "Diesel": "Diesel", "GasLP": "Gas LP", "SemMotor": "Sem motor"};

    if (prop === 'lavar') {
      var Options="";
      $.each(lavarArray,function(key,val) {
        Options=Options+"<option value='"+key+"'>"+val+"</option>";
      });
    }else if(prop === 'varrer'){
      var Options="";
      $.each(varrerArray,function(key,val) {
        Options=Options+"<option value='"+key+"'>"+val+"</option>";
      });
    }else if(prop === 'polir'){
      var Options="";
      $.each(polirArray,function(key,val) {
        Options=Options+"<option value='"+key+"'>"+val+"</option>";
      });
    }

    $('#propulcao').empty();
    $('#propulcao').append(Options);
    $("#propulcao").formSelect();

}; 

(function($){
  $(function(){
    $('.sidenav').sidenav();
    $('select').formSelect();
    $('input#input_text, textarea#textarea2').characterCounter();
    $(document).on('change','#tipo', function(){
      changePropucao(this.value);         
    });
    $('#price').maskMoney();
    $("select[required]").css({display: "block", height: 0, padding: 0, width: 0, position: 'absolute'});
  }); // end of document ready
})(jQuery);
