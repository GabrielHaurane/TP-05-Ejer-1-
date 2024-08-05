const botton = document.querySelector("button");
botton.addEventListener("click", solicitarNumero);

botton.addEventListener('click', function() {
    this.remove();
});

function generarNumero() {
    return Math.floor(Math.random() * 10);
}
const div = document.querySelector(".align-content-center");
function solicitarNumero() {
    console.log(`crea el formulario`);
    const formulario = document.createElement("form");
    formulario.innerHTML = `
    <label for="numero">Ingrese el numero!</label>
    <input type="number" name="numero">
    <button class = "btn btn-success"> intentar</button>
    `;
    formulario.className = `d-flex flex-column my-3`;
    const numero = generarNumero();
    formulario.addEventListener("submit", function (event) {
        event.preventDefault(); // Previene el comportamiento por defecto del formulario
        const numeroIngresado = document.querySelector("input").value;
    comprobarNumero(numero, numeroIngresado);
});
div.appendChild(formulario);
}
let Mensaje = document.createElement("p");
function comprobarNumero(numero, numeroIngresado) {
    if (numero == numeroIngresado) {
        Mensaje.innerHTML = `<p>HAS ACERTADO!!!</p>`;
  }
  if (numero > numeroIngresado) {
      Mensaje.innerHTML = `<p>El numero que buscas es mayor al que ingresaste</p>`;
    }
    div.appendChild(Mensaje);
    if (numero < numeroIngresado) {
        Mensaje.innerHTML = `<p>El numero que buscas es menor al que ingresaste</p>`;
    }
}
