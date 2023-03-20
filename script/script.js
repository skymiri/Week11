// //function declaration
// function greet(time, name) {
//   console.log(`Good ${time} ${name}`);
// }
// //function calling
// greet("Night", "Nida");

// // function expression
// const greet1 = function (name) {
//   console.log(`hello ${name}`);
// };

// greet1("Nida");

// // arrow function
// let greet2 = (name) => {
//   console.log(`hello ${name}`);
// };

// greet2("Nida");

// function multiply(a, b = 1) {
//   return a + b;
// }

// console.log(multiply(5, 2));
// expect 10

// let radius = prompt("Put radius in cm : ");

// const radiusPara = document.querySelector("#radius");
// radiusPara.textContent += radius;

// const areaPara = document.querySelector("#result");
// console.log(areaPara);

// function calculateArea(radius) {
//   //references to p tags
//   if (isNaN(radius)) {
//     // alert("This is not a valid radius");
//     // update the  resultPara to show the area
//     areaPara.textContent = "This is Not a number";
//   } else {
//     const area = Math.PI * radius * radius;
//     return area;
//   }
// }
// let area = calculateArea(radius);
// if (area) {
//   //update the radiusPara
//   areaPara.textContent = `The area of a circle wth radius ${radius} is ${area}`;
// }

function populateList(myShoppingList) {
  //get access to the ul element
  const ulElement = document.querySelector("ul.shopping");
  console.log(ulElement);
  // get myShoppingList array
  // add an li under the ul element with text equal to each item of myList
  for (let item of myShoppingList) {
    //make a new li document.createElement
    //update the text of the new li
    // append the new li to the ul element
    const newLi = document.createElement("li");
    newLi.textContent = item;
    ulElement.appendChild(newLi);
  }
}
let myShoppingList = ["bread", "cheese", "Greenpepper"];
populateList(myShoppingList);

function squareList() {
  //get access to the ul element
  //remove the ul element
  const squareList = document.querySelector("ul.shopping List");
  //remove the ul element class
  ulElement.classList.remove("circleList");
  //add the squareList class
  ulElement.classList.add("squareList");
}
