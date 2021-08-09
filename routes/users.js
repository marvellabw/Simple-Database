const express = require("express")
const router = express.Router()
const { Users } = require("../models")

// CREATE
router.get("/create", (req, res) => {
  Users.findAll()
    .then((user) => {
      res.render("./users/create", { user })
    })
    .catch((err) => {
      res.send("ERROR")
    })
})

router.post("/create", (req, res) => {
  const { body } = req
  Users.create({ ...body })
    .then(() => {
      res.redirect("/users")
    })
    .catch((err) => {
      res.send("ERROR")
    })
})

// READ
router.get("/", (req, res) => {
  Users.findAll()
    .then((user) => {
      res.render("./users/users", { user })
    })
    .catch((err) => {
      res.send("ERROR")
    })
})

// UPDATE
router.get("/update/:id", (req, res) => {
  const { id } = req.params
  Users.findAll({
    where: {
      id: +id,
    },
  })
    .then((user) => {
      res.render("./users/update", { user })
    })
    .catch((err) => {
      res.send("ERROR")
    })
})

router.post("/update/:id", (req, res) => {
  const { id } = req.params
  const { body } = req

  Users.update(
    { ...body },
    {
      where: {
        id: +id,
      },
    }
  )
    .then(() => {
      res.redirect("/users")
    })
    .catch((err) => {
      res.send("ERROR")
    })
})

// DELETE
router.get("/delete/:id", (req, res) => {
  const { id } = req.params
  Users.destroy({
    where: {
      id: +id,
    },
  })
    .then(() => {
      res.redirect("/users")
    })
    .catch((err) => {
      res.send("ERROR")
    })
})

module.exports = router
