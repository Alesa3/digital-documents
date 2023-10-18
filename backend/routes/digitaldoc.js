var express = require('express');
var router = express.Router();

/* get all documents. */
router.get('/', function(req, res, next) {
  
  req.app.locals.con.connect((err) => {
    if(err) {
      console.log("err", err)
    }

    let sql = "SELECT * FROM digitaldocs"

    req.app.locals.con.query(sql, (err, result) => {
      if(err) {
        console.log("err", err)
      }
      console.log("result", result)
      res.json(result)
    })

  })
 
});

module.exports = router;
