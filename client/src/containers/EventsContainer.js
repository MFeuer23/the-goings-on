import React, { Component } from 'react'
import Event from '../components/Event'
import CardDeck from 'react-bootstrap/CardDeck'
import EventsForm from '../EventsForm'


class EventsContainer extends Component {



  render(){
    return(
      <div>
        <EventsForm />
        <br />
        <CardDeck>{this.props.events ? this.props.events.map((event) =>
          <Event key={event.id} info={event} />
        ) : ""} </CardDeck>
      </div>
    )
  }


}

export default EventsContainer;
