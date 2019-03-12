import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
import EventsForm from './EventsForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <EventsForm />


        </header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    eventInfo: state
  }
}

export default connect(mapStateToProps)(App);
