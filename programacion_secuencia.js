let nombre = "Juan";
let edad = 30;
let apellido = "Perez";
let numero = 10;

function sumar(a, b) {
    return a + b;
}
function restar(a, b) {
    let operacion = a - b;
    return operacion;
}

console.log("El resultado de la operacion es: " + sumar(numero, edad));
let ResultadoResta = restar(5, 7);
console.log("El resultadon de la resta es: " + ResultadoResta);
console.log("Nombre completo: " + nombre + " " + apellido + ", Edad: " + edad);