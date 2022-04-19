"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "orders",
      [
        {
          dateTime: "6 May 2022 at 17:00",
          status: "pending",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
        },

        {
          dateTime: "7 June 2022 at 18:00",
          status: "pending",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
        },

        {
          dateTime: "8 July 2022 at 19:00",
          status: "pending",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 3,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("orders", null, {});
  },
};
