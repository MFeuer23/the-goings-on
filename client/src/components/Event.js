import React from 'react';
import Card from 'react-bootstrap/Card'


const Event = props => {
  console.log(props)

  return(
    <div>
      <Card bg="secondary" style={{ width: '14rem', height: '20rem', margin: '10px'}}>

        <Card.Body>
          <Card.Title>
            <input defaultChecked={props.chk}
              onClick={(event) => props.toggleStar(
              event,
              props.info.title,
              props.info.description,
              props.info.categories[0].title,
              props.info.sources[0].url
            )} id="check" type="checkbox" className="fa fa-star"></input>
            <br/>
            {props.info.title}
          </Card.Title>
          <br/>
          <Card.Subtitle style={{ height: '4rem', overflowY: 'auto' }}>{props.info.description}</Card.Subtitle>

          <Card.Link target="_blank" style={{ color: '#8b0000' }} href={props.info.sources[0].url}>Source Link</Card.Link>
          <br/>
          <Card.Footer>{props.info.categories[0].title}</Card.Footer>
        </Card.Body>

      </Card>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
    </div>
  )

}

export default Event;
