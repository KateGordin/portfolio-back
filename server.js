const express = require("express");
const cors = require("cors");
const actorRouter = require("./routers/actor");
const orderRouter = require("./routers/order");

const app = express();

app.use(express.json());

app.use(cors());
app.use("/actor", actorRouter);
app.use("/order", orderRouter);

app.listen(4000);
