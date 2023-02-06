/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar() {
  //declaro las variables
  let precioUno;
  let precioDos;
  let precioTres;
  let resultado;
  //tomo sus valores
  precioUno = document.getElementById("txtIdPrecioUno").value;
  precioDos = document.getElementById("txtIdPrecioDos").value;
  precioTres = document.getElementById("txtIdPrecioTres").value;
  // los transformo en parseInt
  precioUno = parseInt(precioUno);
  precioDos = parseInt(precioDos);
  precioTres = parseInt(precioTres);
  //asigno el resultado
  resultado = precioUno + precioDos + precioTres;
  //hago un alert para mostrar el resultado
  alert("el resultado es " + resultado);
}
function Promedio() {
  let precioUno;
  let precioDos;
  let precioTres;
  let resultado;
  //tomo sus valores
  precioUno = document.getElementById("txtIdPrecioUno").value;
  precioDos = document.getElementById("txtIdPrecioDos").value;
  precioTres = document.getElementById("txtIdPrecioTres").value;
  // los transformo en parseInt
  precioUno = parseInt(precioUno);
  precioDos = parseInt(precioDos);
  precioTres = parseInt(precioTres);
  //asigno el resultado
  resultado = (precioUno + precioDos + precioTres) / 3;
  //hago un alert para mostrar el resultado
  alert("el resultado es " + resultado);
}
function PrecioFinal() {
  let precioUno;
  let precioDos;
  let precioTres;
  let resultado;
  //tomo sus valores
  precioUno = document.getElementById("txtIdPrecioUno").value;
  precioDos = document.getElementById("txtIdPrecioDos").value;
  precioTres = document.getElementById("txtIdPrecioTres").value;
  // los transformo en parseInt
  precioUno = parseInt(precioUno);
  precioDos = parseInt(precioDos);
  precioTres = parseInt(precioTres);
  //asigno el resultado
  resultado = ((precioUno + precioDos + precioTres) * 21) / 100;
  //hago un alert para mostrar el resultado
  alert("el resultado es " + resultado);
}
