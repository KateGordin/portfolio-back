"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Liam",
          email: "l@l.com",
          password: bcrypt.hashSync("liam", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
          review: "I had party with LUCKY, it was awesome",
        },
        {
          name: "Olivia",
          email: "o@o.com",
          password: bcrypt.hashSync("olivia", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
          review: "Thanks for b-day party",
        },
        {
          name: "James",
          email: "j@j.com",
          password: bcrypt.hashSync("james", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
          review: "I like Spiderman, thank you",
        },
        {
          name: "Henry",
          email: "h@h.com",
          password: bcrypt.hashSync("henry", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
          review: "Highly recommended",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
