import React, { useState } from 'react';

function Calculator() {
  const [input, setInput] = useState('');

  function handleInput(e) {
    setInput(input + e.target.value);
  }

  function calculate() {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  }

  function clearInput() {
    setInput('');
  }

  return (
    
    <div className="calculator"> 
    

      <div className="display">{input}</div>
      <button className="clear" onClick={clearInput}>C</button>
      <button value="(" onClick={handleInput}>(</button>
      <button value=")" onClick={handleInput}>)</button>
      <button value="/" onClick={handleInput}>/</button><br></br>
      <button value="7" onClick={handleInput}>7</button>
      <button value="8" onClick={handleInput}>8</button>
      <button value="9" onClick={handleInput}>9</button>
      <button value="*" onClick={handleInput}>*</button><br></br>
      <button value="4" onClick={handleInput}>4</button>
      <button value="5" onClick={handleInput}>5</button>
      <button value="6" onClick={handleInput}>6</button>
      <button value="-" onClick={handleInput}>-</button><br></br>
      <button value="1" onClick={handleInput}>1</button>
      <button value="2" onClick={handleInput}>2</button>
      <button value="3" onClick={handleInput}>3</button>
      <button value="+" onClick={handleInput}>+</button><br></br>
      <button value="0" onClick={handleInput}>0</button>
      <button value="." onClick={handleInput}>.</button>
      <button className="equals" onClick={calculate}>=</button>
      
    </div>
  );
}

export default Calculator;
