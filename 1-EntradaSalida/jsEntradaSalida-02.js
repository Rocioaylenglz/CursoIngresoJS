/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar() {
  // 1. genero un espacio de memoria (variable) y le guardo un valor (asignación)
  let nombre; // genero la variable

  //nombre= "rocio"; // asignación de string
  nombre = prompt("ingrese su nombre");

  //mostrar por alert
  alert(nombre);
}
