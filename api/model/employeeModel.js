const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({		
  empName: { type: String },
  empEmail: { type: String},
  empMobile: { type: Number},

  //empDob: { type:Date, default:Date.now } 
});



const employeeModel = mongoose.model('Employee', employeeSchema);

module.exports = employeeModel;



