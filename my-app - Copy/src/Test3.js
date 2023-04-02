import React from 'react';
import Axios from 'axios';


const App = () => {

	let formData = new FormData();

const onFileChange = (e) => {

	//console.log(e.target.files[0])
	
		if(e.target && e.target.files[0])
		{
			formData.append('file',e.target.files[0]);

		}

}

const submitFileData = () => {
	
Axios.post(`http://localhost:5000/api/employee/read/create`,{formData})
.then(res => {
	console.log(res)
})
	
}
	

return(

		<div className="App">
				<div>
					<input type="file" name="file_upload"
						onChange={onFileChange}/>
				</div>
				<div>

				<button onClick={submitFileData}>Submit Data</button>
				</div>

		</div>

)


}

export default App;