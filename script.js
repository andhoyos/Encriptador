/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

let text = document.getElementById("input_text");
let msg = document.getElementById("message");

letra = text.value;

function esMayuscula(letra) {
  return /[A-Z]/.test(letra);
}

function validar() {
  let miPalabra = text.value;
  for (let i = 0; i < miPalabra.length; i++) {
    let letraActual = miPalabra[i];
    if (esMayuscula(letraActual)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Solo acepta letras minusculas!",
      });
      text.value = "";
    }
  }
}

function encriptar() {
  encriptado = text.value
    .toLowerCase()
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");
  msg.value = encriptado;
  validar();
}
function desencriptar() {
  desenciptado = text.value
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");
  msg.value = desenciptado;
}

function copiar() {
  let content = msg;
  content.select();
  document.execCommand("copy");
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Texto copiado al portapapeles",
    showConfirmButton: false,
    timer: 1500,
  });
}
