import React, { Component } from 'react'
import Event from '../components/Event'
import CardDeck from 'react-bootstrap/CardDeck'
import EventsForm from '../components/EventsForm'
import { connect } from 'react-redux'
import { fetchEvents } from '../actions/EventActions'
import { createFavorite } from '../actions/FavoriteActions'


class EventsContainer extends Component {



  render(){
    return(
      <div>
        <EventsForm fetchEvents={this.props.fetchEvents} />
        <br />
        <CardDeck>{this.props.events ?
          this.props.events.map((event) =>
          <Event key={event.id} info={event} createFavorite={this.props.createFavorite}/>)
          : ""}
        </CardDeck>
      </div>
    )
  }


}

export default connect(null, {fetchEvents, createFavorite})(EventsContainer);
