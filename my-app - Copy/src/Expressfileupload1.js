


import React,{useState,useEffect,useRef} from 'react';

import {useDispatch,useSelector} from 'react-redux';
import {employeeList,
		deleteEmployee,
		addEmployee,
		updateEmployee} from './Action';
import './App.css';

function App() {


/*const[empId,setEmpId]=useState('');
const[empName,setEmpName]=useState('');
const[empEmail,setEmpEmail]=useState('');
const[empMobile,setEmpMobile]=useState('');
const[edit,setEdit]=useState([]);*/

const [employee, setEmployee] = useState(
{
	_id:'',
	empName:'',
	empEmail:'',
	empMobile:'',
	file:null

});
console.log('employee==',employee)
console.log('employee._id==',employee._id)


const inputRef = useRef(null);

const clear = () => {
	inputRef.current.value = '';
	setEmployee({...employee,
	empName:'',
	empEmail:'',
	empMobile:'',
	file:null
	
	
});	
	
}


//console.log('employee',employee);

/*const[empFile,setEmpFile]=useState('');
const[empFileName,setEmpFileName]=useState('');
*/


const dispatch=useDispatch();

const result = Object.keys(employee).length;




let employee_data=
useSelector((state)=>state.employee);

//console.log(employee_data);

//console.log(Object.keys(employee_data.users).length);

//console.log(typeof employee_data);

//console.log(Object.keys(employee_data.users)[0].type);
/*if(Object.keys(employee_data.users).length > 0)
{
	//console.log(Object.keys(employee_data.users)[0].type);
console.log('employee_data==',employee_data.users[0].type)	
console.log('employee_data==',employee_data.users[0].payload)
}
*/



   const SaveFile = (e) => 
	{
		//console.log(e.target.files[0]);
	setEmployee({ ...employee, 
		file: e.target.files[0]
 })
	}

useEffect(()=> {
	//console.log(Object.keys(edit).length);
	dispatch(employeeList())
	},[])
	
	//console.log('empId==',empId)
//console.log('empId==',empId.length);
//console.log('edit==',edit)
	

const userSubmit = (e) => {
e.preventDefault();

/*console.log('employee.empName==',employee.empName);
console.log('employee.empEmail==',employee.empEmail);
console.log('employee.empMobile==',employee.empMobile);
console.log('employee.empFile==',employee.empFile);
console.log('employee.empFileName==',employee.empFileName);
*/

const formData = new FormData();


formData.append('_id',employee._id);
formData.append('empName',employee.empName);
formData.append('empEmail',employee.empEmail);
formData.append('empMobile',employee.empMobile);
formData.append('file',employee.file);

//console.log('employee._id',employee._id);
//console.log('employee._id',employee._id.length);

if(employee._id.length != '')
{
	console.log('update');
dispatch(updateEmployee(formData,employee._id))	
}	
else
{
	//console.log('insert');
dispatch(addEmployee(formData))
clear();	
}	
//formData.append('empFileName',employee.empFileName);

//dispatch(addEmployee(formData));


//const url = 'http://localhost:5000/api/employee/read/create/'
	//
	/*fetch(url , {
		
		method:'POST',
		
		body: JSON.stringify(...formData)
		
	})
	.then(response => response.json())
	.then(json => console.log(json))
	.catch(e => { console.log("e",e)})
*/





//console.log('user==',user)
//dispatch(addEmployee(employee));
//dispatch(addEmployee(formData));

/*const formData = new FormData();


formData.append('empName',employee.empName);
formData.append('empEmail',employee.empEmail);
formData.append('empMobile',employee.empMobile);
formData.append('empFile',employee.empFile);
formData.append('empFileName',employee.empFileName);

console.log('formData',formData)*/

	//dispatch(employeeInsert(formData));	
		
	//dispatch(addEmployee(formData));			
//console.log(employee._id.length);




//dispatch(addEmployee(employee))	
	/*const user = {
		empName,
		empEmail,
		empMobile
		
	}*/
	
	//console.log('user==',user)
	//console.log('JSON.stringify(user)==',JSON.stringify(user))
	
	/*const url = 'http://localhost:5000/api/employee/read/create1/'
	//http://localhost:5000/api/employee/read/create
	fetch(url , {
		
		method:'POST',
		headers: {'Content-Type':'application/json'},
		
		body: JSON.stringify(user)
		
	})
	.then(response => response.json())
	.then(json => console.log(json))
	.catch(e => { console.log("e",e)})
*/


	//console.log('empId',empId);
	
	/*if(employee._id !== '')
	{
	dispatch(updateEmployee(employee,employee._id))		
	}	
	else
	{
	dispatch(addEmployee(employee))		
	}*/
	
	
}	


	
	
	/*const DeleteEmployee =(id) => {
		console.log('id==',id)
		const deleted = employee_data.users.filter((data)=> data._id != id);
		console.log('deleted',deleted)
	}*/
	
  return (
    <div className="App">
			<p>Ilife</p>
			<form>
			<table border="1" cellPadding="0" cellSpacing="0">
			<thead>
			<tr>
				<th>
					<label>Name</label>
				</th>
				
				<th>
					<label>Email</label>
				</th>
				
				<th>
					<label>Mobile</label>
				</th>
				
					
				<th>
					<label>Pics</label>
				</th>
				
				<th>
					<label>{employee._id.length != '' ?'update':'Submit'}</label>
				</th>
				
			
			</tr>
				
				
				</thead>
				
				
				<tbody>
			<tr>
				<td>
					<label><input type="text" value={employee.empName }
				
		onChange={(e) => setEmployee({ ...employee, empName: e.target.value })}  
	/></label>
					
					
				</td>
				
				<td>
					<label>
					<input type="text" value={employee.empEmail }
			onChange={(e) => setEmployee({ ...employee, empEmail: e.target.value })}  
					
					/>
					
					</label>
				</td>
				
				
		
				<td>
					<label>
					<input type="text" value={employee.empMobile}
				
				onChange={(e) => setEmployee({ ...employee, empMobile: e.target.value })}  
				
					
					/>
					
					</label>
				</td>
				
				<td>
				<input type='file'  
				onChange ={SaveFile}
				ref={inputRef}
				/>
				
				</td>
				
				<td>
				
				<button onClick={userSubmit}>
				
			{employee._id.length != '' ?'update':'Submit'}	
				</button>		
				</td>
				
				
			</tr>
				
				
				</tbody>
				</table>
			</form>
			
			<table border="1">
				<thead>	
					<tr>
						<th>S.No</th>
						<th>Name</th>
						<th>Email</th>
						<th>Mobile</th>
						<th>Date Of Birth</th>
						<th>Edit</th>
						<th>Delete</th>
					</tr>
				
				</thead>
		
		
		{

employee_data.users != 'undefined' ?
				employee_data.users.map((data,index) => (
				
				<tbody key={data._id}>	
					<>
						<tr>
							<td>{index+1}</td>
							<td>{data.empName}</td>
							<td>{data.empEmail}</td>
							<td>{data.empMobile}</td>
							<td style={{width:'10%'}}>
						<td><img style={{ width: '40%' }} src={'/uploads/'+data.file} alt='' />	
</td>	
							
							</td>
		<td><button onClick={()=>setEmployee(data)}>Edit</button></td>					
		<td><button onClick={()=>dispatch(deleteEmployee(data._id))}>Delete</button></td>
				

<td>


		
</td>		
							
						</tr>
					</>	
				</tbody>
				
				)): 'No Data'}
				
				
				
		
			
			</table>
      
    </div>
  );
}

export default App;
