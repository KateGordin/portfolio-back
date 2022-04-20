const express = require("express");
const { Router } = express;
const Order = require("../models").order;
const Actor = require("../models").actor;
const router = new Router();

router.post("/", async (req, res) => {
  try {
    if (!req.body.dateTime || !req.body.userId) {
      res.status(400).send("Please, provide dateTime and userId");
      return;
    }
    const newOrder = await Order.create({ ...req.body, status: "pending" });

    // Insert into orderItems
    // actorIds = [2, 5, 1]
    // with newOrder.id as orderId

    res.json(newOrder);
  } catch (e) {
    console.log(e.message);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const orders = await Order.findAll({ include: [Actor] });
    res.send(orders);
  } catch (e) {
    console.log(e.message);
  }
});

module.exports = router;
