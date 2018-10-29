//Pedir datos por teclado 
/*
var nombre = prompt("Ingrese su nombre");
console.log(nombre);
alert(nombre);
*/
//** Variables numércias */
var num = 5;
console.log("num",num);

//** Variables de texto */
var palabras = "palabras";
console.log("palabras",palabras);

//** Variables booleanas */

var activo = true;
console.log("activo",activo);

//** Variables tipo arreglo */
var colores = ["red","cyan",activo,num];
console.log("colores",colores);

//**Variables tipo objeto u object */
var vehiculo = {
            tipo:"Automovil",
            modelo:2018,
            usado:true
};
console.log("vehiculo",vehiculo);
console.log("tipo de vehiculo",vehiculo.tipo);

var nombre = "Juliana";
console.log("nombre",nombre);
nombre = true;
console.log("nombre",nombre);
nombre = 20;
console.log("nombre",nombre);

// ** Diferencias entre var y let

var apellido="Lola";
console.log("Apellido", apellido);
apellido=14;
console.log("apellido Numerico", apellido);
if(true){
    apellido="Pinches";
    console.log("Apellido dentro del if", apellido);

}
console.log("Apellido fuera del if", apellido);

var cantidad=34;
console.log("Cantidad Num", cantidad);
if(true){
    let cantidad=69;
    console.log("Cantidad dentro del if", cantidad);
}

console.log("Cantidad fuera del if", cantidad);


//** constantes */

const edad1= 20;
console.log("constantes edad",edad1);
//**edad = 35;
//console.log("constantes edad",edad); 

//**concatenacion de variables */

var anio = 2018;
var promedio = "25";
console.log("la concatenacion de "+anio+" y "+promedio+" es ",anio+ Number(promedio));
let numero1 = 25;
let numero2 = 40;
console.log("la concatenacion es " ,String (numero1)+ String(numero2));

//** ventanas */ 
//** alertas */
alert("la concatenacion es " +String (numero1)+ String(numero2));
//** prompt */
var modelo = prompt("el modelo del carro es",0);
//** conf */
var conf = confirm ("desea salir de la app");
console.log("confirmacion",conf);