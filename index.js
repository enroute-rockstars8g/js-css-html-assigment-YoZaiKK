console.log("Hello, World!");

// Solamente se va a poder reconocer a esta variable
// en donde fue declarada. Scope local.
let myLet = "";

// Var es accesible a nivel global. Scope global.
var myVar = "";

// Scope local que nunca va a cambiar.
const myConst = "";

// Cambio de tipo
myLet = 25;
myVar = 25;

// Error por reasignación a una constante
try {
    myConst = 25;
    console.log("Asignación");
} catch (e) {
    console.log("Error");
} finally {
    console.log("Siempre me voy a ejecutar");
}

{
    var varEnBloque = "Este es el mensaje";
    let letEnBloque = "Este el mensaje";
}

// Funciones

function unaTipicaFuncion() {
    let variableDeLaFuncion = "Este es el mensaje";
    var variableDeLaFuncionVar = "Este es el mensaje";
}

function myFunction() {

}

// 
const myArrowFunction = () => {};

const suma = (a, b) => {
    return a + b;
};

const resta = (a, b) => {
    return a - b;
};

const division = (a, b) => {
    return a / b;
};

const multiplicacion = (a, b) => {
    return a * b;
};

const calculator = (a, b, operacion) => {
    let result = undefined;
    switch (operacion) {
        case "suma":
            result = suma(a, b);
            break;
        case "resta":
            result = resta(a, b);
            break;
        case "division":
            result = division(a, b);
            break;
        case "multiplicacion":
            result = multiplicacion(a, b)
            break;
    }

    return result;
};

// Prototipos - Son más relax que las clases, puedes declarar los métodos fuera.
function Dog(name = "", age = "") {
    this.name = name;
    this.age = age;

    this.bark = () => {
        console.log("Uau");
    };
}

const myDog = new Dog(name = "Buster");

myDog.eat = () => {
    console.log("Eating");
}

myDog.owner = { name: "Hugo" };

console.log(`${this.name} said uau.`);
console.log(myDog.owner);
console.log(myDog.eat());

const num = 4
const numFloat = 1.23123
const charVar = "a";
const charAnotherSyntax = "\n";
const stringVar = "This is a message.\n";
const date = new Date();
const boolVar = true;

console.log(date.getFullYear());

// Arreglo es un objeto, lista, pila o cola.
const arr = [num, numFloat, charVar, charAnotherSyntax, stringVar, date, boolVar];

console.log(arr);
console.log(arr.shift()); //Cola - LIFO.
console.log(arr);

arr.forEach((element) => {
    console.log(element)
})

const modifyArr = arr.map((element) => {
    return element
})

console.log(modifyArr);

// JavaScript Object Notation - JSON

const myObject = {
    marca: "Ford",
    modelo: "Mustang",
    fechaCreacion: 2022,
    position: 0,
    velocidad: 0,
    move: () => {
        myObject.position += myObject.velocidad;
    },
    colores: ["Rojo", "Azul", "Plata"],
    partes: {
        motor: {
            cilindros: 8
        },
        puertas: 4,
    },
};

console.log(myObject);
console.log(myObject.position);
myObject.velocidad = 50
myObject.move();
myObject.move();
console.log(myObject.position);

console.log("Cilindros", myObject.partes.motor.cilindros)
const myMap = new Map();
myMap.set("primerakey", 1);
myMap.set("segundakey", "jajja");

console.log(myMap.get("segundakey"));
console.log(myMap.has("segundakey"));


function fibo() {
    console.log("Hello");
    const myParagraph = document.getElementById("fiboPara");
    let valorFibo = document.getElementById("fibo").value;
    valorFibo = fiboFun(valorFibo);
    myParagraph.innerHTML = `<b style: "text-align = center"> ${valorFibo} </b><br>`;
    document.body.appendChild(myParagraph);
    for (let index = 0; index < valorFibo; index++) {
        myParagraph.innerHTML += `<br><ul>😈</ul>`;
        document.body.appendChild(myParagraph);
    }
}

function fiboFun(n) {
    let arr = [0, 1, 1];
    if (n <= 3) {
        return arr[n - 1];
    } else {
        for (let i = 3; i < n; i++) {
            arr.push(arr[i - 1] + arr[i - 2]);
        }
        return arr[n - 1];
    }
}