const cotizador = new API(
  "18c0da023430f7338ebd10d126057f087b05d4e1748d11a921eecc10c582495c"
);
const ui = new Interfaz();

// Leer el formulario
const formulario = document.getElementById("formulario");
// Event Listener
formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  // Leer la moneda seleccionada
  const monedaSelect = document.querySelector("#moneda");
  const monedaSeleccionada =
    monedaSelect.options[monedaSelect.selectedIndex].value;

  // Leer la criptomoneda seleccionada
  const criptoMonedaSelect = document.querySelector("#criptomoneda");
  const criptoMonedaSeleccionada =
    criptoMonedaSelect.options[criptoMonedaSelect.selectedIndex].value;

  // Comprobar que ambos campos tengan algo seleccionado
  if (monedaSeleccionada === "" || criptoMonedaSeleccionada === "") {
    ui.mostrarMensaje(
      "Ambos campos son Obligatorios",
      "alert bg-danger text-center"
    );
  } else {
    cotizador
      .obtenerValores(monedaSeleccionada, criptoMonedaSeleccionada)
      .then((data) => {
        ui.mostrarResultado(
          data.resultado.RAW,
          monedaSeleccionada,
          criptoMonedaSeleccionada
        );
      });
  }
});
