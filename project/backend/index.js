const express = require("express")
var cors = require('cors')
const path = require("path")

const app = express();
app.use(cors())
// Statics
app.use(express.static('static'))

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// routers
const testRouter = require('./routes/test')

// const bookRouter = require('./routes/book')


app.use(testRouter.router)

// app.use(bookRouter.router)


app.listen(3001, () => {
  console.log(`Example app listening at http://localhost:3001`)
})
