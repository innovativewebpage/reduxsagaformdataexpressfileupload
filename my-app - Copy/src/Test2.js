import React,{useState,useEffect} from 'react';



import './App.css';

function App() {


const[empName,setEmpName]=useState('');
const[empEmail,setEmpEmail]=useState('');
const[empMobile,setEmpMobile]=useState('');







	

const userSubmit = (e) => {
e.preventDefault();
/*console.log('empName==',empName)
console.log('empEmail',empEmail)
console.log('empMobile',empMobile)*/
const users = {
	empName,
	empEmail,
	empMobile
	
}

console.log(users);

const formData = new FormData();
formData.append('empName',empName);
formData.append('empEmail',empEmail);
formData.append('empMobile',empMobile);

 const options = {
            method: 'POST',
            body: JSON.stringify(formData),
			headers: {'Content-Type':'multipart/form-data'}
			
	
        };

console.log(options)

fetch('http://localhost:5000/api/employee/read/create' ,options
	)

/*fetch('http://localhost:5000/api/employee/read/create' ,{
	method:'POST',
	headers: {'Content-Type':'application/json'},
	body: JSON.stringify(users)}
	)*/

//fetch('http://localhost:5000/api/employee/read/create', users);


}	



	
	
	
	
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
					<label><input type="text" value={empName }
				
		onChange={(e)=>setEmpName(e.target.value)}  
	/></label>
					
	


				</td>
				
				<td>
					<label>
					<input type="text" value={empEmail }
			onChange={(e)=>setEmpEmail(e.target.value)} 
					
					/>
					
					</label>
				</td>
				
				
		
				<td>
					<label>
					<input type="text" value={empMobile}
				
				onChange={(e)=>setEmpMobile(e.target.value)}  
				
					
					/>
					
					</label>
				</td>
				
			
			
				
				<td>
				
				<button onClick={userSubmit}>SUBMIT</button>		
				</td>
				
				
			</tr>
				
				
				</tbody>
				</table>
			</form>
			
			   </div>
  );
}

export default App;
