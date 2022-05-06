const express = require("express");
const cors = require("cors");
require("dotenv").config();
const actorRouter = require("./routers/actor");
const orderRouter = require("./routers/order");
const authRouter = require("./routers/auth");
const emailRouter = require("./routers/email");
const reviewRouter = require("./routers/review");
var AWS = require("aws-sdk");
const PORT = process.env.PORT || 4000;

AWS.config.update({
  region: "eu-west-3",
});
const app = express();

app.use(express.json());

app.use(cors());
app.use("/actor", actorRouter);
app.use("/order", orderRouter);
app.use("/auth", authRouter);
app.use("/email", emailRouter);
app.use("/review", reviewRouter);

app.listen(PORT);
