//Variables utiles 
//Precio base de la cotización, en quetzales, lo puede cambiar
var precio_base = 2000;
//Valores de los recargos 
var edad_18 = 0.1; // 10%
var edad_25 = 0.2; // 20%
var edad_50 = 0.3; // 30%
var casado_18 = 0.1; // 10%
var casado_25 = 0.2; // 20%
var casado_50 = 0.3; // 30%
var hijos_recargo = 0.2; // 20%
//Recargo
var recargo = 0;
var recargo_total = 0;
//Precio final 
var precio_final = 0;

//bucle
var cotizacion = prompt("Desea realizar cotizacion?", "SI/Salir")
while (cotizacion.toUpperCase()!= "SALIR") {

  //Mensajes de alerta para ingresar datos principal
  var nombre = prompt("Ingrese su nombre, por favor");
  var edad = parseInt(prompt("¿Cuantos años tiene?, Ingrese solamente números"));
  if (edad <= 17) {
    alert(nombre + ", lamentablemente no califica para cotizacion");
  } else if (edad >= 18) {
    var casado = prompt("¿Está casado actualmente?", "SI/NO");
  }
  //Comprobamos la edad del cónyuge, solamente si se está casado/a
  var edad_conyuge;
  if (casado.toUpperCase() == "SI") {
    edad_conyuge = parseInt(prompt("¿Que edad tiene su espos@?"));
  }
  //Comprobamos la cantidad de hijos solamente si los tienen
  var cantidad_hijos = 0;
  if (prompt("¿Tiene hijos o hijas?", "SI/NO").toUpperCase() == "SI") {
    cantidad_hijos = parseInt(prompt("Cuantos hijos tiene?"));
  }
  //Aquí debe calcular el recargo total basado en las respuestas ingresadas
  //Aquí es donde debe de calcular los recargos y el valor final
  //Ejemplo (Debe completar los condicionales): Recargo por edad del asegurado 
  if (edad >= 18 && edad < 25) {
    //Calculamos el recargo en base a la edad 
    recargo = precio_base * edad_18;
    //Sumamos todos los recargos que hemos obtenido
    recargo_total += recargo;
  }
  //Recargo edad principal
  else if (edad >= 25 && edad < 50) {
    recargo = precio_base * edad_25;
    recargo_total += recargo;
  } else if (edad >= 50) {
    recargo = precio_base * edad_50;
    recargo_total += recargo;
  }
  //Recargo edad conyuge
  if (edad_conyuge >= 18 && edad_conyuge < 25) {
    recargo = precio_base * casado_18;
    recargo_total += recargo;
  } else if (edad_conyuge >= 25 && edad_conyuge < 50) {
    recargo = precio_base * casado_25;
    recargo_total += recargo;
  } else if (edad_conyuge >= 50) {
    recargo = precio_base * casado_50;
    recargo_total += recargo;
  }
  //Recargo hijos 

  if (cantidad_hijos >= 1); {
    recargo = (precio_base * hijos_recargo) * cantidad_hijos
    recargo_total += recargo;
  }
  //Recargo propiedades
  var cantidad_propiedades = 0;
  if (prompt("¿Tiene propiedades?", "SI/NO").toUpperCase() == "SI") {
    cantidad_propiedades = parseInt(prompt("Cuantas propiedades tiene?"));
  }
  if (cantidad_propiedades >= 1); {
    recargo = (precio_base * 0.35) * cantidad_propiedades
    recargo_total += recargo;
  }
  //Recargo Salario
  var recargo_salario = 0;
  if (prompt("¿Esta trabajando actualmente?", "SI/NO").toUpperCase() == "SI") {
    recargo_salario = parseInt(prompt("Cual es su salario?"));
  }
  if (recargo_salario >= 1); {
    recargo = (recargo_salario * 0.05);
    recargo_total += recargo;
  }

  precio_final = (precio_base + recargo_total);

  alert(" Para el asegurado " + nombre + " el recargo total sera de " + recargo_total);
  alert(" El precio final sera de: " + precio_final);
cotizacion = prompt("Desea realizar otra cotizacion?", "SI/Salir");
}
