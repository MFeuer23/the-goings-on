function eventsReducer(state = {
  loading: false,
  favoritesData: []

}, action) {
  switch (action.type) {
    case "CREATE_FAVORITE":
      console.log(action)
      return {...state, favoritesData: [...state.favoritesData, action.payload]}

    case "LOADING_FAVORITES":
      console.log(action)
      return {...state, loading: true, favoritesData:[], }

    case "FETCH_FAVORITES":
              // debugger
      console.log(action)
      return {...state, loading:false, favoritesData: action.payload}

    default:
      return state
  }
}

export default eventsReducer;
