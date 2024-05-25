var texto = "Meus Projetos";
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
