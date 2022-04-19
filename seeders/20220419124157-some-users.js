"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Liam",
          email: "l@l.com",
          password: "liam",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Olivia",
          email: "o@o.com",
          password: "olivia",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "James",
          email: "j@j.com",
          password: "james",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Henry",
          email: "h@h.com",
          password: "henry",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
