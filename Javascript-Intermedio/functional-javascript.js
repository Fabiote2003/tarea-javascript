/* Functional Programming*/

//Ejercicio 1

const prepareTea = () => 'greenTea';


const getTea = (numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};


const tea4TeamFCC = getTea(40);

//Ejercicio 2
const prepareGreenTea = () => 'greenTea';

const prepareBlackTea = () => 'blackTea';


const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);;


console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);


//Ejercicio 3
// tabs is an array of titles of each site open within the window
const Window = function(tabs) {
    this.tabs = tabs; // We keep a record of the array inside the object
  };
  
  // When you join two windows into one window
  Window.prototype.join = function(otherWindow) {
    this.tabs = this.tabs.concat(otherWindow.tabs);
    return this;
  };
  
  // When you open a new tab at the end
  Window.prototype.tabOpen = function(tab) {
    this.tabs.push('new tab'); // Let's open a new tab for now
    return this;
  };
  
  // When you close a tab
  Window.prototype.tabClose = function(index) {
  
    // Only change code below this line
  
    const tabsBeforeIndex = this.tabs.splice(0, index); // Get the tabs before the tab
    const tabsAfterIndex = this.tabs.splice(1); // Get the tabs after the tab
  
    this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together
  
    // Only change code above this line
  
    return this;
   };
  
  // Let's create three browser windows
  const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
  const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
  const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Entertainment sites
  
  // Now perform the tab opening, closing, and other operations
  const finalTabs = socialWindow
    .tabOpen() // Open a new tab for cat memes
    .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
    .join(workWindow.tabClose(1).tabOpen());
  console.log(finalTabs.tabs);

//Ejercicio 4
// La variable global
let fixedValue = 4;

function incrementer() {
  // Cambia solo el código debajo de esta línea
  return fixedValue + 1;

  // Cambia solo el código encima de esta línea
}

//Ejercicio 5
// La variable global
let fixedValue = 4;

// Cambia solo el código debajo de esta línea
function incrementer(value) {
  return value + 1;

  // Cambia solo el código encima de esta línea
}

//Ejercicio 6
// La variable global
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Cambia el código debajo de esta línea
function add(pBookList, bookName) {
  let newArr = [...pBookList]
  newArr.push(bookName);
  return newArr;

  // Cambia el código encima de esta línea
}

// Cambia el código debajo de esta línea
function remove(pBookList, bookName) {
  let newArr = [...pBookList]
  const book_index = newArr.indexOf(bookName);
  if (book_index >= 0) {

    newArr.splice(book_index, 1);
    return newArr;

    // Cambia el código encima de esta línea
    }
}

console.log(add(bookList, "hola"));
console.log(bookList)

//Ejercicio 7
const ratings = watchList.map((element) => ({
  title: element["Title"],
  rating: element["imdbRating"]
})) 

//Ejercicio 8
Array.prototype.myMap = function(callback) {
  const newArray = [];
  // Cambia solo el código debajo de esta línea
  for(let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i , this))
  }
  // Cambia solo el código encima de esta línea
  return newArray;
};

//Ejercicio 9
const filteredList = watchList
  .filter(element => Number(element.imdbRating)>8.0)
  .map(element => ({
    title: element["Title"],
    rating: element["imdbRating"]
  }))

//Ejercicio 10
Array.prototype.myFilter = function(callback) {
  const newArray = [];
  // Cambia solo el código debajo de esta línea
  for(let i = 0; i < this.length; i++) {
    if( callback(this[i], i, this) ) {
      newArray.push(this[i])
    }
  }
  // Cambia solo el código encima de esta línea
  return newArray;
};

//Ejercicio 11
function sliceArray(anim, beginSlice, endSlice) {
  // Cambia solo el código debajo de esta línea
  return anim.slice(beginSlice, endSlice);

  // Cambia solo el código encima de esta línea
}

const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);

//Ejercicio 12
function nonMutatingSplice(cities) {
  // Cambia solo el código debajo de esta línea
  return cities.slice(0, 3);

  // Cambia solo el código encima de esta línea
}

const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);

//Ejercicio 13
function nonMutatingConcat(original, attach) {
  // Cambia solo el código debajo de esta línea
  return original.concat(attach)

  // Cambia solo el código encima de esta línea
}

//Ejercicio 14
function nonMutatingPush(original, newItem) {
  // Cambia solo el código debajo de esta línea
  return original.concat(newItem);

  // Cambia solo el código encima de esta línea
}

//Ejercicio 15
function getRating(watchList) {
  // Cambia solo el código debajo de esta línea
  let averageRating = watchList.filter(element => element.Director === "Christopher Nolan")
  .map(element => Number(element.imdbRating))
  .reduce((acum, currentRating) => acum + currentRating)
  / watchList.filter(element => element.Director === "Christopher Nolan").length
  // Cambia solo el código encima de esta línea
  return averageRating;
}

console.log(getRating(watchList));

//Ejercicio 16
const squareList = arr => {
  // Cambia solo el código debajo de esta línea
  return arr.filter(number => number > 0 && number % 1 == 0)
  .map(number => Math.pow(number,2))
  // Cambia solo el código encima de esta línea
};


//Ejercicio 17
function alphabeticalOrder(arr) {
  // Cambia solo el código debajo de esta línea
  return arr.sort(function(a, b) {
    return a === b ? 0 : a < b ? -1 : 1;
  });
  return arr
  // Cambia solo el código encima de esta línea
}

//Ejercicio 18
const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Cambia solo el código debajo de esta línea
  return arr.concat([]).sort(function(a,b) {
    return a-b;
  })

  // Cambia solo el código encima de esta línea
}

nonMutatingSort(globalArray);

//Ejercicio 19
function splitify(str) {
  // Cambia solo el código debajo de esta línea
  return str.split(/\W/);

  // Cambia solo el código encima de esta línea
}

splitify("Hello World,I-am code");

//Ejercicio 20
function sentensify(str) {
  // Cambia sol(o el código debajo de esta línea
  return str.split(/\W/).join(" ");
  

  // Cambia solo el código encima de esta línea
}

sentensify("May-the-force-be-with-you");

//Ejercicio 21
// Cambia solo el código debajo de esta línea
function urlSlug(title) {
  return title
     .toLowerCase()
     .trim()
     .split(/\s+/)
     .join("-");
 
 }
 // Cambia solo el código encima de esta línea
 urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");

//Ejercicio 22
function checkPositive(arr) {
  // Cambia solo el código debajo de esta línea
  return arr.every(currentNumber => currentNumber > 0)

  // Cambia solo el código encima de esta línea
}

checkPositive([1, 2, 3, -4, 5]);

//Ejercicio 23
function checkPositive(arr) {
  // Cambia solo el código debajo de esta línea
  return arr.some(number => number > 0)

  // Cambia solo el código encima de esta línea
}

checkPositive([1, 2, 3, -4, 5]);  

//Ejercicio 24
function add(x) {
  // Cambia solo el código debajo de esta línea
  return function (y) {
  return function(z) {
    return x + y + z;
  }
}

  // Cambia solo el código encima de esta línea
}

add(10)(20)(30);