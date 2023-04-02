

import axios from "axios";

import {takeEvery,takeLatest,put,call} from 'redux-saga/effects';
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


const apiUrl = 'http://localhost:5000/api/test/read';


function getApiData() {
 return fetch(apiUrl).then(response => response.json().catch(error => error));
}




function getApiAxiosData()
{
return axios.get(apiUrl)			
}







/*
function* getEmployee() {	
 try {
  const users = yield call(getApiData);
 // console.log(users); 
  yield put({ type: EMPLOYEE_LIST_SUCCESS, payload: users });
 } catch (error) {
  yield put({ type: EMPLOYEE_LIST_FAILURE, message: error.message });
 }
}
*/


function* getEmployee() {	
 try {
  const users = yield call(getApiAxiosData);
  console.log(users);
  yield put({ type: EMPLOYEE_LIST_SUCCESS, payload: users.data });
 } catch (error) {
  yield put({ type: EMPLOYEE_LIST_FAILURE, message: error.message });
 }
}


function* deleteEmployees(data) {
	
	console.log('data==',data);
	

	
	function getApiAxiosData()
	{	
		return axios.delete(`http://localhost:5000/api/test/read/${data.query}`)
	}
	




	try {
  const deletedusers = yield call(getApiAxiosData);
 console.log('deletedusers',deletedusers); 
  yield put({ type: DELETE_EMPLOYEE_SUCCESS, payload: deletedusers.data._id });
 } catch (error) {
  yield put({ type: DELETE_EMPLOYEE_FAILURE, message: error.message });
 }
	
	
	//console.log('deletedusers==',deletedusers)
	
	/*const deleteurl = apiUrl + '/' + data.query;
	
	console.log('deleteurl==',deleteurl)
	
	function getApiAxiosData()
	{
		return axios.post(deleteurl)			
	}
	
	const deletedusers = yield call(getApiAxiosData);
	console.log('deletedusers==',deletedusers);*/
/*
const getApiData =() => {
	
	 return fetch(deleteurl,{method:'DELETE'})
	.then(response => response.json()
	.catch(error => error));
		}
*/

//const deletedusers = yield call(getApiData);
 //console.log('deletedusers',deletedusers); 
 //yield put({ type: DELETE_EMPLOYEE_SUCCESS, payload:deletedusers._id });

/*try {
  const deletedusers = yield call(getApiAxiosData);
 console.log('deletedusers',deletedusers); 
  yield put({ type: DELETE_EMPLOYEE_SUCCESS, payload: deletedusers._id });
 } catch (error) {
  yield put({ type: DELETE_EMPLOYEE_FAILURE, message: error.message });
 }
 */



}
 	
function* addEmployees(data) {
		function getApiAxiosData()
		{
			return axios.post('http://localhost:5000/api/test/create1',data.payload)
		}	

//console.log(getApiAxiosData());



try {
 const add_new_users = yield call(getApiAxiosData);
 //console.log(add_new_users); 
  yield put({ type:ADD_EMPLOYEE_SUCCESS, payload: add_new_users.data.data });
 } catch (error) {
  yield put({ type: ADD_EMPLOYEE_FAILURE, message: error.message });
 }
	/*axios.post('http://localhost:5000/api/test/create1',data.payload).then(response => {
         
		// console.log(response);
		 yield put({ type:ADD_EMPLOYEE_SUCCESS, payload: response.data.data });
		 
        }).catch(err => console.error(err));
	*/
	
	
	//const add_new_users = yield call(result);
 //console.log(add_new_users);
	
	//console.log(data);
  
		/*const options = {
            method: 'POST',
			body:data.payload
		};*/
		
		
		
		
		/*const options = {
            method: 'POST',
			headers: { 'content-type': 'multipart/form-data' },
            body: formData
        };*/
		
		//console.log(options);
		
	/*const res = fetch('http://localhost:5000/api/movie/create1', options)
	.then(res => res.json())
	.then(json => {console.log(json)})
	*/
	
	/*axios.post('http://localhost:5000/api/test/create1',data.payload)
	
	.then(res => {
		//console.log(res.data.data);
		 put({ type:ADD_EMPLOYEE_SUCCESS, payload: res.data.data });	
	})
	
	.catch(error => {
		//console.log(err)
	  put({ type: ADD_EMPLOYEE_FAILURE, message: error.message });	
		
	})
	
	*/
	
	
	
	/*const res = fetch('http://localhost:5000/api/movie/create1', options)
	*/
  
 /*

 yield call(axios.post, 
 "http://localhost:5000/api/movie/create1", data.payload);
 

try {
 const add_new_users = yield call(getApiAxiosData);
 console.log(add_new_users); 
  yield put({ type:ADD_EMPLOYEE_SUCCESS, payload: data.payload });
 } catch (error) {
  yield put({ type: ADD_EMPLOYEE_FAILURE, message: error.message });
 }
 
 */
 
/*
const createurl = apiUrl + '/create/' ;

const getApiData =() => {
	
		return fetch(createurl,{ method:'POST',
		 headers: 
		 
		 {
    'Accept': 'application/json, application/xml, text/plain, text/html, *.*'
  },
					body: data.payload
				})
			.then(response => response.json().catch(error => error))		
			
		}
		
		//const add_new_users = yield call(getApiData);
	



	
try {
 const add_new_users = yield call(getApiData);
 console.log(add_new_users); 
  yield put({ type:ADD_EMPLOYEE_SUCCESS, payload: add_new_users.data });
 } catch (error) {
  yield put({ type: ADD_EMPLOYEE_FAILURE, message: error.message });
 }


	*/	
		 
}
	
function* updateEmployees(data) {
console.log(data.payload.id);

//var a=data.payload._id;

			function getApiAxiosData()
		{	
return axios.put(`http://localhost:5000/api/test/read/update/${data.payload.id}`,data.payload.data)
		}
	


	





		//const add_new_users = yield call(getApiAxiosData);

	try {

 const update_new_users = yield call(getApiAxiosData);
  console.log(update_new_users); 
  yield put({ type: UPDATE_EMPLOYEE_SUCCESS, payload: update_new_users.data });
 } catch (error) {
  yield put({ type: UPDATE_EMPLOYEE_FAILURE, message: error.message });
 }

 //console.log(add_new_users); 

/*function getApiAxiosData()
		{
	return axios.put`http://localhost:5000/api/test/read/update/${data.payload.id}`}	
		
	
	
		
const add_new_users = yield call(getApiAxiosData);
 console.log(add_new_users); 
*/
	/*const createurl = apiUrl + '/update/'+data.payload.id ;


	
	
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
 }*/
 
 
}






function* employeeSaga()
{
yield takeLatest(EMPLOYEE_LIST,getEmployee);
yield takeLatest(DELETE_EMPLOYEE,deleteEmployees);
yield takeLatest(ADD_EMPLOYEE,addEmployees);
yield takeLatest(UPDATE_EMPLOYEE,updateEmployees);
}

export default employeeSaga;	



