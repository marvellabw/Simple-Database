const express = require("express")
const router = express.Router()

const login = require("./login.js")
const users = require("./users.js")
const biodata = require("./biodata.js")
const history = require("./history.js")

// Routing
router.use("/", login)
router.use("/users", users)
router.use("/biodata", biodata)
router.use("/history", history)

module.exports = router
