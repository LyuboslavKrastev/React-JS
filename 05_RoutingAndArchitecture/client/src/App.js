import React, { Component } from 'react';
import './App.css';
import Navigation from './components/navigation'
import Footer from './components/footer'
import AppRouter from './AppRouter'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation/>
          <AppRouter/>
        <Footer/>
      </div>
    );
  }
}

export default App;
