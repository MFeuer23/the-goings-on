import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
import EventsForm from './EventsForm'
import EventsContainer from './containers/EventsContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <EventsForm />
        <EventsContainer events={this.props.eventInfo}/>


        </header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  debugger;
  return {
    eventInfo: state.events.data.events
  }
}

export default connect(mapStateToProps)(App);
