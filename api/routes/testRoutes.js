const express = require('express')
const router = express.Router();






const Test = require('../model/testModel');




//Get

router.get("/read", async(req,res) => {
	var findEmployee = await Test.find();
res.json(findEmployee);
})




//create
router.post('/create1', async(req,res) => {		
	//console.log('this place==',req.body);
	//console.log('this place==',req.files);
	//console.log('this place==',req.body.empName);
	
	
	/*console.log('req.files.file==',req.files.file)
	console.log('req.files.file==',req.files.file.name)
	console.log('this place==',req.files);
	if(req.files === null || req.files === undefined)
	{
			//console.log(req.files);	
			return res.status(400).json({
					msg:"No File Uploaded"
				})	
	}
	else
	{	
		let target_file = req.files.file;
		var file_name = new Date().getTime()+'_'+target_file.name;
		
		target_file.mv(`D:/react/redux-saga redux-thunk/redux-saga/formdataexpressfileupload/my-app - Copy/public/uploads/${file_name}`,err => {
		if(err)
			{
			return res.status(500).send(err)
			}
		})
		

		const employee = new Test({	
			empName : req.body.empName,
			empEmail : req.body.empEmail,
			empMobile: req.body.empMobile,
			empTest: req.body.empName,
			file:file_name
		});

		const newEmployee = await employee.save();
  
		if(newEmployee) {
		return res
		.status(201)
		.send({ message: 'New Employee Inserted', 
		data: newEmployee });
		}
			return res.status(500).send({ message: ' Error in Inserting Employee.' });
	}
		*/
		
		console.log('this place==',req.files);
		console.log('this place==',req.body);
		
		if(req.files != null || req.files != undefined)
		{
	
		let target_file = req.files.file;
		var file_name = new Date().getTime()+'_'+target_file.name;
		
		target_file.mv(`D:/react/redux-saga redux-thunk/redux-saga/formdataexpressfileupload/my-app - Copy/public/uploads/${file_name}`,err => {
		if(err)
			{
			return res.status(500).send(err)
			}
		})
		}

		const employee = new Test({	
			empName : req.body.empName,
			empEmail : req.body.empEmail,
			empMobile: req.body.empMobile,
			empTest: req.body.empName,
			file:file_name
		});

		const newEmployee = await employee.save();
  
		if(newEmployee) {
		return res
		.status(201)
		.send({ message: 'New Employee Inserted', 
		data: newEmployee });
		}
			return res.status(500).send({ message: ' Error in Inserting Employee.' });
	
		
	});




router.put('/read/:id', async(req,res) => {	
	
//console.log(req.params.id)
	//console.log('req.files.file==',req.files.file)
	//console.log('req.files.file==',req.files.file.name)
	//console.log('this place==',req.files);
//console.log('this place==',req.body);
	
})	

//create

/*router.put('/read/update/:id', async(req,res) => {		
console.log(req.params.id);
	//console.log('this place==',req.body);
	//console.log('this place==',req.files);
	//console.log('this place==',req.body.empName);
	
	/*
	console.log('this place==',req.files);
	console.log('req.files.file==',req.files.file)
	console.log('req.files.file==',req.files.file.name)
	*/
	
	 /*try {
    let updateEmployee = await Test.findById(req.params.id);
    const data = {
		empName : req.body.empName,
		empEmail : req.body.empEmail,
		empMobile: req.body.empMobile
    };
		
	//console.log('staff===',staff)	
		
    updateEmployee= await Test.findByIdAndUpdate(req.params.id, data, { new: true });
    res.json(updateEmployee);
  } catch (err) {
    console.log(err);
  }
	*/
//});


//Delete


router.delete('/read/:id', async (req, res) => {
 
 //console.log(req.params.id);

var deletedEmployee = await Test.findById(req.params.id);
  if (deletedEmployee) {
     deletedEmployee = await deletedEmployee.remove();
   res.json( deletedEmployee );
  } else {
    res.send('Error in Deletion.');
  }
  
});

//Update
	
	
router.put("/read/update/:id",  async (req, res) => {
	//console.log('ok');
	
	
	if(req.files != null || req.files != undefined)
		{
	
		let target_file = req.files.file;
		var file_name = new Date().getTime()+'_'+target_file.name;
		
		target_file.mv(`D:/react/redux-saga redux-thunk/redux-saga/formdataexpressfileupload/my-app - Copy/public/uploads/${file_name}`,err => {
		if(err)
			{
			return res.status(500).send(err)
			}
		})
		}

	
	
	
	
	/*console.log('ddd',req.params.id);
		console.log('this place==',req.body);
console.log('this place==',req.files);
	*/
	
//console.log('this place==',req.files);
		//console.log('this place==',req.body);
	
	 try {
    let updateEmployee = await Test.findById(req.params.id);
    const data = {
		empName : req.body.empName,
		empEmail : req.body.empEmail,
		empMobile: req.body.empMobile,
		file:req.body.file
    };

		
    updateEmployee= await Test.findByIdAndUpdate(req.params.id, data, { new: true });
    res.json(updateEmployee);
  } catch (err) {
    console.log(err);
  }
	
  
});



module.exports = router