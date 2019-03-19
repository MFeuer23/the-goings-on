import React from 'react';
import Card from 'react-bootstrap/Card'


const Event = props => {
  console.log(props)

  return(
    <div>
      <Card bg="secondary" style={{ width: '14rem' }}>

        <Card.Body>
          <Card.Title>
            <input onClick={() => props.delete(props.info.id)}
            id="check" type="checkbox" className="fa fa-star" defaultChecked="true" ></input>
            <br/>
            {props.info.title}
          </Card.Title>
          <br/>
          <Card.Subtitle>{props.info.description}</Card.Subtitle>
          <br/>
          <Card.Link target="_blank" style={{ color: '#8b0000' }} href={props.info.source_url}>Source Link</Card.Link>
          <br/>
          <Card.Footer>{props.info.category}</Card.Footer>
        </Card.Body>

      </Card>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
    </div>
  )

}

export default Event;
