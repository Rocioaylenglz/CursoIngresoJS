function mostrar() {
  //tomo la edad
  let ingresarEdad;
  //tomo la edad
  ingresarEdad = document.getElementById("txtIdEdad").value;
  ingresarEdad = parseInt(ingresarEdad);
  if (ingresarEdad >= 18) {
    alert("sos mayor de edad");
  } else {
    alert("sos menor de edad");
  }
} //FIN DE LA FUNCIÓN
