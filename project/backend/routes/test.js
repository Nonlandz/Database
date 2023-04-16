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
  router.get("/station/:routeid", async function (req, res, next) {
    try {
      let [rows , fields] = await pool.query(`SELECT * FROM station where route_id = ? `,  req.params.routeid)
  
      console.log(rows)
      return res.json( {
      
       station: rows
      });
    } catch (err) {
      return next(err)
    }
  });

  router.post('/addticket', async (req, res) => {
    console.log(req.body)
    const userid = Number(req.body.userid)
    const route = Number(req.body.route)
    const dest_name = req.body.dest_name
    const date = req.body.date
    const passengers = Number(req.body.passengers)
    const ticketClass = Number( req.body.ticketClass)
    const train_id = Number(req.body.train_id)
  
    

    const conn = await pool.getConnection();

    try {
      console.log("userid: ", userid)
    console.log("route: ", route)
    console.log("dest_name: " , dest_name)
    console.log("date: ", date)
    console.log("passengers :", passengers)
    console.log("TicketClas", ticketClass)
      const[results2, fields2] = await conn.query(
        "select price from destination where dest_name = ?",[dest_name]
      );
      const price = results2[0].price

      
      const [result, fields] = await conn.query(
        "Insert INTO Ticket(user_id, train_id, price, amount, dest_name, route_id, ticket_type, date) VALUES (?, ?, ?, ?, ?, ?, ?, ?)"
        ,[userid,train_id,price,passengers,dest_name, route, ticketClass, date  ]
     
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


  router.post('/addprize' , async function (req, res, next) {
    console.log(req.body)
    const prizename = req.body.prizename;
    const date = req.body.date;
    const des = req.body.description;
    const point = req.body.point;
  
    const conn = await pool.getConnection()
    // Begin transaction
    await conn.beginTransaction();
    try {
      let results = await conn.query(
        "INSERT INTO item( date_instock, item_name, item_des, point) VALUES( ?, ?, ?, ?);",
        [ date, prizename, des, point]
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
  router.put('/updatepoint/:username/:point' , async function (req, res, next) {
    console.log(req.params)
   
  
    const conn = await pool.getConnection()
    // Begin transaction
    await conn.beginTransaction();
    try {
      let results = await conn.query(
        "UPDATE User SET Point = ? WHERE Username = ?",
        [req.params.point, req.params.username]
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
  router.get("/prize", async function (req, res, next){
    try{
      let [rows, fields] = await pool.query(`SELECT * from item `)
      console.log(rows)
      return res.json({
        prizeinfo: rows
      });
    } catch (err){
      return next(err)
    }
  });
  
 
  router.get("/trains", async function (req, res, next) {
    try {
      console.log(req.query)
      
      let [rows , fields] = await pool.query(`SELECT * FROM train WHERE route_id = ? and date = ?`, [Number(req.query.route), req.query.date])
      return res.json(rows)
    } catch (err) {
      console.log(err)
    }
  });
  

exports.router = router;
