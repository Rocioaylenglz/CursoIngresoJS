/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento() {
  let sueldo;
  let resultado;
  sueldo = document.getElementById("txtIdSueldo").value;
  sueldo = parseInt(sueldo);

  resultado = (sueldo * 10) / 100 + sueldo;

  //muestro el importe
  document.getElementById("txtIdResultado").value = resultado;
}
