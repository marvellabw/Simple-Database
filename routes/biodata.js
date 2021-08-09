const express = require("express")
const router = express.Router()
const { Users, Biodata } = require("../models")

// CREATE
router.get("/create", (req, res) => {
  Biodata.findAll()
    .then((bio) => {
      res.render("./biodata/create", { bio })
    })
    .catch((err) => {
      res.send("ERROR")
    })
})

router.post("/create", (req, res) => {
  const { body } = req
  Biodata.create({ ...body })
    .then(() => {
      res.redirect("/biodata")
    })
    .catch((err) => {
      res.send("ERROR")
    })
})

// READ
router.get("/", (req, res) => {
  Biodata.findAll({
    order: [["id", "ASC"]],
    include: [{ model: Users }],
  })
    .then((bio) => {
      res.render("./biodata/biodata", { bio })
    })
    .catch((err) => {
      res.send("ERROR")
    })
})

// UPDATE
router.get("/update/:id", (req, res) => {
  const { id } = req.params
  Biodata.findAll({
    where: {
      id: +id,
    },
  })
    .then((bio) => {
      res.render("./biodata/update", { bio })
    })
    .catch((err) => {
      res.send("ERROR")
    })
})

router.post("/update/:id", (req, res) => {
  const { id } = req.params
  const { body } = req

  Biodata.update(
    { ...body },
    {
      where: {
        id: +id,
      },
    }
  )
    .then(() => {
      res.redirect("/biodata")
    })
    .catch((err) => {
      res.send("ERROR")
    })
})

// DELETE
router.get("/delete/:id", (req, res) => {
  const { id } = req.params
  Biodata.destroy({
    where: {
      id: +id,
    },
  })
    .then(() => {
      res.redirect("/biodata")
    })
    .catch((err) => {
      res.send("ERROR")
    })
})

module.exports = router
