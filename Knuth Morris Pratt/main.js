$("#btnIngresar").click(function () {
    var patron = $("#patron").val();
    var texto = $("#texto").val();
    var ins = [];
    $.getScript("kmp.js", function () {
        ins = kmp(patron, texto);
        $("#resultado").text(texto);
        $("#instancia").text(ins.join(" - "));

    });
});




