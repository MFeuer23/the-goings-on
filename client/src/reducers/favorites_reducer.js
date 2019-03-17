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
      console.log(action)
      return {...state, loading:false, favoritesData: action.payload}

    case "DELETE_FAVORITE":
      console.log(action)
      return {...state, loading: false,
      favoritesData: state.favoritesData.filter(
        favorite => favorite.id !== action.payload.id
        )
      }

    default:
      return state
  }
}

export default eventsReducer;
