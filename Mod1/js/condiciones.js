/*realizar un script que pida el usuario dos numeros 
cual de los dos numeros es mayor o identificar si 
son iguales */

 /*var nume1 = prompt("Ingrese numerero");
 var nume2 = prompt("ingrese otro numero");
 if (nume1>nume2){
     console.log("el numero mayor es ",nume1);
 }
 else if (nume1<nume2){
     console.log("el numero mayor es ",nume2);
 }
 else {
     console.log("los numeros son iguales");
 }*/

 /*ingresar por pantalla la edad de una persona
  si la persona es mayor de 18 años es mayor de 
  edad si no es menor de edad, si la edad es 
  menor o igual a 33 escribir eres milenium, 
  si es mayor o igual a 70 es anciano,si es
   mayor a 33 y menor a 70 ya no es milenium */

/*
   var numero1 = prompt("Ingrese su edad");

   if (numero1>=18 && numero1<=33){
       console.log("usted es mayor de edad");
       console.log("usted es milenium");
   }
   else if(numero1<=33){
    console.log("usted es milenium");
   }
   else if(numero1>33&& numero1<70){
       console.log("usted ya no es milenium");
   }
    else if(numero1>=70){
       console.log("usted es anciano");
   }
   else{

   }
*/

var edades = prompt("Ingrese su edad");

function calcularEdad(ed)
{
if(ed >= 18)
{
    console.log("Usted es mayor de edad");
    if(ed <= 33)
    {
        console.log("Usted es millenial",ed);
    } else if(ed >= 70)
    {
        console.log("usted es un anciano",ed);

    }else{
        console.log("Usted ya no es millenial",ed);
    }
    
}
else
{
    console.log("Usted es menor  de edad",ed);
}
}
debugger;
calcularEdad(edades);
calcularEdad(23);
calcularEdad(89);
calcularEdad(15);
calcularEdad(67);
