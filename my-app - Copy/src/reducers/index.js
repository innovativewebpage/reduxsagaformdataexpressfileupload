import { combineReducers } from "redux";
import Employee from "./employee";
const rootReducer = combineReducers({
 //All reducers will be here
  employee: Employee,
});
export default rootReducer