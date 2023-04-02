import {EMPLOYEE_LIST,SET_EMPLOYEE_LIST} from '../constant';
const initalState = {
  users: [],
  loading: false,
  error: null
}
export default function users(state = initalState, action) {
	console.log(action);
	
  switch (action.type) {
	   case 'GET_USERS_SUCCESS':
      return {
        ...state,
        loading: false,
		users: action.users
		
      }
	  
	  
    case SET_EMPLOYEE_LIST:
      return {
        ...state,
        loading: false,
		users: action.data
		
      }
   
    default:
      return state;
  }
}
