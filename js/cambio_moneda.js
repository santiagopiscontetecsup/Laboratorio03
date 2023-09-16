function calcularCambio() {
  var tipo_moneda = document.querySelector('input[name="moneda"]:checked');
  var monto = parseFloat(document.getElementById("monto").value);

  if (tipo_moneda && !isNaN(monto)) {
    var moneda_cambio = tipo_moneda.value;
    var tipoCambio = obt_tipo_cambio(moneda_cambio);
    var cambio = monto / tipoCambio;
    alert("El monto de cambio es: " + cambio.toFixed(2) + " " + moneda_cambio);
  } else {
    alert("Por favor, selecciona una moneda y proporciona un monto válido.");
  }
}

function obt_tipo_cambio(monedaDestino) {
  var moneda_tipo = {
    dolar: 3.8,
    euro: 3.96,
  };

  return moneda_tipo[monedaDestino] || 0;
}
