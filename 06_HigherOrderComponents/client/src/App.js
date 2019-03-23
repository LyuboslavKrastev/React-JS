import React, { Component } from 'react';
import './App.css';
import Other from './components/other';
import Home from './components/home';
import ComponentWithData from './components/componentWithData';
import request from './helpers/requester'

class App extends Component {
  render() {
    return (
      <div className="App">
         <Home message="My message"/>
         <Other detailed={true}/>
         <ComponentWithData request={request}/>
      </div>
    );
  }
}

export default App;
