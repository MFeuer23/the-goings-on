export function fetchEvents(state) {
  console.log(state.category)
  return (dispatch) => {
    dispatch({ type: 'LOADING_EVENTS', state});
    return fetch(`events/${state.category}/${state.status}`, {accept: 'application/json',})
      .then(response => {return response.json() })
      .then(payload => dispatch({ type: 'FETCH_EVENTS', payload }));
  };
}
