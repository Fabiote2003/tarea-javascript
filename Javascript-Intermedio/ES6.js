/* ES6 */

//Ejercicio 1
function checkScope() {
    let i = 'function scope';
    if (true) {
      let i = 'block scope';
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
  }

//Ejercicio 2
const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
  // Using s = [2, 5, 7] would be invalid

  // Only change code above this line
}
editInPlace();

//Ejercicio 3
function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // Only change code below this line
  Object.freeze(MATH_CONSTANTS);

  // Only change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
  

//Ejercicio 4
const magic = () => {
  return new Date();
}

//Ejercicio 5
const myConcat = (arr1, arr2) => {
  return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5]));

//Ejercicio 6
const increment = (number, value = 1) => number + value;


//Ejercicio 7
const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
}

//Ejercicio 8
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // Change this line

//Ejercicio 9
const {today, tomorrow} = HIGH_TEMPERATURES;

//Ejercicio 10
const {today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES;

//Ejercicio 11
const {today: {low: lowToday, high: highToday}} = LOCAL_FORECAST

//Ejercicio 12
let a = 8, b = 6;
// Only change code below this line
[a, b] = [b, a];

//Ejercicio 13
function removeFirstTwo(list) {
  // Only change code below this line
  const [a, b, ...shorterList] = list; // Change this line
  // Only change code above this line
  return shorterList;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);

//Ejercicio 14

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

// Only change code below this line
const half = ({max, min}) => (max + min) / 2.0; 
// Only change code above this line


//Ejercicio 15
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // Only change code below this line
  const failureItems = [];
  for(let i = 0; i < arr.length; i++) {

    failureItems.push(`<li class="text-warning">${arr[i]}</li>`)
  }
  // Only change code above this line

  return failureItems;
}

const failuresList = makeList(result.failure);


//Ejercicio 16
const createPerson = (name, age, gender) => (
  // Only change code below this line
    {
    name,
    age,
    gender
    }
  // Only change code above this line
)



//Ejercicio 17
// Only change code below this line
const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  }
};
// Only change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);


//Ejercicio 18
// Only change code below this line
class Vegetable {
  constructor(name) {
    this.name = name;
  }
}
// Only change code above this line

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'

//Ejercicio 19
class Thermostat {
  constructor(fahrenheit) {
    this.fahrenheit = fahrenheit;
  }
  
  get temperature() {
    return (5 / 9) * (this.fahrenheit - 32);
  }
  
  set temperature(celsius) {
    this.fahrenheit = (celsius * 9.0) / 5 + 32;
  }
}

//Ejercicio 20
<html>
  <body>
    <script type="module" src="index.js"></script>

  </body>
</html>

//Ejercicio 21 
const uppercaseString = (string) => {
  return string.toUpperCase();
}

const lowercaseString = (string) => {
  return string.toLowerCase()
}

export {uppercaseString, lowercaseString}

//Ejercicio 22 
import {uppercaseString, lowercaseString} from './string_functions.js'  
// Only change code above this line

uppercaseString("hello");
lowercaseString("WORLD!");

//Ejercicio 23 
import * as  stringFunctions from './string_functions.js'
stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");

//Ejercicio 24 
export default function subtract(x, y) {
  return x - y;
}

//Ejercicio 25 
import subtract from "./math_functions.js"  
// Only change code above this line

subtract(7,4);

//Ejercicio 26 
const makeServerRequest = new Promise((resolve, reject)=> {

}
)

//Ejercicio 27 
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

//Ejercicio 28
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  let responseFromServer = true;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

makeServerRequest.then(result => console.log(result))

//Ejercicio 29 
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to false to represent an unsuccessful response from a server
  let responseFromServer = false;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

makeServerRequest.then(result => {
  console.log(result);
});

makeServerRequest.catch(error => console.log(error))


