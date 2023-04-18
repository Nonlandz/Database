const express = require("express");
const pool = require("../config");
const router = express.Router();
const multer = require('multer')
const path = require("path")
// SET STORAGE
var storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './static/uploads')
  },
  filename: function (req, file, callback) {
    callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
})
const upload = multer({ storage: storage })
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
      res.status(200).json({ message: 'Addtrain Succesfully'});
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

  router.get("/getalluser", async function (req, res, next) {
    try {
      let [rows , fields] = await pool.query(`SELECT * FROM user `)
  
      // console.log(rows)
      return res.json( {
      
       alluser: rows
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
  router.get("/ticketprice/:dest_name", async function (req, res, next) {
    try {
      let [rows , fields] = await pool.query(`SELECT * FROM destination where dest_name = ? `,  req.params.dest_name)
  
      console.log(rows)
      return res.json( {
      
       ticketprice: rows
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
    const price = Number(req.body.price)
    

    const conn = await pool.getConnection();

    try {
      console.log("userid: ", userid)
    console.log("route: ", route)
    console.log("dest_name: " , dest_name)
    console.log("date: ", date)
    console.log("passengers :", passengers)
    console.log("TicketClas", ticketClass)
    console.log("Price", price)
     
      

      
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


  router.post('/addprize' , upload.single('item_img'),async function (req, res, next) {
    console.log(req.body)
    const prizename = req.body.itemname;
    
    const des = req.body.itemdes;
    const point = req.body.point;
    const image = "/uploads/" + req.file.filename;
  
    const conn = await pool.getConnection()
    // Begin transaction
    await conn.beginTransaction();
    try {
      let results = await conn.query(
        "INSERT INTO item( item_img, item_name, item_des, point) VALUES( ?, ?, ?, ?);",
        [ image, prizename, des, point]
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
  
  router.post('/addinventory/:userid/:itemid', async function (req, res, next) {
    console.log(req.params.itemid)
    const conn = await pool.getConnection()
    // Begin transaction
    await conn.beginTransaction();
    try {
      let results = await conn.query(
        "INSERT INTO inventory (User_id, item_id) VALUES(?, ?)",
        [req.params.userid, req.params.itemid]
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
  router.get("/inventory/:userid", async function (req, res, next) {
    console.log(req.params)
    try {
      let [rows, fields] = await pool.query(`SELECT item_img, item_name , item_des , inventory.item_id
        FROM inventory
         inner  JOIN item
        ON  item.item_id = inventory.item_id where inventory.User_id = ?;`, req.params.userid)
      console.log(req.params.userid)
      console.log(rows)
      return res.json({
        inventoryinfo: rows
      });
  
    } catch (err) {
      return next(err)
    }
  
  });

exports.router = router;
