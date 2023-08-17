const getdir = require("../components");
const movie = require("../models/movie.schema");
const mov = async (req, res) => {
  try {
    console.log(req.body);
    await mov.create(req.body);
    res.send("movie details added");
  } catch (error) {
    res.send(error.message);
  }
};

const MovieImage = async (req, res) => {
  let path = getdir();
  await movie.findByIdAndUpdate(req.params.id, {
    image: path + "/" + req.file.path,
  });
  res.send("image added successfully");
};

const getmovietdata = async (req, res) => {
  let data = await movie.find();
  res.send(data);
};

const moviedata = async (req, res) => {
  await movie.create(req.body);
  res.send("done");
};

const updateMovie = async (req, res) => {
    await movie.findByIdAndUpdate(req.params.id, req.body);
    res.send("it's updated");
};

const deleteMovie = async (req, res) => {
    await movie.findByIdAndDelete(req.params.id);
    res.send("it's deleted");
}

module.exports = { mov, MovieImage, getmovietdata,moviedata,updateMovie,deleteMovie };
