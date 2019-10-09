class Fraccion {

  constructor(numerador, denominador) {
    this.numerador = numerador
    this.denominador = denominador
  }

  suma(argumento) {
    var num = this.numerador * argumento.denominador + argumento.numerador * this.denominador,
      den = this.denominador * argumento.denominador;
    return this.simplificar(new Fraccion(num, den));
  }

  resta(argumento) {
    var num = this.numerador * argumento.denominador - argumento.numerador * this.denominador,
      den = this.denominador * argumento.denominador;
    return this.simplificar(new Fraccion(num, den));
  }

  multiplicacion(argumento) {
    var num = this.numerador * argumento.numerador,
      den = this.denominador * argumento.denominador;
    return this.simplificar(new Fraccion(num, den));
  }

  division(argumento) {
    var num = this.numerador * argumento.denominador,
      den = this.denominador * argumento.numerador;
    return this.simplificar(new Fraccion(num, den));
  }

  elevar(num) {
    return this.simplificar(new Fraccion(Math.pow(this.numerador,num), Math.pow(this.denominador,num)))
  }

  mcd(a, b) {
    if (b > a) {
      return this.mcd(b, a)
    }
    if (a % b == 0) {
      return b
    }
    return this.mcd(b, a % b)
  }

  simplificar(argumento) {
    var negativo;
    if (argumento.numerador < 0 && argumento.denominador < 0) {
      argumento.numerador *= -1;
      argumento.denominador *= -1;
    }
    if (argumento.numerador < 0) {
      argumento.numerador *= -1;
      negativo = true;
    }
    if (argumento.denominador < 0) {
      argumento.denominador *= -1;
      negativo = true;
    }
    console.log(argumento.numerador)
    console.log(argumento.denominador)
    var mcd = this.mcd(argumento.numerador, argumento.denominador);
    argumento.numerador /= mcd;
    argumento.denominador /= mcd;
    if (negativo) {
      argumento.numerador *= -1;
    }
    return argumento
  }
}

function validarDatos(a, b, c, d) {
  if (b == 0 || d == 0) {
    return false
  }
  if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d)) {
    return false
  }

  return true
}

function validarDatos(a, b, c) {
  if (b == 0) {
    return false
  }
  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    return false
  }

  return true
}
$(document).ready(function() {
  $("#calcular").click(function() {
    if($("#Denominador1").val()==""){
      $("#Denominador1").val(1)
    }
    if($("#Denominador2").val()==""){
      $("#Denominador2").val(1)
    }
    var a = parseFloat($("#Numerador1").val())
    var b = parseFloat($("#Denominador1").val())
    var c = parseFloat($("#Numerador2").val())
    var d = parseFloat($("#Denominador2").val())
    console.log(b)
    console.log(c)
    var option = $("#operacion option:selected").text();
    if (option == "^") {
      if (validarDatos(a,b,c)) {
        var fraccion1 = new Fraccion(a, b)
        fraccionf = fraccion1.elevar(c)
        $("#NumeradorF").val(fraccionf.numerador)
        $("#DenominadorF").val(fraccionf.denominador)
      }else{
        alert("Ingresa datos validos!!!")
      }
    } else {
      if (validarDatos(a, b, c, d)) {
        var fraccion1 = new Fraccion(a, b)
        var fraccion2 = new Fraccion(c, d)
        if (option == "+") {
          fraccionf = fraccion1.suma(fraccion2)
          $("#NumeradorF").val(fraccionf.numerador)
          $("#DenominadorF").val(fraccionf.denominador)
        } else if (option == "/") {
          fraccionf = fraccion1.division(fraccion2)
          $("#NumeradorF").val(fraccionf.numerador)
          $("#DenominadorF").val(fraccionf.denominador)
        } else if (option == "*") {
          fraccionf = fraccion1.multiplicacion(fraccion2)
          $("#NumeradorF").val(fraccionf.numerador)
          $("#DenominadorF").val(fraccionf.denominador)
        } else if (option == "-") {
          fraccionf = fraccion1.resta(fraccion2)
          $("#NumeradorF").val(fraccionf.numerador)
          $("#DenominadorF").val(fraccionf.denominador)
        }
      } else {
        alert("Ingresa datos validos!!!")
      }
    }

  });
  $("#operacion").change(function() {
    if ($("#operacion option:selected").text() == "^") {
      $("#Denominador2").hide()
      $("#linea").hide()
    } else {
      $("#Denominador2").show()
      $("#linea").show()
    }
  });
});
