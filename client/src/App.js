import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';

import EventsContainer from './containers/EventsContainer'
import FavoritesContainer from './containers/FavoritesContainer'
import NavBar from './components/Navbar'
import About from './components/About'
import Header from './components/HeaderImg'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { fetchFavorites } from './actions/FavoriteActions'


class App extends Component {
  componentDidMount = () => {
      this.props.fetchFavorites();
  }

  render() {
    return (
      <Router>
        <div className="App App-body">
          <Header />
          <NavBar />
          <br/>
          <Route exact path="/" component={EventsContainer}/>
          <Route exact path="/favorites" component={FavoritesContainer}/>
          <Route exact path="/about" component={About}/>
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
            integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
            crossOrigin="anonymous"
          />
        </div>
      </Router>
    );
  }
}

export default connect(null, { fetchFavorites })(App);
