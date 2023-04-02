/*import { all } from "redux-saga/effects";
import userSaga from "./userSaga";
export default function* rootSaga() {
 yield all([userSaga()]);
}*/

import axios from "axios";

import {takeEvery,put,call} from 'redux-saga/effects';
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


const apiUrl = 'http://localhost:5000/api/employee/read';

/*fetch(apiUrl)
.then((ilife) =>  {
		return ilife.json();	
})
.then((data) => {
	console.log('data==',data);
})	*/

/*.then((response) => {console.log('response=',response.json())})
.then((data) => { 
console.log(data);

})*/



function getApiData() {
 return fetch(apiUrl).then(response => response.json().catch(error => error));
}


//console.log('getApiData==',getApiData())
//console.log(yield call(getApiData()));

function* getEmployee() {
	//console.log('action==',action)
	
 try {
  const users = yield call(getApiData);
 // console.log(users); 
  yield put({ type: EMPLOYEE_LIST_SUCCESS, payload: users });
 } catch (error) {
  yield put({ type: EMPLOYEE_LIST_FAILURE, message: error.message });
 }
}

/*function* userSaga() {
 yield takeEvery('GET_USERS_REQUESTED', fetchUsers);
}*/

function* deleteEmployees(data) {
	//console.log(data);
	
	const deleteurl = apiUrl + '/' + data.query;
	
	/*function getApiData() {
 return fetch(deleteurl,{method:'DELETE'})
 .then(response => response.json()
 .catch(error => error));
}*/

const getApiData =() => {
	
	 return fetch(deleteurl,{method:'DELETE'})
	.then(response => response.json()
	.catch(error => error));
		}
const deletedusers = yield call(getApiData);
console.log('deletedusers',deletedusers); 

/*try {
  const deletedusers = yield call(getApiData);
 console.log('deletedusers',deletedusers); 
  yield put({ type: DELETE_EMPLOYEE_SUCCESS, payload: deletedusers._id });
 } catch (error) {
  yield put({ type: DELETE_EMPLOYEE_FAILURE, message: error.message });
 }
 
}

	
	//const deletedusers = yield call(getApiData);
	//console.log('getApiData==',getApiData())
//console.log('deleted users',users)
/*
console.log(deleteurl)

fetch(deleteurl,{method:'DELETE'})

.then((response) =>  {
		return response.json();
		//console.log(response);	
})
*/



	//yield put({type:'ilife',payload:data.query})
/*fetch(deleteurl,{method:'DELETE'})

.then((response) =>  {
		return response.json();	
})

.then((data) => {
	console.log('data==',data);
})
*/


/*.then((response) => {console.log('response=',response.json())})
.then((data) => { 
console.log(data);

})
	
	//console.log('data==',data)
	//const result = axios.delete(`http://localhost:5000/api/employee/read/${data.query}`)
	//console.log(result);
	 
	//const url =apiUrl+'/'+data.query;
	//console.log('url==',url);
	//const resourceType='631a0d50a5e3a960c7662fab';
	
	
	
	/*
	fetch('http://localhost:5000/api/employee/read/'+data.query,
	{
		
		method:'DELETE'
		 
		
		})
		.then((response)=> {
			if(!response.ok)
			{
					throw new Error('Something went wrong');
			}	
			return response.json()
		})
		.catch((e) => {
			console.log(e);
		});
	
	*/
	//console.warn("get product saga called");
	//console.log('data==',data);
	
	//const data = apiUrl.'/$data';
	//const {data} = await axios.delete(`/api/employee/${id}`);
	//console.log();
	
	//fetch(apiUrl/data, { method: 'DELETE' })
	//.then(response => response.json().catch(error => error))
	//let result = yield fetch(`http://localhost:3500/products?q=${data.query}`);
	//result =  yield result.json();
	//console.warn('action is called',data)
	//yield put({type:SET_PRODUCT_LIST,data:result})
	
function* addEmployees(data) {
//console.log(data);

//http://localhost:5000/api/employee/read
const createurl = apiUrl + '/create/' ;
//const url = 'http://localhost:5000/api/employee/read/create1/'

//console.log('createurl==',createurl);


/*const getApiData =() => {
	
	 return fetch(deleteurl,{method:'DELETE'})
	.then(response => response.json()
	.catch(error => error));
		}*/

const getApiData =() => {
	
		return fetch(createurl,{ method:'POST',
		 headers: {'Content-Type':'application/json'},
					body: JSON.stringify(data.payload)
				})
			.then(response => response.json().catch(error => error))		
			
		}
		
		const add_new_users = yield call(getApiData);
	



	
try {
 const add_new_users = yield call(getApiData);
 console.log(add_new_users); 
  yield put({ type:ADD_EMPLOYEE_SUCCESS, payload: add_new_users.data });
 } catch (error) {
  yield put({ type: ADD_EMPLOYEE_FAILURE, message: error.message });
 }


		
		 //console.log(add_new_users);
		 
		 
		 /*try {
 const add_new_users = yield call(getApiData);
 // console.log(users); 
  yield put({ type: DELETE_EMPLOYEE_SUCCESS, payload: deletedusers._id });
 } catch (error) {
  yield put({ type: DELETE_EMPLOYEE_FAILURE, message: error.message });
 }
 
 
 */

/*
fetch(createurl,{
		method:'POST',
		headers: {'Content-Type':'application/json'},
		body: JSON.stringify(data.payload)
	})
	.then(response => response.json())
	.then(json => console.log(json))
	.catch(e => { console.log("e",e)})
	
	*/

/*
const getApiData =() => {
	
	 return fetch(createurl,
	 {
		 method:'POST',
		 body:JSON.stringify(data.payload)
	 }
	 
	 )
	.then(response => response.json()
	.catch(error => error));
		}
		
	const users = yield call(getApiData);	
	
	console.log('users',users);
*/
/*
try {
  const deletedusers = yield call(getApiData);
 // console.log(users); 
  yield put({ type: DELETE_EMPLOYEE_SUCCESS, payload: deletedusers._id });
 } catch (error) {
  yield put({ type: DELETE_EMPLOYEE_FAILURE, message: error.message });
 }
 
 */
}
	
function* updateEmployees(data) {
	//console.log(data);
	//console.log(data.payload.id);
	const createurl = apiUrl + '/update/'+data.payload.id ;
	//console.log(createurl);
	
	
const getApiData =() => {
	
		return fetch(createurl,{ method:'PUT',
		 headers: {'Content-Type':'application/json'},
					body: JSON.stringify(data.payload.name)
				})
			.then(response => response.json().catch(error => error))		
			
		}
		
		
		
		//console.log(add_new_users);
		
		try {

 const update_new_users = yield call(getApiData);
 // console.log(users); 
  yield put({ type: UPDATE_EMPLOYEE_SUCCESS, payload: update_new_users });
 } catch (error) {
  yield put({ type: UPDATE_EMPLOYEE_FAILURE, message: error.message });
 }
}






function* employeeSaga()
{
yield takeEvery(EMPLOYEE_LIST,getEmployee);
yield takeEvery(DELETE_EMPLOYEE,deleteEmployees);
yield takeEvery(ADD_EMPLOYEE,addEmployees);
yield takeEvery(UPDATE_EMPLOYEE,updateEmployees);
}

export default employeeSaga;	



