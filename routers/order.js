const express = require("express");
const order = require("../models/order");
const { Router } = express;
const Order = require("../models").order;
const Actor = require("../models").actor;
const OrderItem = require("../models").orderItem;
const router = new Router();

//create new order (with dateTime and userId)
router.post("/", async (req, res) => {
  try {
    if (!req.body.dateTime || !req.body.userId) {
      res.status(400).send("Please, provide dateTime and userId");
      return;
    }
    const newOrder = await Order.create({
      ...req.body,
      status: "draft",
    });

    res.json(newOrder);
  } catch (e) {
    console.log(e.message);
  }
});

//create order item with orderId and actorId
router.post("/addOrderItem", async (req, res) => {
  try {
    const { orderId, actorId } = req.body;
    const order = await Order.findByPk(orderId);
    if (!order) {
      return res.status(400).send("Order not found");
    }
    if (order.status !== "draft") {
      return res.status(400).send("This order is not draft");
    }
    const orderItem = await OrderItem.create({ orderId, actorId });

    res.json(orderItem);
  } catch (e) {
    console.log(e.message);
  }
});

//all orders with orderItems
router.get("/", async (req, res, next) => {
  try {
    const orders = await Order.findAll({
      include: [{ model: OrderItem, include: [Actor] }],
    });
    res.send(orders);
  } catch (e) {
    console.error(e);
  }
});

//delete order item
router.delete("/deleteOrderItem/:id", async (req, res) => {
  try {
    const orderId = parseInt(req.params.id);
    const orderItem = await OrderItem.findByPk(orderId);

    if (!orderItem) {
      return res.status(404).send("Order item does not exist");
    }
    await orderItem.destroy();
    res.status(204).send();
  } catch (e) {
    console.error(e);
  }
});

module.exports = router;
