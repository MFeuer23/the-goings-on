import React from 'react';

const Event = props => {
  console.log(props)
  return(
    <li>{props.info.title}</li>
  )

}

export default Event;
