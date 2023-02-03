/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar() {
  //declaro las variables
  let nombre;
  let edad;

  //los tomo por ID
  nombre = document.getElementById("txtIdNombre").value;
  edad = document.getElementById("txtIdEdad").value;

  //los muestro (por alert) concatenados (con el +)
  alert("usted se llama " + nombre + " y tiene " + edad + " años");

  /*otra forma que simplifica código
  1. declaro otra variable más
  let resultado

 2. a resultado le pongo "usted se llama " + nombre + " y tiene " + edad + " años"

 3. en el alert le pongo el resultado, o sea, alert(resultado)
 */
}
