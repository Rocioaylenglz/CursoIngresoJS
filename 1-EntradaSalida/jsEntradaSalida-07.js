/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/
function sumar() {
  let numeroUno;
  let numeroDos;
  let sumar;

  numeroUno = document.getElementById("txtIdNumeroUno").value;
  numeroDos = document.getElementById("txtIdNumeroDos").value;

  //los transformo en parseInt
  numeroUno = parseInt(numeroUno);
  numeroDos = parseInt(numeroDos);

  //luego de transformarlos en parseInt puedo sumar
  sumar = numeroUno + numeroDos;

  alert("La suma es " + sumar);
}

//txtIdNumeroUno
//txtIdNumeroDos

function restar() {
  let numeroUno;
  let numeroDos;
  let restar;

  numeroUno = document.getElementById("txtIdNumeroUno").value;
  numeroDos = document.getElementById("txtIdNumeroDos").value;

  // parseInt
  numeroUno = parseInt(numeroUno);
  numeroDos = parseInt(numeroDos);
  //resto
  restar = numeroUno - numeroDos;
  //muestro
  alert("La resta es " + restar);
}

function multiplicar() {
  let numeroUno;
  let numeroDos;
  let multiplicar;

  //Id

  numeroUno = document.getElementById("txtIdNumeroUno").value;
  numeroDos = document.getElementById("txtIdNumeroDos").value;

  //parseInt
  numeroUno = parseInt(numeroUno);
  numeroDos = parseInt(numeroDos);
  //multiplico
  multiplicar = numeroUno * numeroDos;
  alert("La multiplicación es " + multiplicar);
}

function dividir() {
  let numeroUno;
  let numeroDos;
  let dividir;
  //Id

  numeroUno = document.getElementById("txtIdNumeroDos").value;
  numeroDos = document.getElementById("txtIdNumeroDos").value;

  // parseInt

  numeroUno = parseInt(numeroUno);
  numeroDos = parseInt(numeroDos);
  // divido

  dividir = numeroUno / numeroDos;

  //resultado en alert
  alert("La división es " + dividir);
}
