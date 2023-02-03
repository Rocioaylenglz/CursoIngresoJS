/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar() {
  //declaro las variables
  let numeroUno;
  let numeroDos;
  let resultado;

  //los tomo por ID
  numeroUno = document.getElementById("txtIdNumeroUno").value;
  numeroDos = document.getElementById("txtIdNumeroDos").value;

  //como son números, necesito convertirlos en parseInt
  numeroUno = parseInt(numeroUno);
  numeroDos = parseInt(numeroDos);

  resultado = numeroUno + numeroDos;

  // los muestro por alert
  alert("La suma es " + resultado);
}
