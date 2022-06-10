const express = require("express");
const { Router } = express;
const Users = require("../models").user;

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
router.patch("/:id", async (req, res) => {
  try {
    const userId = parseInt(req.params.id);
    const reviewToUpdate = req.body.review;

    const userToUpdate = await Users.findByPk(userId);
    if (!userToUpdate) {
      return res.status(404).send("User not found");
    }

    const updatedUserWithReview = await userToUpdate.update(
      {
        review: reviewToUpdate,
      },
      { where: { id: userId } }
    );

    res.json(updatedUserWithReview);
  } catch (e) {
    console.log(e.message);
  }
});

module.exports = router;
