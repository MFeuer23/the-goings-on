function eventsReducer(state = {
  loading: false,
  events: []

}, action) {
  switch (action.type) {
    case "LOADING_EVENTS":
    console.log(action)
      return {...state, loading: true}
    case "FETCH_EVENTS":
    console.log(action)
      return { loading: false, events: action.payload}

    default:
      return state
  }
}

export default eventsReducer;
