
// This code should create a little popup box that asks the user for a number. The input we get back will be stored in our variable answer.
// I wrapped the prompt call in a parseInt function so that a number is returned from the user’s input.

let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

//Create for loop with if/else conditional statement  

for (let i = 1; i <= answer; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }

 