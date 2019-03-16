import { combineReducers } from "redux";
import eventsReducer from "./events_reducer"
import favoritesReducer from './favorites_reducer'

const rootReducer = combineReducers({
  events: eventsReducer,
  favorites: favoritesReducer
})

export default rootReducer;
