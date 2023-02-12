const express = require("express")
const app = express()
require("dotenv").config()
require("./database")

const port = process.env.PORT
const routes = require("./routes/routes")

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/api/v1/journal", routes)

app.listen(port, console.log(`Server is running at http://localhost/${port}`))