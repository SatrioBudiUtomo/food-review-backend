var express = require('express');
var router = express.Router();
var con = require("./db.js");

/* GET home page. */

router.get('/', function(req, res, next) {  
  if (typeof req.query.resto_id != "undefined") {
    var sql = "SELECT *, (SELECT AVG(rating) FROM reviews WHERE foods_id = foods.id)as rating FROM foods WHERE restos_id = " + req.query.resto_id
  }  
  else {
    var sql = "SELECT *, (SELECT AVG(rating) FROM reviews WHERE foods_id = foods.id) as rating FROM foods"
  }
    //query
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Result: " + result);

      res.send(result)
    });
  });
module.exports = router;
