function mostrar() {
  let edad;
  //tomo la edad
  edad = document.getElementById("txtIdEdad").value;
  edad = parseInt(edad);
  if (edad >= 13 && edad <= 18) {
    alert("sos adolescente");
  }
} //FIN DE LA FUNCIÓN
