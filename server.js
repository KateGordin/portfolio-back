const express = require("express");
const cors = require("cors");
const actorRouter = require("./routers/actor");
const orderRouter = require("./routers/order");
const authRouter = require("./routers/auth");

const app = express();

app.use(express.json());

app.use(cors());
app.use("/actor", actorRouter);
app.use("/order", orderRouter);
app.use("/auth", authRouter);

app.listen(4000);
