import React, { Component } from 'react'
import Favorite from '../components/Favorite'
import CardDeck from 'react-bootstrap/CardDeck'
import { connect } from 'react-redux'
import { fetchFavorites, deleteFavorite } from '../actions/FavoriteActions'



class FavoritesContainer extends Component {
  componentDidMount = () => {
      this.props.fetchFavorites();
  }


  render(){
    return(
      <div>
        <h2>Favorites</h2>
        <CardDeck>{this.props.favorites ?
          this.props.favorites.map((favorite) =>
          <Favorite key={favorite.id} info={favorite} delete={this.props.deleteFavorite}/>)
          : <p>Oops, you haven't starred any favorites yet!</p>}
        </CardDeck>
      </div>
    )
  }


}

export default connect(null, {fetchFavorites, deleteFavorite})(FavoritesContainer);
