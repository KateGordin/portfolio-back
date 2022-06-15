const express = require("express");
const { Router } = express;
const Users = require("../models").user;
const authMiddleWare = require("../auth/middleware");

const router = new Router();

//all reviews
router.get("/", async (req, res, next) => {
  try {
    const reviews = await Users.findAll({ review });

    console.log("reviews", reviews);
    res.send(reviews);
  } catch (e) {
    console.error(e);
  }
});

//update user.review
router.patch("/", authMiddleWare, async (req, res) => {
  try {
    const reviewToUpdate = req.body.review;

    const updatedUserWithReview = await req.user.update({
      review: reviewToUpdate,
    });

    res.json(updatedUserWithReview);
  } catch (e) {
    console.log(e.message);
  }
});

module.exports = router;
