import React from 'react';
import './App.css';

let counter = 0;

const incrementCounter = () => {
  counter++;
}

const Counter = () => (
  <div className="App">
  <div className="App-Header">
    {counter}
    <p className="App-intro">
      <button onClick={incrementCounter}>Click</button>
    </p>
  </div>
  </div>
);

export default Counter;