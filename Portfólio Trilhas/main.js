var texto = "Kauan Garcia";
var textoElemento = document.querySelector(".titulo-principal");
var atraso = 200;

var contedorDeLetras = 0;
function escreverTexto(){
  if(contedorDeLetras < texto.length){
  textoElemento.textContent += texto.charAt(contedorDeLetras);
  contedorDeLetras++;
  setTimeout(escreverTexto, atraso);
  }
}
escreverTexto();

function myFunction() {
  var x = document.getElementById("cabecalho__menu__links1");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
