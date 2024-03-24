import React, { useState } from 'react';
import './App.css';
import History from './History';

const App = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);

  const handleClick = (e) => {
    if (e.target.value === 'C') {
      setInput('');
      return;
    }
    if(e.target.value === '^') {
      try {
        setInput((input + '**').toString());
      } catch (e) {
        setInput('Error');
      }
      return;
    }
    if (e.target.value === '√') { 
      try {
        setInput((input + '**(1/2)').toString());
      } catch (e) {
        setInput('Error');
      }
      return;
    }
    if (e.target.value === '%') {
      try {
        setInput(eval(input + '/100').toString());
      }catch (e) {
        setInput('Error');
      }
    }
    if (e.target.value === '=') {
      try {
        setInput(eval(input).toString().replace(/[^0-9.-]+/g, ''));
      } catch (e) {
        setInput('Error');
      }
      setHistory([...history, input + ` = ` + eval(input).toString().replace(/[^0-9.-]+/g, '')]);
      return;
    }
    setInput(input + e.target.value);
  };

  return (
    <div className="container">
      <div className="calculator">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <br />
        <button value="1" onClick={handleClick}>
          1
        </button>
        <button value="2" onClick={handleClick}>
          2
        </button>
        <button value="3" onClick={handleClick}>
          3
        </button>
        <button value="+" onClick={handleClick}>
          +
        </button>
        <button value="^" onClick={handleClick}>
          ^
        </button>
        <br />
        <button value="4" onClick={handleClick}>
          4
        </button>
        <button value="5" onClick={handleClick}>
          5
        </button>
        <button value="6" onClick={handleClick}>
          6
        </button>
        <button value="-" onClick={handleClick}>
          -
        </button>
        <button value="√" onClick={handleClick}>
          √
        </button>
        <br />
        <button value="7" onClick={handleClick}>
          7
        </button>
        <button value="8" onClick={handleClick}>
          8
        </button>
        <button value="9" onClick={handleClick}>
          9
        </button>
        <button value="*" onClick={handleClick}>
          *
        </button>
        <button value="%" onClick={handleClick}>
          %
        </button>
        <br />
        <button value="C" onClick={handleClick}>
          C
        </button>
        <button value="0" onClick={handleClick}>
          0
        </button>
        <button value="." onClick={handleClick}>
          .
        </button>
        <button value="/" onClick={handleClick}>
          /
        </button>
        <button value="=" onClick={handleClick}>
          =
        </button>
        <br />
        <button value="(" onClick={handleClick}>
          (
        </button>
        <button value=")" onClick={handleClick}>
          )
        </button>
        <br />
      </div>
      <div className="history">
        <History history={history} />
      </div>
    </div>
  );
};

export default App;