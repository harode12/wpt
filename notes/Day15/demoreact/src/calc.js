//  Function 

export default function Calc(props) {

    let n1 = parseFloat(props.num1);
    let n2 = parseFloat(props.num2);
 let operation = props.operation ? props.operation.toLowerCase() : 'all';
     function Addition() {
        return (n1 + n2);
    }

    function Multiplication() {
        return (n1 * n2);
    }

    function Subtraction() {
        return (n1 - n2);
    }

    function Division() {
        if (n2 === 0) {
            return "Cannot divide by zero";
        }
        return (n1 / n2);
    }

     
    return (

        <>
            <p>Calculator </p>
            <h2>Addition: {Addition()}</h2>
            <h2>Multiplication: {Multiplication()}</h2>
            <h2>Subtraction: {Subtraction()}</h2>
            <h2>Division: {Division()}</h2>
        </>

    )
  }
