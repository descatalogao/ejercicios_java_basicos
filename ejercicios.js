// Ejercicio 1

// 1.1 Define tu superhéroe favorito
let miSuperheroeFavorito = "superman";
console.log(miSuperheroeFavorito);
//1.2 Define un número
const numeroFavorito= 20;
console.log(numeroFavorito);
// Altura y longitud.
const aheight = 5;
const alength = 10;
// Sumar valores.
const sum = aheight + alength;
//Imprimir resultado
console.log(sum);


//Ejercicio 2.1
const jedi = {nombre: "Luke Skywalker", edad: 19};

// Tu código para cambiar la edad aquí...
jedi.edad=25;
console.log(jedi.edad);


//Ejercicio 2.2
const leia = {
nombre3: "Leia",
apellido3: "Organa",
edad3: "20",
}
console.log("Soy " + (leia.nombre3) + " "+ (leia.apellido3) + ", tengo " + (leia.edad3) + " años y soy una princesa de Alderaan.")

//Ejercicio 2.3
const sable1 = {nombre: "Shoto de Yoda", precio: 1500};
const sable2 = {nombre: "Sable de Darth Vader", precio: 2000};
// Tu código para calcular el precio total aquí...
const sumasables= sable1.precio +sable2.precio;
console.log(sumasables);


//Ejercicio 2.4
let precioBaseGlobal = 10000;

// Cambia el precio base en esta linea modificando la variable
precioBaseGlobal= 25000;
const nave1 = {nombre: "Ala-X", precioBase: 50000, precioFinal: 60000};
const nave2 = {nombre: "Halcón Milenario", precioBase: 70000, precioFinal: 80000};

// Tu código para actualizar el precio final de cada nave aquí...
nave1.precioBase = precioBaseGlobal+nave1.precioBase;
nave2.precioBase = precioBaseGlobal+nave2.precioBase;

nave1.precioFinal = nave1.precioBase + 10000;
nave2.precioFinal = nave2.precioBase + 10000;

// console.log(nave1.precioFinal);
// console.log(nave2.precioFinal);



//Ejercicio 3

// 3.1 Multiplica 10 por 5 y muestra el resultado mediante console.
var num1= 10*5;
console.log(num1);
// 3.2 Divide 10 por 2 y muestra el resultado en un console.
var num1= 10/2;
console.log(num1);
// 3.3 Muestra mediante un console el resto de dividir 15 por 9.
var num1= 15%9;
console.log(num1);
// 3.4 Usa el correcto operador de asignación que resultará en o = 15,
// teniendo dos variables p = 10 y j = 5.
p=10;
j=5;
o=p+j;
console.log(o);
// 3.5 Usa el correcto operador de asignación que resultará en i = 50
// teniendo dos variables c = 10 y m = 5.
c=10;
m=5;
i=c*m;
console.log(i);


// Ejercicio 4

//Dado el siguiente array:
const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];
//4.1 - Saca a "Tendo" por consola atacando su posición.
console.log(aldeanos[3]);
//4.2 - Coloca en el último lugar de este array a "Cervasio".
aldeanos.push("Cervasio");
//4.3 - Cambia el primer elemento de este array por "Bambina".
aldeanos[0]="Bambina";
//4.4 - Dale la vuelta a este array.
aldeanos.reverse();
//4.5 - Cambia a "Narciso" por "Canela" haciendo uso de un método de array.
aldeanos[1]="Canela";
//4.6 - Imprime por consola el último elemento de este array sin atacar a la posición explicitamente
console.log[aldeanos.length];
// Pista: puedes usar el método length con algo más para ello.



// Ejercicio 5
const number1 = 10;
const number2 = 20;
const number3 = 2;

// ejemplo
if(number1 === 10){
    console.log('number1 es estrictamente igual a 10')
}

if (number2/number1 == 2) {
  console.log("number2 dividido entre number1 es igual a 2");
}

if (number1 !== number2) {
  console.log("number1 es estrictamente distinto a number2");
}

if (number3 != number1) {
  console.log("number3 es distinto number1");
}

if (number3*5 == number1) {
  console.log("number3 por 5 es igual a number1");
}

if (number3 * 5 == number1 && number1 * 2 == number2) {
  console.log("number3 por 5 es igual a number1 Y number1 por 2 es igual a number2");
}

if (number2/2 == number1 || number1/5 == number3) {
  console.log("number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3");
}



//Ejercicio 6
// 1.1 Crea un bucle for que vaya desde 0 a 9 y muestra el valor de i por consola.
for (let i=0; i<0; i++){
    console.log(i);
}
// 1.2 Crea un bucle for que vaya desde 0 a 9 y muestra el valor de i por consola solo 
// cuando el resto del numero dividido entre 2 sea 0.
for(let i=0; i<10; i++){
    if(i%2 === 0){
        console.log(i);
    }
}
// 1.3 Crea un bucle para conseguir dormir contando ovejas. 
// Este bucle tiene que dar 10 vueltas, es decir, 10 console.log.
// Muestra por consola un mensaje diciendo 'Intentando dormir 🐑' en cada vuelta del bucle 
// y cambia el mensaje en la décima vuelta a '¡Dormido!'.
for(let i=0; i<10; i++){
    if(i === 9){
        console.log("Dormido");
    } else {
        console.log("Intentando dormir 🐑");
    }
}

//Ejercicio 7
function greaterNumber(numberOne , numberTwo) {
    if(numberOne > numberTwo){
        console.log(numberOne);
    } else {
        console.log(numberTwo);
    }
}


//Ejercicio 8
const avengers = ['Hulk', 'Thor', 'Iron Man', 'Captain A.', 'Spiderman', 'Captain M.'];

function findLongestWord(stringList) {
  let longestWord="";
  for(const word of stringList){
    if(word.length>longestWord.length){
        longestWord=word;
    }
  }
  console.log(longestWord)
}

findLongestWord(avengers);

//Ejercicio 9
const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumNumbers(numberList) {
    total=0;
    for (const number of numberList){
    total= total + number;
    }
    console.log(total)
}
sumNumbers(numbers);

//Ejercicio 10
const numbers2 = [12, 21, 38, 5, 45, 37, 6];
function average(numberList) {
    total=0;
    for (const number of numberList){
    total= total + number;
    }
    total= total/numberList.length;
    console.log(total)
}
average(numbers2);

//Ejercicio 11
const mixedElements = [6, 1, 'Marvel', 1, 'hamburguesa', '10', 'Prometeo', 8, 'Hola mundo'];
function averageWord(array) {
    total=0;
    for (element of array){
        if (typeof element === 'string'){
            element = element.length;
            total= total + element;
        } else {
            total= total + element;
        }
}
    console.log(total);
}

averageWord(mixedElements);


//Ejercicio 12
const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potato',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];

  function removeDuplicates(array) {
    const newArray = [array[0]];
    for (word of array){
     var dupe= false
        for (filteredword of newArray){
            if (word === filteredword){
             var dupe= true
            }
        }
     if (dupe === false){
        newArray.push(word)
    }
    }
    console.log(newArray);
  }

removeDuplicates(duplicates);


//Ejercicio 13

const names = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
  function nameFinder(array, keyname) {
    var isname = false;
    for (nombre in array){
        if (array[nombre] === keyname){
            var isname = true;
        }
    }
    console.log(isname)
  }

  nameFinder(names,'Aitor')

  //Ejercicio 14

  const words = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code'
  ];
  function repeatCounter(array) {
    for (word of array){
        let count=1
        newArray = array
        delete newArray[newArray.indexOf(word)];
        for (fltword of newArray){
            if (fltword===word){
                count++;
                delete newArray[newArray.indexOf(word)];
            }
        }
        if (typeof(word) === 'string'){
            console.log(word)
            console.log(count)
        }

    }

}

repeatCounter(words);

//Ejercicio 15

const products = ['Camiseta de Metallica', 'Pantalón vaquero', 'Gorra de beisbol', 'Camiseta de Basket', 'Cinturón de Orión', 'AC/DC Camiseta']
for (product of products){
    if (product.includes("Camiseta")){
        console.log(product);
    }
}

//Ejercicio 16
const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar']

for (place of placesToTravel){
    console.log((place)+" ya está visto");
}

//Ejercicio 17

const alien = {
    name: 'Xenomorph',
    species: 'Xenomorph XX121',
    origin: 'Unknown',
    weight: 180
};

for (i in alien){
    console.log(("La propiedad ")+(i)+(" tiene como valor: ")+(alien[i]));
}

//Ejercicio 18

const placesToTravel2 = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'}, {id: 40, name: 'Santander'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}]


for (i in placesToTravel2){
    if((placesToTravel2[i].id) === 11 || (placesToTravel2[i].id) === 40){
        delete placesToTravel2[i];
    }
}
console.log(placesToTravel);


//Ejercicio 19

const toys = [
    {id: 5, name: 'Transformers'}, 
    {id: 11, name: 'LEGO'}, 
    {id: 23, name: 'Hot Wheels'}, 
    {id: 40, name: 'Rescador de gato'},
    {id: 40, name: 'FurReal Friends gato interactivo'},
    {id: 60, name: 'Nerf Blaster'},
    {id: 71, name: 'Sylvanian Families - Familia gato'}
];

for (word of toys){
    console.log(word.name)
    if((word.name).includes("gato")){
        delete toys[toys.indexOf(word)];
    }
}
console.log(toys)

//Ejercicio 20

const popularToys = []

const toys2 = [
    {id: 101, name: 'Super Soaker', sellCount: 15},
    {id: 102, name: 'Tamagotchi', sellCount: 22},
    {id: 103, name: 'Polly Pocket', sellCount: 8},
    {id: 104, name: 'Yo-yo', sellCount: 33},
    {id: 105, name: 'Pikachu plush toy', sellCount: 19},
    {id: 106, name: 'Rubik\'s Cube', sellCount: 27},
    {id: 107, name: 'Fidget Spinner', sellCount: 12},
    {id: 108, name: 'Slinky', sellCount: 5},
    {id: 109, name: 'Magic 8-Ball', sellCount: 38},
    {id: 110, name: 'Troll Doll', sellCount: 20}
];


newArray=[];
for (toy of toys2){
    console.log(toy.sellCount);
    if ((toy.sellCount)>15){
        newArray.push(toy);
    }
}
console.log(newArray)

//Ejercicio 21

const users = [
    { name: "Tony", years: 43 },
    { name: "Peter", years: 18 },
    { name: "Natasha", years: 14 },
    { name: "Bruce", years: 32 },
    { name: "Khamala", years: 16 },
  ];

mayores=[];
menores=[];

for (user of users){
    if ((user.years)>18){
        mayores.push(user.name);
    } else {
        menores.push(user.name);
    }
}
console.log("Usuarios mayores: "+(mayores));
console.log("Usuarios menores: "+(menores))

//Ejercicio 22

const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foods = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

for (food of foods){
if (food.isVegan === false){
    food.name = fruits[foods.indexOf(food)];
}
}
console.log(foods)

//Ejercicio 23

const movies = [
    { name: "Un cortito", durationInMinutes: 90 },
    { name: "Titan A.E.", durationInMinutes: 130 },
    { name: "Nightmare before Christmas", durationInMinutes: 225 },
    { name: "Inception", durationInMinutes: 165 },
    { name: "The Lord of the Rings", durationInMinutes: 967 },
    { name: "Star Wars: A New Hope", durationInMinutes: 214 },
    { name: "Terminator", durationInMinutes: 140 },
    { name: "Spirited Away", durationInMinutes: 125 },  
    { name: "The Matrix", durationInMinutes: 136 },  
    { name: "Amélie", durationInMinutes: 110 },  
    { name: "Eternal Sunshine of the Spotless Mind", durationInMinutes: 108 },
  ];
  
  pelispequenas=[];
  pelismedianas=[];
  pelislargas=[];

  for (movie of movies){
    console.log(movie.durationInMinutes);
    if((movie.durationInMinutes)<100){
        pelispequenas.push(movie.name);
    } else if((movie.durationInMinutes)>200){
        pelislargas.push(movie.name);
    } else {
        pelismedianas.push(movie.name);
    }
  }
  console.log("Pelis cortas:");
  console.log(pelispequenas);
  console.log("Pelis medias:");
  console.log(pelismedianas);
  console.log("Pelis largas:");
  console.log(pelislargas);

