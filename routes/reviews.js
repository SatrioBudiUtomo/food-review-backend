var express = require('express');
var router = express.Router();
var con = require("./db.js");

/* GET home page. */
router.get('/', function(req, res, next) {
  if (typeof req.query.foods_id != "undefined") {
    var sql = "SELECT * FROM reviews WHERE foods_id = " + req.query.foods_id
  }  
  else {
    var sql = "SELECT * FROM reviews"
  }
    //query
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Result: " + result);

      res.send(result)
      
    });
  });
router.post('/', function(req, res, next){
  //create new review
  var date = new Date();

  con.query("INSERT INTO reviews(`name`,`email`,`comment`,`rating`,`foods_id`,`created_at`)" 
  +"VALUES(?, ?, ?, ?, ?, ?)", [
    req.body.name,
    req.body.email,
    req.body.comment,
    req.body.rating,
    req.body.foods_id,
    date,
  ], function(err, result) {
    if (err) throw err;
    console.log("Result: " + result);

    res.send("OK");
  });
});
module.exports = router;
