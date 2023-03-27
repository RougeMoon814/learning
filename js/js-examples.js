// JavaScript basic examples


//Ejemplo 1
/* console.log("EJEMPLO 1");

console.log("Hola Mundo");

let numero1 = 1;
let numero2 = 5;
let resultado = (numero1+numero2);

console.log("La suma de 1 mas 5 es: " + resultado); */


//Ejemplo 2: Evento 1

function funcion1() {
    console.log("Capturamos el evento click (externo 1)"); //esto aparecerá en la consola cuando presionemos el botón
    document.getElementById('demo1').innerHTML = "Este botón si conecta con un archivo js externo, pero parte es inline porque el <code>&lt;script&gt;</code> del JS está en el head HTML";
}
//ojo no poner "onCLick", es "onclick".
document.getElementById('boton3').onclick = function funcion3() {
    console.log("Capturamos el evento click otra vez (externo 2)"); //esto aparecerá en la consola cuando presionemos el botón
    document.getElementById('demo1').innerHTML = "Este botón conecta con un JS externo. El <code>&lt;script&gt;</code> del JS va al final del <code>&lt;body&gt;</code> HTML";
}


//Ejemplo 3: Alerta (evento)
function funcion2(){
    alert('Alerta 1: awesome click triggered');
}
document.getElementById('jstrigger2').onclick = function funcion(){
    alert('Alerta 2: amazing click triggered');
}



//Ejemplo 4: Listener

// En este caso hace override de los otros clicks. El texto se a va a cambiar cuando haga click en cualquier lado de la página.
/* document.addEventListener('click', function() {
    console.log("Hola Mundo desde EventListener");
    document.getElementById('demo1').innerHTML = "lalalalalla";
}); */

//Este no andaba pero ahora si (agregué el tag script que conecta nuestro js externo al final del body del HTML)
document.getElementById('boton2').addEventListener('click', function() {
    document.getElementById('demo1').innerHTML = "El EventListener es similar al botón anterior pero me permite tener multiples eventos de JS (por lo que es mas versatil que un onclick, por ejemplo).";
    console.log("Hola Mundo desde EventListener");
});


//Ejemplo 5: Horario

document.getElementById("hora").addEventListener("click", displayDate);
function displayDate() {
    document.getElementById("demo2").style.display = 'block';
    document.getElementById("demo2").innerHTML = " ~ " + Date() + " ~ ";
}

document.getElementById("hora-esconder").addEventListener("click", hideDate);
function hideDate() {
    document.getElementById("demo2").style.display = 'none';
}


//Ejemplo 6: Cambio de CSS (color)

document.getElementById('fondo-rojo').addEventListener("click", colorARojo);
function colorARojo() {
    document.getElementById('demo3').style.backgroundColor = '#FF0000';
}
document.getElementById('fondo-azul').addEventListener("click", colorAAzul);
function colorAAzul() {
    document.getElementById('demo3').style.backgroundColor = '#0000FF';
}
//Alternativamente puedo cambiar el color de todo el body así:
/* document.getElementById('fondo-rojo').addEventListener("click", colorARojo);
function colorARojo() {
    document.body.style.backgroundColor = '#FF0000';
} */



//Ejemplo 7: Clases e Iteradores

let colorEjemplo = document.getElementsByClassName("ejemplo");
for (let i = 0; i < colorEjemplo.length; i++) {
    colorEjemplo[i].style.backgroundColor = "yellow";
}


//Ejemplo 8: Calculadora (suma)

document.getElementById('sumar').addEventListener('click', function() {
    let numeroA = document.getElementById('numero3').value;
    console.log("valor de A es "+numeroA);

    let numeroB = document.getElementById('numero4').value;
    console.log("valor de B es "+numeroB);

    let resultado2 = sumarCalc(parseInt(numeroA), parseInt(numeroB)); //Agrego parseInt para convertir un string a un número, sino me concatena los números como si fuesen strings.Ej: let resultado2 = sumarCalc(parseInt(numeroA), parseInt(numeroB));
    console.log("resultado de la suma es "+resultado2);

    //metemos el resultado en el span
    document.getElementById('resultado2').innerHTML = resultado2;

    //alteramos el display: none del contenedor del resultado
    document.getElementById('resultadoContainer').style.display = 'block';
});

function sumarCalc(a,b){
    return a+b;
}

document.getElementById('clear').addEventListener('click', function() {
    document.getElementById('resultadoContainer').style.display = 'none';
});



//Ejemplo 9: Modal

// Get the modal
let modalLogin = document.getElementById("login-modal");

// Get the button that opens the modal
let btnLoginOpen = document.getElementById("open-modal");

// Get the button for Logoff (only visible when logged)
let btnLogoff = document.getElementById("logoff");

// Get the X that closes the modal
let closeLogin = document.getElementsByClassName("close")[0];

// Get the button that logs in the modal
let btnLoginContinue = document.getElementById("continue-login");


// When the user clicks the button, open the modal 
btnLoginOpen.onclick = function() {
modalLogin.style.display = "block";
}

// When the user clicks on X, close the modal
closeLogin.onclick = function() {
modalLogin.style.display = "none";
}

// When the user clicks on Login, close the modal
btnLoginContinue.onclick = function() {
    let userName = document.getElementById('username').value;
    let userPassword = document.getElementById('password').value;

    // Solamente hacer algo si el username (y password) no son un string vacio
    if (userName == "", userPassword == "") {} else {
    document.getElementById('user').innerHTML = userName;
    

    btnLogoff.style.display = "block";
    
    modalLogin.style.display = "none";

    console.log("Username: " + userName);
    }
}

// When the user clicks the button to Logoff
btnLogoff.onclick = function() {
    document.getElementById('user').innerHTML = "<small><i>Sin unsuario registrado</i></small>";
    btnLogoff.style.display = "none";
    }


// Ejemplo 10: Condicionales - IF (AND, OR)

/* var miVariableDePrueba1 = 6;
let miVariableDePrueba2 = "Juan"; */

// && AND, || OR, comma?
/* if (miVariableDePrueba1 > 5 && miVariableDePrueba2 == "Juan") {
    console.log("Correcto");
}
if (miVariableDePrueba1 > 5, miVariableDePrueba2 == "Juan") {
    console.log("Sipi");
}
if (miVariableDePrueba1 > 5 || miVariableDePrueba2 == "Juan") {
    console.log("OR ok");
}
var miVariableDePrueba1 = 4;
if (miVariableDePrueba1 > 5 && miVariableDePrueba2 == "Juan") {
    console.log("Correcto");
}
if (miVariableDePrueba1 > 5, miVariableDePrueba2 == "Juan") {
    console.log("Sipi");
}
if (miVariableDePrueba1 > 5 || miVariableDePrueba2 == "Juan") {
    console.log("OR ok");
} */