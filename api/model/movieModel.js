const mongoose = require('mongoose');





const movieSchema = new mongoose.Schema({
		_id:{type:String},
		empName: { type: String },
		empEmail:{type:String},
		empMobile:{type:String},
		file:{type:String}
		
		 
});


const movieModel = mongoose.model('Movie', movieSchema);

module.exports = movieModel;





