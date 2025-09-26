 let sum=0;
function calculate(...a){
    console.log("from calculate function");
    for (let i=0; i<a.length; i++){
         sum=sum+a[i];
    }
    console.log("sum of numbers are"+sum);
    for(let i=0;i<a.length;i++){
    if(a[i]%2==0){
    
    }
    else{
          console.log("number is odd "+a[i]);
    }
    }
    const max = Math.max(...a); 
    console.log("maximun no is"+max);
}
calculate(1,2,3,4,5,6,7);
