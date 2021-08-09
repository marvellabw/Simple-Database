// Express, Morgan, Port, Path
const express = require("express")
const app = express()
const port = 3000
const path = require("path")

// Files
const routes = require("./routes/index")

// View Engine
app.set("view engine", "ejs")

// Application Level Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, "/public")))

// Routing
app.use("/", routes)

// Listening Port
app.listen(port, () => {
  console.log(`Listening at port ${port}`)
})
