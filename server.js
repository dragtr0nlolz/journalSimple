const express = require("express")
const app = express()

const routes = require("./routes/routes")

require("dotenv").config()
const port = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/api/v1/journal", routes)

app.listen(port, console.log(`Server is running at http://localhost/${port}`))