import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">


          
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  debugger;
  return {
    eventInfo: state
  }
}

export default connect(mapStateToProps)(App);
