const express = require('express');
const cors = require('cors');


const app = express();
//var bodyParser = require('body-parser');

const fileUpload = require('express-fileupload')
app.use(fileUpload());


app.use(cors());






const db = require('./db');



app.get('/',function(req,res)
{
		res.send('working');
});




/*const MovieRoutes = require('./routes/movieRoutes');
app.use('/api/movie',MovieRoutes);*/

const TestRoutes = require('./routes/testRoutes');
app.use('/api/test',TestRoutes);

//const EmployeeRoute = require('./routes/employeeRoutes');
//app.use('/api/employee',EmployeeRoute);

var port=process.env.PORT

app.listen(port,function(){
	console.log('server start on port=='+ port );
});

