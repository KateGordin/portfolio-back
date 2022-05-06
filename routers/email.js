const express = require("express");
const { Router } = express;
const { sendEmail } = require("../services/emailService");

const router = new Router();

router.post("/sendEmail", async (req, res) => {
  try {
    sendEmail(
      "kate.gordin@gmail.com",
      "This is my textInEmail",
      "this is subject"
    );

    res.send();
  } catch (e) {
    console.error(e);
  }
});

module.exports = router;
