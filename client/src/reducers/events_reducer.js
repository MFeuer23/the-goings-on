function eventsReducer(state = { loading: false, articles: [] }, action) {
  switch (action.type) {
    case "LOADING_EVENTS":
      return { loading: true, articles: []}
    case "FETCH_EVENTS":
      return { loading: false, articles: action.payload}
    default:
      return state
  }
}

export default eventsReducer;
