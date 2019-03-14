import React from 'react';
import './App.css';
import Counter from './Counter';

const App = () => (

      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{new Date(Date.now()).toLocaleTimeString()}</h1>
          {Counter()}
        </header>
      </div>
    );

export default App;
