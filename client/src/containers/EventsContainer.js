import React, { Component } from 'react'
import Event from '../components/Event'


class EventsContainer extends Component {



  render(){
    {if (this.props.events) {
      return (
        <div>{this.props.events.map((event) =>
          <Event key={event.id} info={event} />
        )} </div>
      )
    } else {
      return (null)
    }}

  }



}

export default EventsContainer;
