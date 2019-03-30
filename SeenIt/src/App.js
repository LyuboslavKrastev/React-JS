import React, { Component } from 'react';
import './App.css';
import Header from './components/common/Header';
import Notification from './components/common/Notification';

import AppRouter from './components/routing/Router';
import './style/site.css'

class App extends Component {
  render() {
    return (
      <div className="App">
      <main className="content">
        <Header/>
        <Notification/>
        <AppRouter/>
      </main>
      </div>
    );
  }
}

export default App;
