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

  render(){
    return(
      <div>
        <EventsForm fetchEvents={this.props.fetchEvents} />
        <br />

        <CardDeck>{this.props.events ?
          this.props.events.map((event) =>
          <Event key={event.id} info={event}
          chk={this.props.faves ? this.props.faves.includes(event.title) : false}
          toggleStar={this.toggleStar}/>)
          : ""}
        </CardDeck>
      </div>
    )
  }


}

export default connect(null, {fetchEvents, createFavorite, deleteFavorite})(EventsContainer);
