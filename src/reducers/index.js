import { combineReducers } from "redux";
import userReducer from "./userReducer"
import furnitureReducer from "./furnitureReducer";

export default combineReducers({
    furniture:furnitureReducer
})