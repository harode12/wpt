import React, { useState } from 'react';

export default  function Component(props) {
  const [text, setText] = useState('');
    

  const [output, setOutput] = useState('');

  const handleUpperCase = () => {
    const result = text.toUpperCase();
    console.log(result);
    setOutput(result);
  };

  const handleLowerCase = () => {
    const result = text.toLowerCase();
    console.log(result);
    setOutput(result);
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
      <p>Output: {output}</p>
    </div>
  );
}

//export default Component;
