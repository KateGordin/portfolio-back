const express = require("express");
const { Router } = express;
const Order = require("../models").order;
const Actor = require("../models").actor;
const OrderItem = require("../models").orderItem;
const router = new Router();
const authMiddleWare = require("../auth/middleware");
const { sendEmail } = require("../services/emailService");
const { DRAFT } = require("../utils/constants");

//create order item with orderId and actorId
router.post("/addOrderItem", authMiddleWare, async (req, res) => {
  try {
    const { actorId } = req.body;

    const [currentOrder] = await Order.findOrCreate({
      where: { status: DRAFT, userId: req.user.id },
    });

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
router.get("/getDraftOrder", authMiddleWare, async (req, res) => {
  try {
    const order = await Order.findOne({
      where: { status: DRAFT, userId: req.user.id },
      include: [{ model: OrderItem, include: [Actor] }],
    });
    res.send(order);
  } catch (e) {
    console.error(e);
  }
});

//delete order item
router.delete("/deleteOrderItem/:id", authMiddleWare, async (req, res) => {
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
router.patch("/submit", authMiddleWare, async (req, res) => {
  try {
    const { id, textInEmail, eventName } = req.body;
    console.log("textInEmail", textInEmail);
    const orderToUpdateStatus = await Order.findByPk(id, {
      include: [{ model: OrderItem, include: [Actor] }],
    });

    if (!orderToUpdateStatus) {
      return res.status(404).send("This order doesn't found");
    }

    const updatedOrder = await orderToUpdateStatus.update({
      status: "pending",
      eventName,
    });

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
