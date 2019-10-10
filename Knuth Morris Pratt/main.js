$("#btnIngresar").click(function() {
  var patron = $("#patron").val();
  var texto = $("#texto").val();
  var ins = [];
  $.getScript("kmp.js", function() {
    console.log(kmp(patron, texto))
    ins = kmp(patron, texto);
    final="";
    console.log(ins.length)
    if(ins.length>1){
      final=texto.substring(0,ins[1]);
      console.log(final)
      for(var i = 0;i<ins.length;i++){
        final+= "<u>"+texto.substring(i,i+ins[0])+"</u>"
      }
    }
    console.log(final)
    $("#instancia").text(final);
  });
});
