// 1 Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.

const parImpar = (num) =>
  num % 2 == 0 && num != 0
    ? console.log("el n° " + num + " es par")
    : num % 2 == 1 && num != 0
    ? console.log("el n° " + num + " es impar")
    : console.log("el n° " + num + " no es par ni impar");

// 2 Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.

const numMayor = (num1, num2) =>
  num1 > num2
    ? console.log(num1 + " es mayor que " + num2)
    : num2 > num1
    ? console.log(num2 + " es mayor que " + num1)
    : console.log(num2 + " es igual que " + num1);

// 3 Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.
const mul5 = (num5) =>
  num5 % 5 == 0
    ? console.log(num5 + " es multiplo de 5")
    : console.log(num5 + " no es multiplo de 5");

// 4 Crear una función que reciba un número por parámetro e imprima por consola todos
// los números desde el 0 hasta llegar a ese número.

const impAll = (num4) => {
  let cont = num4 - num4;
  for (cont; cont <= num4; cont++) {
    console.log(cont);
  }
};

// 5 Crear una función que reciba una palabra y un número por parámetro e imprima por consola
//  esa palabra la cantidad correspondiente al número indicado.

const laPalabra = (num5, word1) => {
  for (i = 0; i < num5; i++) {
    console.log(word1);
  }
};

// 6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.

const elArray = (arra) =>
  arra.forEach((element) => {
    console.log(element);
  });

// 7 Crear una función que reciba un array con 10 números e imprima por consola todos
//los valores de ese array, menos el que se encuentre en la 5ta posición del mismo.
//Ayuda: Recuerden que el primer índice de un array es "0".

const elArray2 = (arra2) => {
  for (f = 0; f < arra2.length - 5; f++) {
    console.log(arra2[f]);
    
  }
  while (f < arra2.length) {
    f++;
    console.log(arra2[f]);
  }
  
};

//8 Crea una función que reciba un array de números y un número por parámetro
//e imprima por consola cada número del array multiplicado por el número pasado por parámetro.
const elArray3 = (arra3, num8) => {

 arra3.forEach(element => {
               console.log(`${element} x ${num8} = ` + element*num8 );  
 });

}