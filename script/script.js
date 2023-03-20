//function declaration
function greet(time, name) {
  console.log(`Good ${time} ${name}`);
}
//function calling
greet("Night", "Nida");

// function expression
const greet1 = function (name) {
  console.log(`hello ${name}`);
};

greet1("Nida");

// arrow function
let greet2 = (name) => {
  console.log(`hello ${name}`);
};

greet2("Nida");

function multiply(a, b = 1) {
  return a + b;
}

console.log(multiply(5, 2));
// expect 10
