import "./styles.css";

console.log("Hello world");

var a = 9; // in-line comment , this variable can be changed
/* this is a milti-line
comment*/
var b = 10;
var c = "I am a ";
console.log(a * b);

a = a + 1;
b = b + 5;
c = c + "String!";
console.log(a, b, c);
var properCamelCase;
var studlyCapVar;
var tittleCaseOver;
studlyCapVar = "A String";
tittleCaseOver = 9000;
properCamelCase = 12;
console.log(properCamelCase, studlyCapVar, tittleCaseOver);
var sum = 10 + 10;
console.log(sum);
var difference = 10 - 3;
console.log(difference);
var quotient = 9 / 2;
console.log(quotient);
var myVar = 11;

myVar--;
console.log(myVar);
myVar++;
console.log(myVar);
var myDecimal = 0.009;
var ourDecimal = 3.45;
console.log(myDecimal, ourDecimal);
var product = 9 * 10;
console.log(product);

var remainder;
remainder = 11 % 3;
console.log(remainder);

var z = 2;
var d = 5;

z += 4;
console.log(z);
d -= z;
console.log(d);
z *= d;
console.log(z);

var r = 3;
r /= 2;
console.log(r);
var stupidKid = 'He bosted about his kid and don\'t realized he was "retarded"';
console.log(stupidKid);
var stream = 'I can use single quotes!! "excited"';
console.log(stream);
var myString =
  '<a href="https://www.youtube.com/watch?v=PkZNo7MFNFg" target="_black">Link</a>';
console.log(myString);
var newString = "Learning and having \nfun";
console.log(newString);
var stunningDress = "Shopping \ris not \falways fun";
console.log(stunningDress);
var codeSpin = "Blablabla is \tnot a \btoy";
console.log(codeSpin);
var myStr = "First line\n\t\\Second line\nThird line";
console.log(myStr);
var ourStr = "I come first";
ourStr += " I come second";
console.log(ourStr);
var myStri = "First sentence ";
myStr += "Second sentence";
console.log(myStri);
var myName = "Olga";
var mySecondStr = "Hello " + myName + " I know you!";
console.log(mySecondStr);
var worthy = "wothwhile.";
var badBear = "Reading is ";
badBear += worthy;
console.log(badBear);

var nameLia = "Lia";
var nameLiaLength = 0;
nameLiaLength = nameLia.length;
console.log(nameLiaLength);
var firstLetterOfANoun = "";
var name = "Tiger";
firstLetterOfANoun = name[3];
console.log(firstLetterOfANoun);
var firstName = "Alejandro";
var firstNameLenght = firstName[firstName.length - 1];
console.log(firstNameLenght);
var nameSis = "Ruxandra";
var nameSisLastLetter = nameSis[nameSis.length - 3];
console.log(nameSisLastLetter);

function worldBlanks(myNoun, myAdjective, myAdverb, myVerb) {
  var result = "";
  result = "The " + myNoun + " " + myAdverb + " " + myAdjective + " " + myVerb;
  return result;
}
console.log(worldBlanks("cat", "red", "quite", "passed out."));

function worldBlank(fruit, object, number, verb, noun) {
  var result = "";
  result +=
    "The " +
    fruit +
    " " +
    verb +
    " from the " +
    object +
    " because " +
    noun +
    " that was " +
    number +
    " touched it.";
  return result;
}
console.log(worldBlank("apple", "table", "nine", "felt", "Anna"));

console.log(worldBlank("banana", "chair", "twenty", "run", "Bea"));

var ourArray = ["Anne", 24];
var myData = ourArray[0];
console.log(myData);

var myArray = [["Jhon", 26], ["Lisa", 21]];
var ourData = myArray[1];
console.log(ourData);

var mineArray = [1, 12, 13, 23];
console.log(mineArray[3]);

var mySecondArray = [34, 34, 34, 22];
mySecondArray[1] = 21;
console.log(mySecondArray);
var thirdArray = [1, 2, 3, 4];
thirdArray[2] = 0;
console.log(thirdArray);
var multiArray = [[43, 3], 3, 23];
console.log(multiArray[0][0]);
var array = ["Rat", "Colera", 4];
array.push(["Hot", "nagging"]);
/* array now equals ["Rat", "Colera", 4,"Hot","nagging"] */
console.log(array);
var secondArray = [2, "Shark", 34];
secondArray.push([["Animals rigths"], 4]); //add element at the end of the array//
secondArray.unshift(["Peco", 45]); //add element at the begining of the array//
console.log(secondArray);

var actuallArray = [0, 2, 4];
var removeArrayElement = actuallArray.pop(); // removes the last element of the array//
var takeFirstArrayElement = actuallArray.shift(); //removes the first element of the array//
console.log(removeArrayElement);
console.log(takeFirstArrayElement);
console.log(actuallArray);
var myShoppingList = [
  ["bananas", 4],
  ["apples", 4],
  ["oranges", 5],
  ["lettuce", 1],
  ["chocolate sprinkles", 2],
  ["ice cream", 1]
];
console.log(myShoppingList);
function myFirstFunction() {
  console.log(myShoppingList + " Insane cheap shopping list.");
}
myFirstFunction();
myFirstFunction(); //input of the console//

function mathsAsigtment(a, b, c, d) {
  console.log(a - b - c - d);
}
mathsAsigtment(1, 2, 3, 5);

function notMyStrong() {
  var myVar = 5;
  console.log(myVar);
}
notMyStrong();

var outerSpace = "Saturn";

function forgetAssigningAName() {
  var outerSpace = "Mars";
  return outerSpace;
}
console.log(forgetAssigningAName());
console.log(outerSpace);

function operationSum(num) {
  return num + 1;
}
console.log(operationSum(10));

function timesTwelve(num) {
  return num * 20;
}
console.log(timesTwelve(12));

function matrices(num, nom, anom, anio) {
  return num + nom * anom - anio;
}
console.log(matrices(2, 3, 4, 5));

var addThrees = 0;

function addThree(sum) {
  return (5 + sum) / 3;
}
addThrees = addThree(9);

var addFives = 5;
function addFive(sum) {
  return (5 - sum) * 10;
}
addFives = addFive(76);
console.log(addThrees);
console.log(addFives);

function nextInLine(arr, item) {
  arr.push(item);
  return arr.shift();
}

var testArr = [1, 2, 3, 4];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

function trueOrFalse(wasThatTrue) {
  if (wasThatTrue) {
    return "Yes, it's true";
  }
  return "No, it's false";
}
console.log(trueOrFalse(false));
console.log(trueOrFalse(true));

function testEqual(val) {
  if (val === 13) {
    return "Equal";
  }
  return "Not Equal";
}
console.log(testEqual(10));

function compareEqualator(a, b) {
  if (a == b) {
    return "Equal";
  }
  return "Not equal";
}

console.log(compareEqualator(1, 2));

function myProof(noun) {
  if (noun == "Laura") {
    return "True is Laura";
  }
  return "False it's not";
}
console.log(myProof("Lara"));

let numbers = [2, 3, 4, 5, 6];
numbers.map((a, index) => console.log(a, index));

numbers.map(function(a, index) {
  console.log(a, index);
});
