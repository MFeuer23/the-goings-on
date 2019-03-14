import React from 'react';
import Card from 'react-bootstrap/Card'
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'
import Button from 'react-bootstrap/Button'
import '../App.css'


const Event = props => {
  console.log(props)
  return(
    <div>
      <Card bg="secondary">

        <Card.Body>
          <Card.Title>
            <input id="check" type="checkbox" class="fa fa-star"></input>
            <br/>
            {props.info.title}
          </Card.Title>
          <Card.Text>{props.info.description}</Card.Text>
          <ResponsiveEmbed>
            <embed type="image/svg+xml" src={props.info.sources[0].url} />
          </ResponsiveEmbed>
        </Card.Body>

      </Card>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
    </div>
  )

}

export default Event;
