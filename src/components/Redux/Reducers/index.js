import { combineReducers } from "redux";
import games from './gamesReducer';
import auth from "./authReducer";
import gameDetails from "./gameDetailsReducer";

export default combineReducers({
games,
auth,
gameDetails

})