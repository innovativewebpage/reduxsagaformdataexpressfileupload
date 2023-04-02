import {EMPLOYEE_LIST,
EMPLOYEE_LIST_SUCCESS,
EMPLOYEE_LIST_FAILURE,
DELETE_EMPLOYEE,
DELETE_EMPLOYEE_SUCCESS,
DELETE_EMPLOYEE_FAILURE,


ADD_EMPLOYEE,
ADD_EMPLOYEE_SUCCESS,
ADD_EMPLOYEE_FAILURE,


UPDATE_EMPLOYEE,
UPDATE_EMPLOYEE_SUCCESS,
UPDATE_EMPLOYEE_FAILURE,

SET_EMPLOYEE_LIST} from '../constant';
const initalState = {
  users: [],
  loading: false,
  error: null
}
export default function users(state=initalState,action) {
	console.log('action=',action);
	//console.log('state=',state);
  switch (action.type) {
	   
	   case EMPLOYEE_LIST:
		return {
			...state,
			loading: true
		}
	  
	  
    case EMPLOYEE_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
		users: action.payload
      }
	  
	  
	   case EMPLOYEE_LIST_FAILURE:
      return {
        ...state,
        loading: false,
		error: action.message
      }
	 
	 
	 case ADD_EMPLOYEE:
      return {
        ...state,
        loading: true
      }
	  
	  case ADD_EMPLOYEE_SUCCESS:
	  
	  return {
        ...state,
        users: [action.payload,...state.users],
		loading: false
      }
	  
	 
	  case DELETE_EMPLOYEE:
	   
      return {
        ...state,
        loading: true
      }
	  
	  
	   	  case DELETE_EMPLOYEE_SUCCESS:
const del_filter = state.users.filter((data)=>data._id != action.payload);

console.log('del_filter==',del_filter)
	   
      return {
        ...state,
        loading: false,
		
		users:del_filter
		
      }
	  
	  
	  
	  
	  
	  case UPDATE_EMPLOYEE:
	   
      return {
        ...state,
        loading: true
      }
	  

 case UPDATE_EMPLOYEE_SUCCESS:
	  const result = state.users.map((data) => (data._id == action.payload._id) ? action.payload: data)
	  return {
        ...state,
        users: result,
		loading: false
      }



	/* return {
        ...state,
        loading: false,
		users:result
		
      }*/
	  
   
    default:
      return state;
}
}
