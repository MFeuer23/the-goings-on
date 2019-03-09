import React, { Component } from 'react'

class EventsForm extends Component {
  constructor() {
    super();
    this.state = {
      category: '',
      ongoing: ''
    }
  }

  render(){
    return (
      <form>
        Category:
        <select name="category">
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


      </form>
    )
  }

}

export default EventsForm;
