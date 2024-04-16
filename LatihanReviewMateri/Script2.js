for (let fb = 1; fb <= 100; fb++) {
   if (fb % 3 === 0 && fb % 5 === 0) {
    console.log("FizzBuzz");
  } else if (fb % 3 === 0) {
    console.log("Fizz");
  } else if (fb % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(fb);
  }
}