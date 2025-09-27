// import React, { useState } from 'react';

// export default  function Component(props) {
//   const [text, setText] = useState('');
    

//   const [output, setOutput] = useState('');

//   const handleUpperCase = () => {
//     const result = text.toUpperCase();
//     console.log(result);
//     setOutput(result);
//   };

//   const handleLowerCase = () => {
//     const result = text.toLowerCase();
//     console.log(result);
//     setOutput(result);
//   };

  
//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Enter text"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//       />
//       <button onClick={handleUpperCase}>UPPER CASE</button>
//       <button onClick={handleLowerCase}>lower case</button>
//       <p>Output: {output}</p>
//     </div>
//   );
// }

// //export default Component;












import React, { useState } from 'react';

export default function Component(props) {
  const [text, setText] = useState('');
  const [output, setOutput] = useState('');
  const [caseType, setCaseType] = useState('');

  const handleTransform = () => {
    let result = '';
    if (caseType === 'uppercase') {
      result = text.toUpperCase();
    } else if (caseType === 'lowercase') {
      result = text.toLowerCase();
    } else if (caseType === 'titlecase') {
      result = text
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    }
    setOutput(result);
  };

  return (
    <div>
      <h3>Text Transformer</h3>
      <input
        type="text"
        placeholder="Enter text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div style={{ marginTop: '10px' }}>
        <label>
          <input
            type="radio"
            value="uppercase"
            checked={caseType === 'uppercase'}
            onChange={(e) => setCaseType(e.target.value)}
          />
          Uppercase
        </label>
        <label>
          <input
            type="radio"
            value="lowercase"
            checked={caseType === 'lowercase'}
            onChange={(e) => setCaseType(e.target.value)}
          />
          Lowercase
        </label>
        <label>
          <input
            type="radio"
            value="titlecase"
            checked={caseType === 'titlecase'}
            onChange={(e) => setCaseType(e.target.value)}
          />
          Title Case
        </label>
      </div>

      <button onClick={handleTransform} style={{ marginTop: '10px' }}>
        Transform
      </button>

      <p>Output: {output}</p>
    </div>
  );
}
