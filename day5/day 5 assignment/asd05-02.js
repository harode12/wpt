/**2) with above concept use Math.max() method to display maximum number */

let sum=0;
function calculate(...a){
    
    console.log("from calculate function");

    const max = Math.max(...a); 
    console.log("maximun no is"+max);
}

calculate(1,2,31,4,51,6,7);
