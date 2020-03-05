import React, { Component } from 'react';
import './App.css';

import { Content } from './components/Content';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';

class App extends Component {
  render() {
    return (
      <div id="App">
        <Navbar />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
