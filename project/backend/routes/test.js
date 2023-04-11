const express = require("express");
const pool = require("../config");

router = express.Router();
 // get route  to display on form
 router.get("/route", async function (req, res, next) {
  try {

    let [rows , fields] = await pool.query(`SELECT * FROM route`)

    return res.json( {
      route: rows
    });
  } catch (err) {
    return next(err)
  }
});

router.get("/test", async function (req, res, next) {
  try {

    let [rows , fields] = await pool.query(`SELECT * FROM ticket`)

    return res.json( {
      test: rows
    });
  } catch (err) {
    return next(err)
  }
});
router.post('/addtrain' , async function (req, res, next) {
    console.log(req.body)
    const trainnum = req.body.trainnum;
    const date = req.body.date;
    const routeid = req.body.routeid;
  
    const conn = await pool.getConnection()
    // Begin transaction
    await conn.beginTransaction();
  
    try {
      let results = await conn.query(
        "INSERT INTO train( date, route_id, train_num) VALUES( ?, ?, ?);",
        [ date, routeid, trainnum]
      ) 
      console.log(results)

  
      await conn.commit()
      // res.send("success!");
    } catch (err) {
      await conn.rollback();
      next(err);
    } finally {
      console.log('finally')
      conn.release();
    }
  });


exports.router = router;
