import { combineReducers } from "redux";
import catsReducer from "./cats_reducer"

const rootReducer = combineReducers({
  events: eventsReducer
})

export default rootReducer;
