const express = require("express");
const pool = require("../config");

router = express.Router();

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
        "INSERT INTO train(train_num, date, route_id) VALUES(?, ?, ?);",
        [trainnum, date, routeid]
      )
      console.log(results)

  
      await conn.commit()
      // res.send("success!");
      res.redirect('/')
    } catch (err) {
      await conn.rollback();
      next(err);
    } finally {
      console.log('finally')
      conn.release();
    }
  });

exports.router = router;
