//pseudo-codigo 21.00 partir el problema en problemas pequeñitos

/* Configuración de mínimo y máximo.
Cálculo del número secreto.
Pedir número al usuario.
Comprobar si el número es el número secreto:
Si lo es, tenemos ganador!
Si no lo es, damos la pista*/

import readline from 'readline';

function calculateRandomNumber (min, max) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}

const secretNumber = calculateRandomNumber(0, 100);

console.log(secretNumber);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}); //configuramos la utilidad de node para que los datos se pidan y se muestren por consola.
// esto es una forma de decirle a la utilidad de node que los datos los vamos a pedir por consola 

//tenemos que usar una herramienta que nos ofrece node para pedir numeros por consola

// nos permite hacer una pregunta por consola al usuario

// la parte asincrona es pedirle al pibe el numero

// si no pusieramos promise tendriamos que gestionar esta asincronia con callbacks


// PRODUCTOR
function getNumberFromConsole() {
    const promise = new Promise((resolve, reject) => {
        rl.question('Introduce el número: ', (num) => {
            //console.log(num)
            rl.pause();
            resolve(num)
            // si el usuario mete una letra, debemos hacer un reject
        })
    })

    return promise;
}


// CONSUMIDOR
const numberFromConsole = await getNumberFromConsole();

console.log(numberFromConsole);

