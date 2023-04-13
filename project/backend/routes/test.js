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

router.get("/user", async function (req, res, next) {
  try {

    let [rows , fields] = await pool.query(`SELECT * FROM user`)

    return res.json( {
     user: rows
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
  router.get("/userinfo/:username", async function (req, res, next) {
    try {
      let [rows , fields] = await pool.query(`SELECT * FROM user where username = ? `,  req.params.username)
  
      console.log(rows)
      return res.json( {
      
       userinfo: rows
      });
    } catch (err) {
      return next(err)
    }
  });
  

exports.router = router;
