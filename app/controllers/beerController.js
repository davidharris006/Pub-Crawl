// Chirpy-1 activity for examples of how to format.

var express = require("express");


var router = express.Router();

var beer = require("../models/beer")


router.get("/", function (req, res) {
 
   res.render("index");
 
});


router.get("/survey", function (req, res) {
 
   res.render("survey");
 
});



router.get("/beers", function (req, res) {
  beer.selectAll(function (data) {
    var responseData = {
      beer: data
    };
// console.log(responseData);
    res.render("list", responseData);
  });
});

// http://.../beer?name="this_is_a_name"
router.get("/beer", function (req, res) {

  
  if (req.query.name) {
    //handle name not being passed
  }
  // else get the name from the query
  const name = req.query.name
  // send to orm in correct format
  // specify searchType
  // specify searchTerm
  beer.selectOne(function (data) {
    var responseData = {
      beer: data
    };
// console.log(responseData);
    // then do some stuff with the data
    res.render("list", responseData);
  });
});



module.exports = router;