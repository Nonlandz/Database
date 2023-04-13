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
const regisRouter = require('./routes/regis')
const testRouter = require('./routes/test')




app.use(regisRouter.router)
app.use(testRouter.router)


app.listen(3001, () => {
  console.log(`Example app listening at http://localhost:3001`)
})
