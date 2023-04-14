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
  router.get("/ticket/:userid", async function (req, res, next) {
    try {
      let [rows , fields] = await pool.query(`SELECT * FROM ticket where user_id = ? `,  req.params.userid)
  
      console.log(rows)
      return res.json( {
      ticketinfo: rows
      });
    } catch (err) {
      return next(err)
    }
  });

  router.post('/addticket', async (req, res) => {
    const userid = Number(req.body.userid)
    const route = Number(req.body.route)
    const dest_name = req.body.dest_name
    const date = req.body.date
    const passengers = Number(req.body.passengers)
    const ticketClass = Number( req.body.ticketClass)

    console.log("userid: ", userid)
    console.log("route: ", route)
    console.log("dest_name: " , dest_name)
    console.log("date: ", date)
    console.log("passengers :", passengers)
    console.log("TicketClas", ticketClass)
    

    const conn = await pool.getConnection();

    try {
      const [result, fields] = await conn.query(
        "Insert INTO Ticket(user_id, train_id, price, amount, dest_name, route_id, ticket_type, date) VALUES (?, 1, 200, ?, ?, ?, ?, ?)"
        ,[userid,passengers,dest_name, route, ticketClass, date  ]
     
      );

     
    } catch (err) {
      console.error(err);
      console.log(err)
      console.log(err.message)
      res.status(500).json({ message: 'An error occurred while processing your request' });
    } finally {
      conn.release();
    }
  });
  
  

exports.router = router;
