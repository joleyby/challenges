function reset() {
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");

  tituloMensaje.textContent = "Ningún mensaje fue encontrado";
  parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
}

function ocultar() {
  let muñeco = document.getElementById('muñeco');
  let mensajeEncriptado = document.getElementById('mensaje-encriptado');

  muñeco.classList.add("oculto");
  mensajeEncriptado.classList.add("oculto");
}

function encriptar() {
  let contenedor = document.getElementById("contenedor-resultado");
  let resultado = document.getElementById("parrafo-resultado");
  let texto = document.getElementById("texto").value.toLowerCase();

  let textoCifrado = texto.replace(/[^a-z]/g, "")
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

  if (texto.length != 0) {
    ocultar();
    contenedor.classList.remove("oculto")
    resultado.textContent = textoCifrado;
    return;
  }
  reset();
}

function desencriptar() {
  let contenedor = document.getElementById("contenedor-resultado");
  let resultado = document.getElementById("parrafo-resultado");
  let texto = document.getElementById("texto").value.toLowerCase();

  let textoCifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

  if (texto.length != 0) {
    ocultar();
    contenedor.classList.remove("oculto")
    resultado.textContent = textoCifrado;
    return;
  }
  reset();
}

function copiar() {
  let resultado = document.getElementById("parrafo-resultado");
  if (navigator.clipboard && navigator.clipboard.writeText) {

    navigator.clipboard.writeText(resultado.textContent).then(() => console.log("Texto copiado.")).catch(e => console.log('error al copiar el texto: ', e));
    return;
  }

  let rango = document.createRange();
  rango.selectNodeContents(resultado);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(rango);

  document.execCommand('copy');

  window.getSelection().removeAllRanges();

}
