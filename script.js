'use strict'

var cbuSpan = document.getElementById("cbu");
var cod_bcra = document.getElementById("cod_bcra");
var nro_sucursal = document.getElementById("nro_sucursal");
var nro_cuenta = document.getElementById("nro_cuenta");

var span = a => {
  return "<span>" + a + "</span>";
};

var calcular = () => {

  let B = cod_bcra.value;
  let S = nro_sucursal.value;
  let C = nro_cuenta.value;

  var verificador1 =
      B[0] * 7 +
      B[1] * 1 +
      B[2] * 3 +
      S[0] * 9 +
      S[1] * 7 +
      S[2] * 1 +
      S[3] * 3;
  verificador1 = (10 - verificador1 % 10) % 10;

  var verificador2 =
      C[0] * 3 +
      C[1] * 9 +
      C[2] * 7 +
      C[3] * 1 +
      C[4] * 3 +
      C[5] * 9 +
      C[6] * 7 +
      C[7] * 1 +
      C[8] * 3 +
      C[9] * 9 +
      C[10] * 7 +
      C[11] * 1 +
      C[12] * 3;
  verificador2 = (10 - verificador2 % 10) % 10;

  if (isNaN(verificador1) || isNaN(verificador2)) {
    cbuSpan.innerHTML = span("Número de dígitos insuficiente");
  } else {
    cbuSpan.rawDigits = B + S + verificador1 + C + verificador2;
    cbuSpan.innerHTML = "CBU: " + B + S + span(verificador1) + C + span(verificador2);

    let btn = document.createElement("button");
    var objTo = document.getElementById("cbu");

    btn.innerHTML = '<span class="iconify" data-icon="akar-icons:copy"></span> Copiar';
    btn.type = "submit";
    btn.name = "formBtn";
    btn.onclick = function () {
      var objTo = document.getElementById("cbu");
      navigator.clipboard.writeText(objTo.rawDigits);
      alert("Copiado al portapapeles: " + objTo.rawDigits);
    }

    objTo.appendChild(btn);
  }
}

var generar = () => {
  calcular();
}
