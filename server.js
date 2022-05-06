const express = require("express");
const cors = require("cors");
const actorRouter = require("./routers/actor");
const orderRouter = require("./routers/order");
const authRouter = require("./routers/auth");
const emailRouter = require("./routers/email");
const reviewRouter = require("./routers/review");
var AWS = require("aws-sdk");
const PORT = process.env.PORT || 4000;
v;
AWS.config.update({
  region: "eu-west-3",
  AWS_ACCESS_KEY_ID: process.env.aws_access_key_id,
  AWS_SECRET_ACCESS_KEY: process.env.aws_secret_access_key,
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
