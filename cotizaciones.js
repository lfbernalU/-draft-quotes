// Variables útiles
var precio_base = 2000;

// Valores de los recargos
var edad_18 = 0.1; // 10%
var edad_25 = 0.2; // 20%
var edad_50 = 0.3; // 30%
var casado_18 = 0.1; // 10%
var casado_25 = 0.2; // 20%
var casado_50 = 0.3; // 30%
var hijos_recargo = 0.2; // 20%

// Recargo
var recargo_total = 0;

// Precio final
var precio_final = 0;

// Leer los datos del asegurado (nombre, edad, estado civil, edad del cónyuge, cantidad de hijos).
var nombre = prompt("Ingrese su nombre, por favor");
var edad = parseInt(prompt("¿Cuántos años tiene? Ingrese solamente números"));

var casado = prompt("¿Está casado actualmente?");

// Comprobamos la edad del cónyuge, solamente si se está casado/a
var edad_conyuge_numero = 0;
if (casado.toUpperCase() === "SI") {
  edad_conyuge_numero = parseInt(prompt("¿Qué edad tiene su esposo/a?"));
}

var hijos = prompt("¿Tiene hijos o hijas?");
// Comprobamos la cantidad de hijos solamente si los tienen
var cantidad_hijos = 0;
if (hijos.toUpperCase() === "SI") {
  cantidad_hijos = parseInt(prompt("¿Cuántos hijos tiene?"));
}

// Aquí debe calcular el recargo total basado en las respuestas ingresadas
// Aquí es donde debe calcular los recargos y el valor final
// Recargo por edad del asegurado
if (edad >= 18 && edad < 25) {
  // Calculamos el recargo en base a la edad
  recargo_total += precio_base * edad_18;
} else if (edad >= 25 && edad < 50) {
  recargo_total += precio_base * edad_25;
} else if (edad >= 50) {
  recargo_total += precio_base * edad_50;
}

// Recargo por la edad del conyuge
if (edad_conyuge_numero >= 18 && edad_conyuge_numero < 25) {
  recargo_total += precio_base * casado_18;
} else if (edad_conyuge_numero >= 25 && edad_conyuge_numero < 50) {
  recargo_total += precio_base * casado_25;
} else if (edad_conyuge_numero >= 50) {
  recargo_total += precio_base * casado_50;
}

// Recargo por la cantidad de hijos
recargo_total += precio_base * cantidad_hijos * hijos_recargo;

// Sumar los recargos calculados al precio base del plan.
precio_final = precio_base + recargo_total;

// Mostrar el resultado del nombre asegurado, el recargo total y el precio final
alert("Para el asegurado " + nombre);
alert("El recargo total será de: " + recargo_total);
alert("El precio será de: " + precio_final);
