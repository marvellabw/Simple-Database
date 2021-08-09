const express = require("express")
const router = express.Router()
const { Users, History } = require("../models")

// CREATE
router.get("/create", (req, res) => {
  History.findAll()
    .then((hist) => {
      res.render("./history/create", { hist })
    })
    .catch((err) => {
      res.send("ERROR")
    })
})

router.post("/create", (req, res) => {
  const { body } = req
  History.create({ ...body })
    .then(() => {
      res.redirect("/history")
    })
    .catch((err) => {
      res.send("ERROR")
    })
})

// READ
router.get("/", (req, res) => {
  History.findAll({
    order: [["id", "ASC"]],
    include: [{ model: Users }],
  })
    .then((hist) => {
      res.render("./history/history", { hist })
    })
    .catch((err) => {
      res.send("ERROR")
    })
})

// UPDATE
router.get("/update/:id", (req, res) => {
  const { id } = req.params
  History.findAll({
    where: {
      id: +id,
    },
  })
    .then((hist) => {
      res.render("./history/update", { hist })
    })
    .catch((err) => {
      res.send("ERROR")
    })
})

router.post("/update/:id", (req, res) => {
  const { id } = req.params
  const { body } = req

  History.update(
    { ...body },
    {
      where: {
        id: +id,
      },
    }
  )
    .then(() => {
      res.redirect("/history")
    })
    .catch((err) => {
      res.send("ERROR")
    })
})

// DELETE
router.get("/delete/:id", (req, res) => {
  const { id } = req.params
  History.destroy({
    where: {
      id: +id,
    },
  })
    .then(() => {
      res.redirect("/history")
    })
    .catch((err) => {
      res.send("ERROR")
    })
})

module.exports = router
