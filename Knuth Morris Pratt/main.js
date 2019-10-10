$("#btnIngresar").click(function() {
  var patron = $("#patron").val();
  var texto = $("#texto").val();
  var ins = [];
  $.getScript("kmp.js", function() {
    ins = kmp(patron, texto);
    $("#instancia").text(texto+" El patrón se encuentra en los índices: "+ins.toString());

  });
});
