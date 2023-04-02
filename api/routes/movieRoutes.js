const express = require('express')
const router = express.Router();




const Movie = require('../model/movieModel');



router.post('/create1', async(req,res) => {	
	//console.log('ook');
	//console.log(req.files);
	//console.log(req.body);
	
	/*if(req.files === null || req.files === undefined)
	{
			console.log(req.files);		
	}
	*/


	if(req.files === null || req.files === undefined)
	{
			console.log(req.files);	
			return res.status(400).json({
					msg:"No File Uploaded"
				})
			
	}
	else
	{
		
		
		let target_file = req.files.file
		var file_name = new Date().getTime()+'_'+target_file.name
		
		
		
		
		
		target_file.mv(`D:/react/redux-saga redux-thunk/redux-saga/formdataexpressfileupload/api/uploads/${file_name}`,err => {
		if(err)
		{
			return res.status(500).send(err)
		}
		
		const movie = new Movie({	
		empName : req.body.empName,
		empEmail : req.body.empEmail,
		empMobile: req.body.empMobile,
		//releaseDate: req.body.releaseDate,
		file:file_name
		});
		const newMovie =  movie.save();
		
		 if (newMovie) {
    return res
      .status(201)
      .send({ message: 'New Movie Inserted', 
	  data: newMovie });
  }
  return res.status(500).send({ message: ' Error in Inserting Movie.' });
		
		/*res.json({
			fileName:file_name,
			filePath:`./uploads/${file_name}`	
		})
		*/
		
		})
		
		
	}	


});


//create
router.post('/create',async (req,res) => {	
	const movie = new Movie({	
		moviename : req.body.moviename,
		rating : req.body.rating,
		genre: req.body.genre,
		//releaseDate: req.body.releaseDate,
		cast:req.body.cast
  });
  
const newMovie = await movie.save();
  
  if (newMovie) {
    return res
      .status(201)
      .send({ message: 'New Movie Inserted', 
	  data: newMovie });
  }
  return res.status(500).send({ message: ' Error in Inserting Movie.' });

});

//Get
router.get("/read",async (req,res) => {
	var findMovie = await Movie.find();
res.json(findMovie);
})


//Delete
router.delete('/:id', async (req, res) => {
  var deletedMovie = await Movie.findById(req.params.id);
  if (deletedMovie) {
     deletedMovie = await deletedMovie.remove();
   res.json( deletedMovie );
  } else {
    res.send('Error in Deletion.');
  }
  
});

//Edit
router.get('/:id', async (req, res) => {
  const movie = await Movie.findOne({ _id: req.params.id });
  if (movie) {
    res.send(movie);
  } else {
    res.status(404).send({ message: 'movie Not Found.' });
  }
});


//Update
router.put("/:id",  async (req, res) => {
	 try {
    let updateMovie = await Movie.findById(req.params.id);
		
	
	
    const data = {
		moviename : req.body.moviename,
		rating : req.body.rating,
		genre: req.body.genre,
		//releaseDate: req.body.releaseDate,
		cast:req.body.cast
    };
		
    updateMovie = await Movie.findByIdAndUpdate(req.params.id, data, { new: true });
    res.json(updateMovie);
  } catch (err) {
    console.log(err);
  }
	
  
});





module.exports = router