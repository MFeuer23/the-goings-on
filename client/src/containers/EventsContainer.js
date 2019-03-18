import React, { Component } from 'react'
import Event from '../components/Event'
import CardDeck from 'react-bootstrap/CardDeck'
import EventsForm from '../components/EventsForm'
import { connect } from 'react-redux'
import { fetchEvents } from '../actions/EventActions'
import { createFavorite, deleteFavorite } from '../actions/FavoriteActions'


class EventsContainer extends Component {

  toggleStar = (event, title, description, category, source_url) => {
    if (event.target.checked) {
      this.props.createFavorite(title, description, category, source_url)
    } else {
      this.props.deleteFavorite(
        this.props.favorites.find(favorite => favorite.title === title).id
      )
    }
  }

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

  render(){
    return(
      <div>
        <EventsForm fetchEvents={this.props.fetchEvents} />
        <br />

        <CardDeck>{this.props.events ?
          this.props.events.map((event) =>
          <Event key={event.id} info={event}
          chk={this.props.favorites ?
            this.faves(this.props.events, this.props.favorites).includes(event.title)
            : false}
          toggleStar={this.toggleStar}/>)
          : ""}
        </CardDeck>
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    events: state.events.data.events,
    favorites: state.favorites.favoritesData
  }
}

export default connect(mapStateToProps, {fetchEvents, createFavorite, deleteFavorite})(EventsContainer);
