const { Router } = require("express");
// const{std}=require("../controllers/students.controlers")
const MovieController = require("../controllers/students.controlers");
const { check } = require("../middleware/students.middleware");
const multer = require("multer");
let router = Router();

let storage = multer.diskStorage({
  destination: "images",
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({
  storage: storage,
}).single("profile");

router.post("/image", upload,MovieController.MovieImage);

router.get("/",MovieController.getmovietdata=()=> {
  res.render("home");
});
router.post("/",MovieController.moviedata=()=> {
  res.send("done");
});

router.patch("/:id",MovieController.updateMovie =()=> {
  res.send("it's updated");
});

router.delete("/:id",MovieController.deleteMovie=()=>{
  res.send("it's deleted");
});

module.exports = router;
