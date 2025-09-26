
// let a = ["HTML", "CSS", "JS"];


// a.push("mongoDB");


// a.unshift("deployememt");

// console.log(a);


// let a1 = ["apple", "banana", "cerry"];
// console.log("Original Array: " + a1);


// let firstt = a1.pop();
// console.log("After Removing the last: " + a1);
  let sum=0;
function calculate(...a){
    console.log("from calculate function");
    for (let i=0; i<a.length; i++){
         sum=sum+a[i];
    }
    console.log("sum of numbers are"+sum);
}

calculate(1,2,3,4,5,6,7);


