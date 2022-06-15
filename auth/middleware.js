const User = require("../models").user;
const { toData } = require("./jwt");

async function auth(req, res, next) {
  const auth = req.headers.authorization?.split(" "); // auth is undefined if no authorization header provided

  if (!auth || auth[0] !== "Bearer" || !auth[1]) {
    return res.status(401).send({
      message: "Please supply some valid credentials",
    });
  }

  try {
    const data = toData(auth[1]);
    const user = await User.findByPk(data.userId);

    if (!user) {
      return res.status(404).send("No user found");
    }

    req.user = user;

    next();
  } catch (error) {
    res.status(400).send({
      message: `Error ${error.name}: ${error.message}`,
    });
  }
}

module.exports = auth;
