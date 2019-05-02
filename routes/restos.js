var express = require('express');
var router = express.Router();
var con = require("./db.js");

/* GET home page. */

router.get('/', function(req, res, next) {    
    //query
    con.query("SELECT * FROM restos", function (err, result) {
      if (err) throw err;
      console.log("Result: " + result);

      res.send(result)
    });
  });

module.exports = router;
