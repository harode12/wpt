// import { useState } from "react";

// export default function Fact({ num1 }) {
//     const [inputValue, setInputValue] = useState('');
//     const [result, setResult] = useState(null);
    
//     // Initialize with props value if provided
//     const a = num1;

//     const calculateFactorial = (n) => {
//         if (n < 0) return "Factorial not defined for negative numbers";
//         if (n === 0 || n === 1) return 1;
        
//         let factorial = 1;
//         for (let i = 2; i <= n; i++) {
//             factorial *= i;
//         }
//         return factorial;
//     };

//     const myEventHandler = (e) => {
//         console.log(e.target);
//         console.log(e.target.value);
//         console.log("in event handler");
        
//         const number = parseInt(inputValue);
//         if (!isNaN(number)) {
//             const factorialResult = calculateFactorial(number);
//             setResult(factorialResult);
//         } else {
//             setResult("Please enter a valid number");
//         }
//     };

//     const handleInputChange = (e) => {
//         console.log(e.target.value);
//         setInputValue(e.target.value);
//     };

//     return (
//         <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md">
//             <h1 className="text-2xl font-bold mb-4 text-center text-blue-600">
//                 Function Component - Factorial Calculator
//             </h1>
            
//             {a && (
//                 <p className="mb-4 text-gray-600">
//                     Initial prop value: {a}
//                 </p>
//             )}
            
//             <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Enter a number:
//                 </label>
//                 <input
//                     type="text"
//                     id="t1"
//                     value={inputValue}
//                     onChange={handleInputChange}
//                     onBlur={handleInputChange}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     placeholder="Enter a positive integer"
//                 />
//             </div>

//             <button
//                 value="Factorial"
//                 onClick={myEventHandler}
//                 className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200"
//             >
//                 Call Factorial
//             </button>

//             {result !== null && (
//                 <div className="mt-4 p-3 bg-gray-100 rounded-md">
//                     <p className="text-sm font-medium text-gray-700">Result:</p>
//                     <p className="text-lg font-bold text-blue-600">{result}</p>
//                 </div>
//             )}
//         </div>
//     );
// }




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

    // Function to render specific operation
    function renderOperation() {
        switch (operation) {
            case 'addition':
            case 'add':
                return <h2>Addition: {Addition()}</h2>;
            
            case 'multiplication':
            case 'multiply':
                return <h2>Multiplication: {Multiplication()}</h2>;
            
            case 'subtraction':
            case 'subtract':
                return <h2>Subtraction: {Subtraction()}</h2>;
            
            case 'division':
            case 'divide':
                return <h2>Division: {Division()}</h2>;
            
            case 'all':
            default:
                return (
                    <>
                        <h2>Addition: {Addition()}</h2>
                        <h2>Multiplication: {Multiplication()}</h2>
                        <h2>Subtraction: {Subtraction()}</h2>
                        <h2>Division: {Division()}</h2>
                    </>
                );
        }
    }

    return (
        <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md">
            <p className="text-xl font-bold mb-4 text-center text-green-600">Calculator</p>
            
            <div className="mb-4 p-3 bg-gray-100 rounded-md">
                <p className="text-sm text-gray-600">
                    Number 1: <span className="font-bold">{n1}</span>
                </p>
                <p className="text-sm text-gray-600">
                    Number 2: <span className="font-bold">{n2}</span>
                </p>
                <p className="text-sm text-gray-600">
                    Operation: <span className="font-bold">{operation === 'all' ? 'All Operations' : operation}</span>
                </p>
            </div>

            <div className="text-center">
                {renderOperation()}
            </div>

            {/* Usage Examples */}
            <div className="mt-6 p-3 bg-blue-50 rounded-md">
                <p className="text-xs text-blue-700 font-semibold mb-2">Usage Examples:</p>
                <div className="text-xs text-blue-600 space-y-1">
                    <p>&lt;Calc num1="10" num2="5" /&gt;</p>
                    <p>&lt;Calc num1="10" num2="5" operation="addition" /&gt;</p>
                    <p>&lt;Calc num1="10" num2="5" operation="multiply" /&gt;</p>
                    <p>&lt;Calc num1="10" num2="5" operation="subtract" /&gt;</p>
                    <p>&lt;Calc num1="10" num2="5" operation="divide" /&gt;</p>
                </div>
            </div>
        </div>
    );
}









import React, { useState } from 'react';

export default function Component(props) {
  const [text, setText] = useState('');

  const handleUpperCase = () => {
    console.log(text.toUpperCase());
  };

  const handleLowerCase = () => {
    console.log(text.toLowerCase());
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleUpperCase}>UPPER CASE</button>
      <button onClick={handleLowerCase}>lower case</button>
    </div>
  );
}
