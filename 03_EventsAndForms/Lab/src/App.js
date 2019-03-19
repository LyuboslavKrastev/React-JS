import React, { Component } from 'react';
import './App.css';
import Button from './components/button';
import RegisterForm from './components/registerform';
import Container from './components/container';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button action="clicked"/>
        <RegisterForm/>
        <Container/>
      </div>
    );
  }
}

export default App;
