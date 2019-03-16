function eventsReducer(state = {
  loading: false,
  favoritesData: []

}, action) {
  switch (action.type) {
    case "CREATE_FAVORITE":
    console.log(action)
      return {...state, favoritesData: [...state.favoritesData, action.payload]}

    default:
      return state
  }
}

export default eventsReducer;
