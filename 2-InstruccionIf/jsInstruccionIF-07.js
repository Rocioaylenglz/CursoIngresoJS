/*Al ingresar una edad menor a 18 años y un 
estado civil distinto a "Soltero", 
mostrar el siguiente mensaje: 
'Es muy pequeño para NO ser soltero.'*/

function mostrar() {
  //tomo la edad
  let edad;
  let estado;
  edad = document.getElementById("txtIdEdad").value;
  edad = parseInt(edad);
  estado = document.getElementById("estadoCivil").value;
  if (edad < 18 && estado != "Soltero") {
    alert("es muy pequeño para NO ser soltero");
  }
} //FIN DE LA FUNCIÓN
