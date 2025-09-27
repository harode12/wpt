import React, { useState } from 'react';

export default function MathOperations() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState('all');
  const [factorialInput, setFactorialInput] = useState('');
  const [factorialResult, setFactorialResult] = useState(null);
  const [calcResult, setCalcResult] = useState(null);

  // Factorial Logic
  const calculateFactorial = (n) => {
    const num = parseInt(n);
    if (isNaN(num) || num < 0) return 'Invalid input';
    let result = 1;
    for (let i = 2; i <= num; i++) result *= i;
    return result;
  };

  // Calculator Logic
  const performCalculation = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    if (isNaN(n1) || isNaN(n2)) return 'Invalid numbers';

    const results = {
      addition: n1 + n2,
      subtraction: n1 - n2,
      multiplication: n1 * n2,
      division: n2 === 0 ? 'Cannot divide by zero' : n1 / n2,
    };

    if (operation === 'all') return results;
    return { [operation]: results[operation] };
  };

  // Handlers
  const handleFactorial = () => {
    setFactorialResult(calculateFactorial(factorialInput));
  };

  const handleCalculator = () => {
    setCalcResult(performCalculation());
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2> Math Operations</h2>

      {/* Factorial Section */}
      <div style={{ marginBottom: '20px' }}>
        <h3>Factorial</h3>
        <input
          type="number"
          placeholder="Enter number"
          value={factorialInput}
          onChange={(e) => setFactorialInput(e.target.value)}
        />
        <button onClick={handleFactorial}>Calculate Factorial</button>
        {factorialResult !== null && <p>Factorial Result: {factorialResult}</p>}
      </div>

      {/* Calculator Section */}
      <div>
        <h3>Calculator</h3>
        <input
          type="number"
          placeholder="Num 1"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <input
          type="number"
          placeholder="Num 2"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
        <select value={operation} onChange={(e) => setOperation(e.target.value)}>
          <option value="all">All</option>
          <option value="addition">Addition</option>
          <option value="subtraction">Subtraction</option>
          <option value="multiplication">Multiplication</option>
          <option value="division">Division</option>
        </select>
        <button onClick={handleCalculator}>Calculate</button>

        {/* Display Results */}
        {calcResult && (
          <div style={{ marginTop: '10px' }}>
            <h4>Results:</h4>
            {Object.entries(calcResult).map(([key, value]) => (
              <p key={key}>
                {key.charAt(0).toUpperCase() + key.slice(1)}: {value}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
