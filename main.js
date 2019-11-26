var textoInicial;

$(document).ready(function() {
  $.get('archivo.txt', function(data) {
    $("#textoDisplay").text(data.replace(/\s/g, '').replace(/\d+/g, ''));
    textoInicial = $("#textoDisplay").text();
  });
});

$("#patron1").click(function() {
  $("#textoDisplay").text(textoInicial);
  var texto = $("#textoDisplay").text();
  $("#pat-select").text("El patrón elegido es: " + $("#patron1").val().toString());
  $.getScript("kmp.js", function() {
    ins = kmp($("#patron1").val(), texto);
    console.log($("#textoDisplay").html())
    $("#textoDisplay").html(highlight(ins, $("#textoDisplay").html(), $("#patron1").val().length));
    $("#indices").text("Hay "+ins.length+" ocurrencias y los índices son: "+ins.join(", "));
    console.log(ins);
  });
});

$("#patron2").click(function() {
  $("#textoDisplay").text(textoInicial);
  var texto = $("#textoDisplay").text();
  $("#pat-select").text("El patrón elegido es: " + $("#patron2").val().toString());
  $.getScript("kmp.js", function() {
    ins = kmp($("#patron2").val(), texto);
    console.log($("#textoDisplay").html())
    $("#textoDisplay").html(highlight(ins, $("#textoDisplay").html(), $("#patron2").val().length));
    $("#indices").text("Hay "+ins.length+" ocurrencias y los índices son: "+ins.join(", "));
    console.log(ins);
  });
});

$("#patron3").click(function() {
  $("#textoDisplay").text(textoInicial);
  var texto = $("#textoDisplay").text();
  $("#pat-select").text("El patrón elegido es: " + $("#patron3").val().toString());
  $.getScript("kmp.js", function() {
    ins = kmp($("#patron3").val(), texto);
    console.log($("#textoDisplay").html())
    $("#textoDisplay").html(highlight(ins, $("#textoDisplay").html(), $("#patron3").val().length));
    $("#indices").text("Hay "+ins.length+" ocurrencias y los índices son: "+ins.join(", "));
    console.log(ins);
  });
});

function highlight(array, texto, len) {
  var offset = 31;
  for (i = 0; i < array.length; i++) {
    texto = texto.substring(0, (offset * i) + array[i]) + "<span class='highlight'>" + texto.substring((offset * i) + array[i], (offset * i) + array[i] + len) + "</span>" + texto.substring((offset * i) + array[i] + len);
  }
  return texto;
}
