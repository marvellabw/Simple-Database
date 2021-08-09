const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
  res.status(200)
  res.render("./login/login")
})

router.post("/", (req, res) => {
  const { username = "", password = "" } = req.body
  if (!username || !password) {
    res.status(405)
    res.render("./error/error405")
  }
  res.redirect("/users")
})

module.exports = router
