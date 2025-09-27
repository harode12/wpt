import { useState } from "react";

export default function Fact({ num1 }) {
    const [inputValue, setInputValue] = useState('');
    const [result, setResult] = useState(null);
    
    // Initialize with props value if provided
    const a = num1;

    const calculateFactorial = (n) => {
        if (n < 0) return "Factorial not defined for negative numbers";
        if (n === 0 || n === 1) return 1;
        
        let factorial = 1;
        for (let i = 2; i <= n; i++) {
            factorial *= i;
        }
        return factorial;
    };

    const myEventHandler = (e) => {
        console.log(e.target);
        console.log(e.target.value);
        console.log("in event handler");
        
        const number = parseInt(inputValue);
        if (!isNaN(number)) {
            const factorialResult = calculateFactorial(number);
            setResult(factorialResult);
        } else {
            setResult("Please enter a valid number");
        }
    };

    const handleInputChange = (e) => {
        console.log(e.target.value);
        setInputValue(e.target.value);
    };

    return (
        <div >
            <h1>
                Function Component - Factorial Calculator
            </h1>
            
            {a && (
                <p >
                    Initial prop value: {a}
                </p>
            )}
            
            <div>
                <label >
                    Enter a number:
                </label>
                <input
                    type="text"
                    id="t1"
                    value={inputValue}
                    onChange={handleInputChange}
                    onBlur={handleInputChange}
                    placeholder="Enter a positive integer"
                />
            </div>

            <button
                value="Factorial"
                onClick={myEventHandler}
                       >
                Call Factorial
            </button>

            {result !== null && (
                <div>
                    <p>Result:</p>
                    <p>{result}</p>
                </div>
            )}
        </div>
    );
}

