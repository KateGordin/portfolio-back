const express = require("express");
const { Router } = express;
const Actors = require("../models").actor;
const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const allActors = await Actors.findAll();
    console.log("allActors", allActors);
    res.send(allActors);
  } catch (e) {
    console.log(e.message);
  }
  next();
});

module.exports = router;
