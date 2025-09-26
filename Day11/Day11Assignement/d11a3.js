
// factorial-non-recursive.js

function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {

    result *= i;
  }
  return result;
}

const num = parseInt(process.argv[2]);
console.log(`Factorial of ${num} is ${factorial(num)}`);

