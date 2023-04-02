const express = require('express')
const router = express.Router();
const multer = require('multer');
const path = require('path');
const {v4:uuidv4} = require('uuid');


const Employee = require('../model/employeeModel');




const storage = multer.diskStorage({
	destination :function(req,file,cb)
	{
		cb(null,'images');
	},
	filename:function(req,file,cb)
	{
		cb(null,uuidv4() + '-' +Date.now()+path.extname(file.originalname));
	}
});

const fileFilter = (req,file,cb) => {
	const allowedFileTypes = ['image/jpeg','image/jpg','image/png','application/pdf'];
	
	if(allowedFileTypes.includes(file.mimetype)){
		cb(null,true);
	}
	else
	{
		cb(null,false);
	}
}

let upload = multer({storage,fileFilter});



//Get

router.get("/read", async(req,res) => {
	var findEmployee = await Employee.find();
res.json(findEmployee);
})


router.post('/read/create',upload.single('file'), async (req,res) => {		
	console.log('this place==',req.body);
	//console.log('this place==',req.files.file);
	//console.log('this place==',req.body.empName);
	
	
});



//create
router.post('/read/create', async (req,res) => {		
	console.log('this place==',req.body);
	console.log('this place==',req.files);
	console.log('this place==',req.body.empName);
	
	const employee = new Employee({	
		empName : req.body.empName,
		empEmail : req.body.empEmail,
		empMobile: req.body.empMobile
		//empDob:req.body.empDob
	});


  
const newEmployee = await employee.save();
  
  if (newEmployee) {
    return res
      .status(201)
      .send({ message: 'New Employee Inserted', 
	  data: newEmployee });
  }
  return res.status(500).send({ message: ' Error in Inserting Employee.' });


});


//Delete
router.delete('/read/:id', async (req, res) => {
 
 //console.log(req.params.id);
 
var deletedEmployee = await Employee.findById(req.params.id);
  if (deletedEmployee) {
     deletedEmployee = await deletedEmployee.remove();
   res.json( deletedEmployee );
  } else {
    res.send('Error in Deletion.');
  }
  
});

//Update
router.put("/read/update/:id",  async (req, res) => {
	 try {
    let updateEmployee = await Employee.findById(req.params.id);
    const data = {
		empName : req.body.empName,
		empEmail : req.body.empEmail,
		empMobile: req.body.empMobile,
		empDob:req.body.empDob
    };
		
	//console.log('staff===',staff)	
		
    updateEmployee= await Employee.findByIdAndUpdate(req.params.id, data, { new: true });
    res.json(updateEmployee);
  } catch (err) {
    console.log(err);
  }
	
  
});



module.exports = router