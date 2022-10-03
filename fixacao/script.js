let texto = document.getElementById("paragrafo")
console.log(texto.innerHTML)

function imprimirTextoDigitado(){
  let textoDigitado = document.getElementById("texto")
  console.log(textoDigitado.value)
}

function mudarElementoP(){
  texto.innerHTML = document.getElementById("texto").value
}