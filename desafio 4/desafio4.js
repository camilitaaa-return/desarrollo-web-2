//desafio 4  subido al campus, ya resuelto con anterioridad!  

//     1                         
const precioUnitario = parseFloat(prompt("Ingrese el precio unitario del producto:"));
const cantidadDeseada = parseInt(prompt("Ingrese la cantidad deseada:"));


function sumarProductos(precioUnitario, cantidadDeseada) {
    return precioUnitario * cantidadDeseada;
}

const total = sumarProductos(precioUnitario, cantidadDeseada);
alert("El total gastado es $" + total);





//ejercicio brindado en clase el 16-05 con funcion flecha  

//      2 
const boliche = (nombre, trajoDNI, edad) => {
    if (trajoDNI && edad >= 18 && edad < 30) {
        console.log(nombre + " podes pasar..!");
    } else if (edad >= 30) {
        console.log("Adelante, bienvenidx " + nombre);
    } else {
        console.log(nombre + " Tomate el palo... a casaaa");
    }
};


// Pedimos los datos al usuario
const nombre = prompt("Ingresá tu nombre:");
const edad = parseInt(prompt("Ingresá tu edad:"));
const trajoDNI = prompt("¿trajiste DNI? (si/no):")


boliche(nombre, trajoDNI, edad); /* si o si tengo que llamar a la funcion con los datos que solicito,
 claramente me va a mostrar los que ingrese como"usuarix"*/