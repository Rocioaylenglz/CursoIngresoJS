function mostrar() {
  //tomo la edad  txtIdEdad
  let ingresarEdad;
  ingresarEdad = document.getElementById("txtIdEdad").value;

  if (!(ingresarEdad >= 13 && ingresarEdad <= 18)) {
    alert("no sos adolescente");
  }
} //FIN DE LA FUNCIÓN
