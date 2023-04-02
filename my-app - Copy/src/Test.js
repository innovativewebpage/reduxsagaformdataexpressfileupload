/*https://github.com/chinmaykarmokar/react-multipart-form/blob/master/src/components/multiform.js*/

import React,{useState,useEffect} from 'react';

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
	empFile:null,
	empFileName:''
});


const[empFile,setEmpFile]=useState('');
const[empFileName,setEmpFileName]=useState('');


//console.log('employee',employee);

//console.log('empFile',empFile);
//console.log('empFileName',empFileName);
//console.log('employee._id==',employee._id);

//console.log('empId==',empId)
//console.log('empId==',empId.length);
//console.log('edit==',edit)

//console.log('edit==',edit);
//console.log('edit.length==',edit.length);
const dispatch=useDispatch();

const result = Object.keys(employee).length;

//console.log('result==',result);

let employee_data =useSelector((state)=>state.employee);
//console.log('employee_data',employee_data)

//console.log('data==',data);
//console.log('employee_data1==',employee_data1);
/*const employee_data = [
{
	"empName": "sss",
	"empEmail": "sss@gmail.com",
"empMobile": 3434343433,
"empDob": "2022-09-13T18:30:00.000Z"
	
	
}
]*/





   const SaveFile = (e) => 
	{
		//console.log(e.target.files[0]);


setEmployee({ ...employee, 
empFile: e.target.files[0],
empFileName:e.target.files[0].name 
 
 })
	
	
	}

useEffect(()=> {
	//console.log(Object.keys(edit).length);
	
	dispatch(employeeList())
	//if(Object.keys(employee).length > 0)
//{
//setEmpId(edit._id);
//setEmployee({...employee,setEmpId(employee.empId)})
//setEmployee.empId(5)
//setEmployee({...employee,setEmpId:''})
//onChange={(e) => setEmployee({ ...employee, empName: e.target.value })}  
//console.log('ok');
//}
	
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

formData.append('empName',employee.empName);
formData.append('empEmail',employee.empEmail);
formData.append('empMobile',employee.empMobile);
formData.append('empFile',employee.empFile);
//formData.append('empFileName',employee.empFileName);

dispatch(addEmployee(formData));



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
					<label>Submit</label>
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
				<input type='file'    onChange ={SaveFile}/>
				
				</td>
				
				<td>
				
				<button onClick={userSubmit}>{employee._id  ? 'Update':'Submit'}</button>		
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
			
					
					
				{employee_data.users != 'undefined' ?
				employee_data.users.map((data,index) => (
				
				<tbody key={data._id}>	
					<>
						<tr>
							<td>{index+1}</td>
							<td>{data.empName}</td>
							<td>{data.empEmail}</td>
							<td>{data.empMobile}</td>
							<td>{data.empDob}</td>
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
