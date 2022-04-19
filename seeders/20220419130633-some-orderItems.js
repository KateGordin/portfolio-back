"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "orderItems",
      [
        {
          orderId: 1,
          actorId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          orderId: 2,
          actorId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          orderId: 3,
          actorId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("orderItems", null, {});
  },
};
