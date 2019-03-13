import React from 'react';
import Card from 'react-bootstrap/Card'
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'


const Event = props => {
  console.log(props)
  return(
    <Card bg="secondary">
      <Card.Body>
        <Card.Title>{props.info.title}</Card.Title>
        <Card.Text>{props.info.description}</Card.Text>
        <ResponsiveEmbed>
          <embed type="image/svg+xml" src={props.info.sources[0].url} />
        </ResponsiveEmbed>
      </Card.Body>

    </Card>
  )

}

export default Event;
