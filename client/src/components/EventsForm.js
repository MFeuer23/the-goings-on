import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';

class EventsForm extends Component {
  constructor() {
    super();
    this.state = {
      category: 'all',
      status: 'open'
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.fetchEvents(this.state)
  }

  render(){
    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          Category:
          <select name="category" onChange={this.handleChange}>
            <option value="all">All</option>
            <option value="6">Drought</option>
            <option value="7">Dust and Haze</option>
            <option value="16">Earthquakes</option>
            <option value="9">Floods</option>
            <option value="14">Landslides</option>
            <option value="19">Manmade</option>
            <option value="15">Sea and Lake Ice</option>
            <option value="10">Severe Storms</option>
            <option value="17">Snow</option>
            <option value="18">Temperature Extremes</option>
            <option value="12">Volcanoes</option>
            <option value="13">Water Color</option>
            <option value="8">Wildfires</option>
          </select>
          <br />
          Status:
          <select name="status" onChange={this.handleChange}>
            <option value="open">Ongoing</option>
            <option value="closed">Past</option>
          </select>
          <br />
          <Button variant="outline-danger" type="submit">Submit</Button>
        </form>

      </div>
    )
  }

}

export default EventsForm;
