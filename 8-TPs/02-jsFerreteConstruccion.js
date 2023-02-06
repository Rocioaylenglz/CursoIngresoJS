/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo() {
  let largo;
  let ancho;
  let resultado;
  //tomo los valores
  largo = document.getElementById("txtIdLargo").value;
  ancho = document.getElementById("txtIdAncho").value;
  //parseo
  largo = parseInt(largo);
  ancho = parseInt(ancho);
  // asigno resultado
  resultado = (ancho + largo) * 2 * 3;
  //muestro
  alert("el resultado es " + resultado + " metros de alambre");
}
function Circulo() {
  let radio;
  let perimetro;
  let resultado;

  //tomo los valores
  radio = document.getElementById("txtIdRadio").value;
  //parseo
  radio = parseInt(radio);
  //calculo el perimetro (2*pi*radio)
  perimetro = 2 * 2.14 * radio;
  //calculo el resultado
  resultado = perimetro * 3;
  //muestro por alert
  alert("se debe comprar " + resultado + " metros de alambre");
}
function Materiales() {}
