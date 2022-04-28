const express = require("express");
const { Router } = express;
const Order = require("../models").order;
const Actor = require("../models").actor;
const OrderItem = require("../models").orderItem;
const router = new Router();
const authMiddleWare = require("../auth/middleware");
const { sendEmail } = require("../services/emailService");

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
router.post("/addOrderItem", authMiddleWare, async (req, res) => {
  try {
    const { actorId } = req.body;

    let currentOrder = await Order.findOne({
      where: { status: "draft", userId: req.user.id },
    });

    if (!currentOrder) {
      currentOrder = await Order.create({ userId: 1, status: "draft" });
    }

    const orderItem = await OrderItem.create({
      orderId: currentOrder.id,
      actorId,
    });
    const newOrderItem = await OrderItem.findByPk(orderItem.id, {
      include: [Actor],
    });

    res.json(newOrderItem);
  } catch (e) {
    console.log(e.message);
  }
});

//all orders with orderItems
router.get("/getDraftOrder", authMiddleWare, async (req, res, next) => {
  try {
    const order = await Order.findOne({
      where: { status: "draft", userId: req.user.id },
      include: [{ model: OrderItem, include: [Actor] }],
    });
    res.send(order);
  } catch (e) {
    console.error(e);
  }
});

//delete order item
router.delete("/deleteOrderItem/:id", async (req, res) => {
  try {
    const orderItemId = parseInt(req.params.id);
    const orderItem = await OrderItem.findByPk(orderItemId);

    if (!orderItem) {
      return res.status(404).send("Order item does not exist");
    }
    await orderItem.destroy();
    res.status(204).send();
  } catch (e) {
    console.error(e);
  }
});

//change status of order from draft to pending
router.patch("/submit", async (req, res) => {
  try {
    const { id, textInEmail, eventName } = req.body;
    console.log("textInEmail", textInEmail);
    const orderToUpdateStatus = await Order.findByPk(id, {
      include: [{ model: OrderItem, include: [Actor] }],
    });
    const updatedOrder = await orderToUpdateStatus.update({
      status: "pending",
      eventName,
    });
    if (!orderToUpdateStatus) {
      return res.status(404).send("This order doesn't found");
    }

    const actors = orderToUpdateStatus.orderItems;
    //send email when submitting the party
    console.log(actors);

    const text = `${textInEmail} <br /> ${actors
      .map((a) => a.actor.name)
      .join(" - ")}`;

    sendEmail("kate.gordin@gmail.com", text, eventName);
    //update status in order
    res.send(updatedOrder.toJSON());
  } catch (e) {
    console.error(e);
  }
});

module.exports = router;
