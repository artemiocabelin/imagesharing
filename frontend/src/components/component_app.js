import React, { Component } from 'react';
import '../styles/App.css';
import Header from './component_header'
import Footer from './component_footer'
import Main from './component_main'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
