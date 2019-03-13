import React, { Component } from 'react'
import Event from '../components/Event'
import CardDeck from 'react-bootstrap/CardDeck'



class EventsContainer extends Component {



  render(){
    {if (this.props.events) {
      return (
        <CardDeck>{this.props.events.map((event) =>
          <Event key={event.id} info={event} />
        )} </CardDeck>
      )
    } else {
      return (null)
    }}

  }



}

export default EventsContainer;
