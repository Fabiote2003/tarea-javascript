//Ejercicio 1
let yourArray = [2, "Fabio", false, true, 4];

//Ejercicio 2
let myArray = ["a", "b", "c", "d"];
// Only change code below this line
myArray[1] = 2
// Only change code above this line
console.log(myArray);

//Ejercicio 3
function mixedNumbers(arr) {
    // Only change code below this line
    arr.unshift('I', 2, 'three');
    arr.push(7, 'VIII', 9);
    // Only change code above this line
    return arr;
  }
  
  console.log(mixedNumbers(['IV', 5, 'six']));

//Ejercicio 4
function popShift(arr) {
    let popped = arr.pop(); // Change this line
    let shifted = arr.shift(); // Change this line
    return [shifted, popped];
  }
  
  console.log(popShift(['challenge', 'is', 'not', 'complete']));

//Ejercicio 5
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line
arr.splice(0, 1);
arr.splice(3);
// Only change code above this line
console.log(arr);

//Ejercicio 6
function htmlColorNames(arr) {
    // Only change code below this line
    arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond')
    // Only change code above this line
    return arr;
  }
  
  console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));

//Ejercicio 7
function forecast(arr) {
    // Only change code below this line
    return arr.slice(2, 4)
  }
  
  // Only change code above this line
  console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

//Ejercicio 8
function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
      // Only change code below this line
        newArr.push([...arr])
      // Only change code above this line
      num--;
    }
    return newArr;
  }
  
  console.log(copyMachine([true, false, true], 5));

//Ejercicio 9
function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence = ['learning', ...fragment, 'is', 'fun']; // Change this line
    return sentence;
  }
  
  console.log(spreadOut());

//Ejercicio 10
function quickCheck(arr, elem) {
    // Only change code below this line
    if(arr.indexOf(elem) != -1) {
      return true;
    }else {
      return false;
    }
    // Only change code above this line
  }
  
  console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

//Ejercicio 11
function filteredArray(arr, elem) {
    let newArr = [];
    // Only change code below this line
    for(let i = 0; i < arr.length; i++) {
      if(arr[i].indexOf(elem) === -1) {
        newArr.push(arr[i]);
      }
    }
    // Only change code above this line
    return newArr;
  }
  
  console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

//Ejercicio 12
let myNestedArray = [
    ["unshift", false, 1, 2, 3, "complex", "nested"],
    ["loop", "shift", 6, 7, 1000, "method"],
    ["concat", false, true, "spread", "array", ["deep"]],
    ["mutate", 1327.98, "splice", "slice", "push", [["deeper"]]],
    ["iterate", 1.3849, 7, "8.4876", "arbitrary", "depth", [[["deepest"]]]]
  ];

//Ejercicio 13
foods.bananas = 13;
foods.grapes = 35;
foods.strawberries = 27;

//Ejercicio 14
let userActivity = {
    id: 23894201352,
    date: 'January 1, 2017',
    data: {
      totalUsers: 51,
      online: 42
    }
  };
  
  // Only change code below this line
  userActivity.data.online = 45
  // Only change code above this line
  
  console.log(userActivity);

//Ejercicio 15
function checkInventory(scannedItem) {
    // Only change code below this line
    return foods[scannedItem]
    // Only change code above this line
  }
  

//Ejercicio 16
delete foods.oranges;
delete foods.plums;
delete foods.strawberries;

//Ejercicio 17
function isEveryoneHere(userObj) {
    // Only change code below this line
    if(
        userObj.hasOwnProperty("Alan") &&
      userObj.hasOwnProperty("Jeff") &&
      userObj.hasOwnProperty("Sarah") &&
      userObj.hasOwnProperty("Ryan") )
       {
       return true;
    }else {
      return false;
    }
    // Only change code above this line
  }
  
  console.log(isEveryoneHere(users));

//Ejercicio 18
function countOnline(usersObj) {
    // Only change code below this line
  let result = 0;
    for (let user in usersObj) {
      if (usersObj[user].online === true) {
        result++;
      }
    }
    return result
    // Only change code above this line
  }

//Ejercicio 19
function getArrayOfUsers(obj) {
    // Only change code below this line
  return Object.keys(obj);
    // Only change code above this line
  }
  

//Ejercicio 20
function addFriend(userObj, friend) {
    // Only change code below this line
  userObj.data.friends.push(friend);
    return userObj.data.friends;
    // Only change code above this line
  }