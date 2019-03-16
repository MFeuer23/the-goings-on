import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';

import EventsContainer from './containers/EventsContainer'
import FavoritesContainer from './containers/FavoritesContainer'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-body">

        <br/>
        <EventsContainer events={this.props.eventInfo}/>
        <FavoritesContainer favorites={this.props.favoriteInfo}/>

        </header>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
          integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
          crossOrigin="anonymous"
        />
      </div>

    );
  }
}

const mapStateToProps = state => {
  return {
    eventInfo: state.events.data.events,
    favoriteInfo: state.favorites.favoritesData
  }
}

export default connect(mapStateToProps)(App);
