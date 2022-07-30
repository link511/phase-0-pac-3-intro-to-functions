// Follow along with the examples here
/*function doNothing() {} 

function sayHello() {
    console.log('Hello!');
  } 

  sayHello(); 

  function sayHelloToIsabel() {
    console.log("Hello, Isabel!");
  } 

  function sayHelloToSofia() {
    console.log("Hello, Sofia!");
  }

  function sayHelloToBrendan() {
    console.log("Hello, Brendan!");
  } 

  sayHelloToIsabel()
  sayHelloToSofia()
  sayHelloToBrendan()

  function sayHelloTo(firstName) {
    console.log(`Hello, ${firstName}!`);
  }
  sayHelloTo('Isabel'); // "Hello, Isabel!"
  sayHelloTo("Jane"); // "Hello, Jane!"
  sayHelloTo("R2-D2"); // "Hello, R2-D2!"
  sayHelloTo(1); // "Hello, 1!"

// ^ Note that in the above, JavaScript coerces the number 1 to the string "1" 
  
*/

/*function say(greeting, firstName) {
    console.log(`${greeting}, ${firstName}!`);
  } 

  say("Hello", "jack");
  say("Julio", "hello"); 


  /*function say(greeting, firstName) {
    console.log("firstName: ", firstName);
    console.log("greeting: ", greeting);
    console.log(`${greeting}, ${firstName}!`);
  } */

  /*function say(greeting, firstName) {
    return `${greeting}, ${firstName}!`
  } */
/*
  function say(greeting, firstName) {
    console.log(`${greeting}, ${firstName}!`);
  } 

  console.log(say("Hello", "Sofia")); 

  function add(x, y) {
    return x + y;
  }
 
  console.log(add(80, 9000)); 

*/
/*
const sum = add(num1,num2);
const message = `The sum of your numbers is: ${sum}.` 

const message = `The sum of your numbers is: ${add(num1, num2)}.` 

*/

function say(greeting, firstName) {
    
    console.log('I was called!');
    return `${greeting}, ${firstName}!`;
  } 
  console.log(say("Howdy", "partner")); 

