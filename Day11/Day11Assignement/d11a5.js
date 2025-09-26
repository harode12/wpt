// // accept 2 numbers from user 
//   and perform multiplication 
  
//   using promise concept perform multiplication if both number 
//   are positive else reject the promise 
// //

// multiplyPromise.js

function multiplyPositiveNumbers(num1, num2) {
  return new Promise((resolve, reject) => {
    if (num1 > 0 && num2 > 0) {
      resolve(num1 * num2);
    } else {
      reject('Both numbers must be positive!');
    }
  });
}

const num1 = Number(process.argv[2]);
const num2 = Number(process.argv[3]);

multiplyPositiveNumbers(num1, num2)
  .then(result => {
    console.log(`Multiplication result: ${result}`);
  
  })
  .catch(err => {
    console.error(`Error: ${err}`);
  });
