const express = require("express");
const { Router } = express;
const Users = require("../models").user;

const router = new Router();

//all reviews
router.get("/getReviews", async (req, res, next) => {
  try {
    const reviews = await Users.findAll();

    console.log("reviews", reviews);
    res.send(reviews);
  } catch (e) {
    console.error(e);
  }
});

module.exports = router;
