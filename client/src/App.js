import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';

import EventsContainer from './containers/EventsContainer'
import FavoritesContainer from './containers/FavoritesContainer'


class App extends Component {

  faves = (arr1, arr2) => {
    if (arr1 && arr2) {
      let eArray = arr1.map(x => x.title)
      let fArray = arr2.map(x => x.title)
      let matches = [];
      for(let i in eArray) {
          if(fArray.indexOf(eArray[i]) > -1){
              matches.push(eArray[i]);
          }
      }
      return matches;
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-body">

        <br/>
        <EventsContainer events={this.props.eventInfo}
          faves={this.faves(
            this.props.eventInfo,
            this.props.favoriteInfo
          )}
          favorites={this.props.favoriteInfo}
        />
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
