export function fetchEvents() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_EVENTS' });
    return fetch('http://localhost:3001/events')
      .then(response => {return response.json() })
      .then(responseJSON => {return responseJSON})
      .then(payload => dispatch({ type: 'FETCH_EVENTS', payload }));
  };
}
