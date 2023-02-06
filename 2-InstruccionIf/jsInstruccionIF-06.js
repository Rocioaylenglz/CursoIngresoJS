/*Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años) 
o adolescente (entre 13 y 17 años) o niño (menor a 13 años).*/

function mostrar() {
  //tomo la edad
  let edad;
  edad = document.getElementById("txtIdEdad").value;
  edad = parseInt(edad);
  if (edad >= 18) {
    alert("sos mayor de edad");
  } else {
    if (edad >= 13 && edad <= 17) {
      alert("sos adolescente");
    } else {
      alert("sos un niño");
    }
  }
} //FIN DE LA FUNCIÓN
