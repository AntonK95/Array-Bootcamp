/* 1 */
/* Gör en array som innehåller 5 st olika frukter av datatypen string. */
/* let fruits = ['Apple', 'Orange', 'Banana', 'Kiwi', 'Pear'];
console.log(fruits); */

/* 2 */
/* Gör en array som innehåller 3 olika datatyper, ex. string, number, array. */
/* let mixedArray = ['Detta är en string', 5, ['Hund']];
console.log(mixedArray); */

/* 3 */
// let animals = ['cat', 'hamster', 'parrot', 'funky chihuahua']
/* console.log() hur många objekt arrayen ovan innehåller. 
console.log(animals.length);*/

/* 4 */
/* let animals = ['cat', 'hamster', 'parrot', 'funky chihuahua']
// I arrayen ovan, hämta cat. 
console.log(animals[0]); */

/* 5 */
/* let animals = ['cat', 'hamster', 'parrot', 'funky chihuahua']
// I arrayen ovan, hämta funky chihuahua. 
console.log(animals[3]); */

/* 6 */
/* let animals = ['cat', 'hamster', 'parrot', 'funky chihuahua'] */
// I arrayen ovan, byt ut hamster mot tiger.
/* animals[1] = 'tiger';
console.log(animals); */
// En mer komplicerad metod till att byta ut hamster mot tiger är att söka efter det index som innehåller order 'hamster'.
/* let indexToReplace = animals.indexOf('hamster'); 

if(indexToReplace !== -1) {
    animals[indexToReplace] = 'tiger';
} else {
    console.log('Det sökta ordet finns inte i arrayen')
}

console.log(animals); */

/* 7 */
/* let a = [1,2,3];
let b = [4,5,6];
let c = [7,8,9]; */
/* Sätt ihop ovanstående arrayer. */
/* let numbers = a.concat(b,c); // .concat() sätter ihop två eller fler arrayer


console.log(numbers); */

/* 8 */
/* let a = [1,2,3,7,8,9];
let b = [4,5,6]; */
/* Merga in array b på index 3 i array a.. */
/* a.splice(3, 0, ...b); // a.splice(index, 0, ...b);

console.log(a);  */

/* 9 */
/* let arr = ['a', 'b', 'c']; */
/* Klona ovanstående array. */

/* let abc = arr.slice();
console.log(abc, arr); */

/* 10 */
/* let fruits = ['kiwi', 'apple', 'pear']; */
/* Lägg till en frukt i slutet av arrayen ovan. */


/* fruits.push('orange'); // .push() lägger till element i slutet av en array, .unshift() i början.

console.log(fruits); */

// Alternativ lösning för att behålla orginal arrayen fruits som den är
/* let fruits = ['kiwi', 'apple', 'pear'];

let fruit = ['orange']; */

// Använd spread operator (...) för att lägga till elementen från fruit i slutet av fruits
/* let basket = [...fruits, ...fruit];

console.log(basket); */



/* 11 */
/* let fruits = ['kiwi', 'apple', 'pear']; */
/* Lägg till en frukt i början av arrayen ovan. */
/* fruits.unshift('banana'); // .unshift() fungerar på samma sätt som .push() fast lägger till elementen i början av en array.

console.log(fruits); */

/* 12 */
/* let fruits = ['kiwi', 'apple', 'pear']; */
/* I arrayen ovan, ta bort sista frukten i arrayen. */
/* fruits.pop(); // .pop() tar bort det sista elementet ur en array

console.log(fruits); */
// Nedan är ett sätt att logga vilken frukt/element som tas bort
/* let removedFruit = fruits.pop();
console.log(removedFruit);
console.log(fruits);*/

/* 13 */
/* let fruits = ['kiwi', 'apple', 'pear']; */
/* I arrayen ovan, ta bort första frukten i arrayen. */

/* fruits.shift(); // .shift() tar bort det första elementet i en array
console.log(fruits); */

// Nedan är ett sätt att logga vilken frukt/element som tas bort
/* let removedFruit = fruits.shift();
console.log(removedFruit);
console.log(fruits); */

/* 14 */
/* let fruits = ['kiwi', 'apple', 'pear']; */
/* Sätt in en frukt i arrayen ovan på index 1. */
/* let fruit = 'banana'
fruits.splice(0, 0, fruit);
console.log(fruits); */

/* 15 */
/* let fruits = ['kiwi', 'apple', 'pear']; */
/* Sätt in tre frukter i arrayen ovan på index 2. */
/* let basket = ['banana', 'orange', 'cherry'];
fruits.splice(2, 0, ...basket);
console.log(fruits); */

/* 16 */
/* let names = ['David', 'Christoffer', 'Johan', 'Maja'] */
/* I arrayen ovan, ta bort Christoffer och Johan. */
/* let updatedNames = names.filter(name => name !== 'Christoffer' && name !== 'Johan');

if(updatedNames.length !== names.length) {
    console.log('Namn borttaget');
    updatedNames.forEach(name => console.log(name));
} else {
    console.log(updatedNames)
} */


/* 17 */
/* let nums = [1,2,3,4,5,6,7,8,9]; */
/* Spegelvänd på arrayen ovan. */
/* nums.reverse(nums)
console.log(nums); */

/* 18 */
/* let str = 'Supercalifragilisticexpialidocious'; */
/* Kika om strängen ovan innehåller bokstaven n. */ //str.includes('valdBokstav')


/* if(str.includes('n')) {
    console.log('Bokstaven n finns  med i listan');
} else {
    console.log('Bokstaven n finns inte med i listan');
} */


/* 19 */
/* let str = 'Supercalifragilisticexpialidocious'; */
/* Kika om strängen ovan innehåller bokstaven x. */
/* 
if(str.includes('x')) {
    console.log('Bokstaven x finns med i listan!')
} else {
    console.log('Bokstaven x finns inte med i listan...')
} */

// Ett sätt att lösa uppgiften med funtioner så man inte behöver skriva om if-satsen varje gång

/* function checkLetter(string, letter) {
    if(string.includes(letter)) {
        console.log(`Bokstaven ${letter} finns med i listan!`)
    } else {
        console.log(`Bokstaven ${letter} finns inte med i listan...`)
    }
}
 */
/* let str = 'Supercalifragilisticexpialidocious';

checkLetter(str, 'x'); // Anropar funktionen
checkLetter(str, 'n'); // Anropar funktionen */

// Om vi vill att användare skall kunna välja sträng och bokstav att söka efter
/*  let str = window.prompt('Skriv ett ord eller faceplanta på tangentbordet');
 let letter = window.prompt('Vilken bokstav vill du att vi letar efter?');

 checkLetter(str, letter);
 */

 
/* 20 */
/* let str = 'Supercalifragilisticexpialidocious'; */
/* I ovanstående sträng, hitta vilket position första förekomsten av p har. */
/* let findIndex = str.indexOf('p');

console.log(findIndex); */

/* 21 */
/* let str = 'Supercalifragilisticexpialidocious'; */
/* I strängen ovan, plocka fram de 5 första tecknena. */
/* let firstFive = str.substring(0, 5);

console.log(firstFive); */

/* 22 */
/* let str = 'Supercalifragilisticexpialidocious'; */
/* I strängen ovan, plocka fram de 7 sista tecknena. */
/* let lastSeven = str.slice(-7);

console.log(lastSeven); */

/* 23 */
/* let numArray = [23, 45, 5, 62, 1, 21, 3, 54]; */
/* I arrayen ovan, filtera fram alla nummer över 5. Tips: Läs dokumentationen för filter() */
/* let higherThanFive = numArray.filter(function(number) {
    return number > 5;
});
console.log(higherThanFive); */

/* 24 */
/* let numArray = [23, 45, 5, 62, 1, 21, 3, 54]; */
/* I arrayen ovan, filtera fram alla nummer under 5. Tips: Läs dokumentationen för filter() */
/* let lowerThanFive = numArray.filter(function(number){
    return number < 5; // Vill vi även skriva ut 5an så anvönder vi return number <= 5; Där kan man säga att vi säger mindre ELLER lika med 5
});
console.log(lowerThanFive); */

/* 25 */
/* Skriv ut alla namn som är 18 år eller över från arrayen längst ner i dokumentet. */
/* function(person) { ... } där ... är koden som bestämmer om person är 18 år eller äldre.  */



/* 26 */
/* Skriv ut alla namn som är under 18 år från arrayen längst ner i dokumentet. */
// console.log('Uppgift 26');

/* 27 */
/* let arr = ['beta', 'alfa', 'gamma']; */
/* Sortera ovanstående array alfabetisk. Tips: Läs dokumentattionen för sort() */
console.log('Uppgift 27');

/* 28 */
/* let nums = [1,5,7,9,3,4,2,6,8]; */
/* Sortera ovanstående array numeriskt. */
console.log('Uppgift 28');

/* 29 */
/* I person-arrayen längst ner i dokumentet, sortera objekten efter ålder, yngst först. */
console.log('Uppgift 29');

/* 30 */
/* I person-arrayen längst ner i dokumentet, sortera objekten efter ålder, äldst först. */
console.log('Uppgift 30');

/* 31 */
/* I person-arrayen längst ner i dokumentet, sortera objekten i bokstavsordning efter deras namn */
console.log('Uppgift 31');

/* 32 */
/* I person-arrayen längst ner i dokumentet, gör om alla namn till versaler. */
console.log('Uppgift 32');

/* 33 */
/* I person-arrayen längst ner i dokumentet, spegelvänd alla namn. */
console.log('Uppgift 33');

/* 34 */
/* let fruits = ['apelsin', 'päron', 'äpple', 'kiwi']; */
/* Loopa ut följande array med en forEach()-loop. console.log() varje ord. */
console.log('Uppgift 34');

/* 35 */
/* let fruits = ['apelsin', 'päron', 'äpple', 'kiwi']; */
/* Loopa ut följande array med en for of-loop. console.log() varje ord. */
console.log('Uppgift 35');

/* 36 */
/* let fruits = ['apelsin', 'päron', 'äpple', 'kiwi']; */
/* Loopa ut följande array med en for-loop. console.log() varje ord. */
console.log('Uppgift 36');

/* 37 */
/* let fruits = ['apelsin', 'päron', 'äpple', 'kiwi']; */
/* Loopa ut följande array. För varje varv i loopen ska du också skriva ut index. ex: */
/* 0 - apelsin */
/* 1 - päron */
/* 2 - äpple */
/* osv... */
console.log('Uppgift 37');



//Array innehållandes flera objekt
let persons = [
    {
        name: "Felicia",
        age: 12
    },
    {
        name: "Pelle",
        age: 20
    },
    {
        name: "Peter",
        age: 59
    },
    {
        name: "Anna",
        age: 32
    },
    {
        name: "Jocke",
        age: 18
    },
    {
        name: "Ella",
        age: 3
    }
]
/* I arrayen ovan som heter persons har vi flera element.
    Varje element är ett objekt som representerar en person där
    alla har två egenskaper: name och age. */


    /* Här använder vi .filter() metoden på persons arrayen.
    filter tar en funktion som argument, och den funtionen kallas 
    på varje element i arrayen. Om funtionen returnerar true,
    kommer elementet att vara med i den nya arrayen som filter skapar.
    I det här fallet är funtionen
    function(peron){ return person.age >= 18; }
    vilket betyder att det skapas en ny attay med bara de personer som är 18 eller äldre. 
    
    Hur man använder .filter() eller .forEach():
    variabel.filter(function(nyVariabel){
        kod att uföra;
    }); */
/* 25 */
/* let adults = persons.filter(function(person) {
    return person.age >= 18;
}); */

// console.log(adults);

/* Här använder vi .forEach() metoden på adults arrayen.
    Precis som .filter(), tar .forEach() en funtion som argument
    och kallar på den på varje element i arrayen.
    Skillnaden är att .forEach() inte skapar en ny array,
    istället gör den något med varje element direkt.
    I detta fallet loggar vi varje vuxen person till konsolen. */

/* adults.forEach(function(person) {
    console.log(person);
}); */
/* 26 */
/* let underAge = persons.filter(function(person) {
    return person.age < 18;
});

underAge.forEach(function(person) {
    console.log(person);
}); */