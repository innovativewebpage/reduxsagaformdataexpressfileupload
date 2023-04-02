import {EMPLOYEE_LIST,DELETE_EMPLOYEE,ADD_EMPLOYEE,UPDATE_EMPLOYEE} from '../constant';

export const employeeList =  () => {
	//first checking
		//let data ="Hello,How are you";
	//let data = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
	//data = await data.json();
	//console.warn('action is called');
	return {
		type:EMPLOYEE_LIST
		 //data:"apple"
		}
}


export const deleteEmployee =  (id) => {

		return {
		type:DELETE_EMPLOYEE,
		query:id,
		}

}


export const addEmployee =  (data) => {

//console.log(data);

		return {
		type:ADD_EMPLOYEE,
		payload:data,
		}

}

export const updateEmployee = (data,id) => {
	
	return {
		type:UPDATE_EMPLOYEE,
		payload:{data:data,id:id},
		//payload:data
		}
	
}


