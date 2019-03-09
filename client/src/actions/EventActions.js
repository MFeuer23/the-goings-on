export function fetchEvents(state) {
  console.log(state)
  return (dispatch) => {
    dispatch({ type: 'LOADING_EVENTS', state});
    return fetch(`http://localhost:3001/events/${state}`)
      .then(response => {return response.json() })
      .then(responseJSON => {return responseJSON})
      .then(payload => dispatch({ type: 'FETCH_EVENTS', payload }));
  };
}
