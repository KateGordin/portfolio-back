"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "actors",
      [
        {
          name: "Spiderman",
          description: "Very good and interesting program",
          image:
            "https://www.bounceandparty.com.au/wp-content/uploads/2018/06/Boys-party-image-gallery-3.jpg",
          price: 150,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "Fyok",
          description: "Super bright b-day party",
          image:
            "https://partypanda.com.ua/storage/services/December2019/zYIKqRaXTyMpmt19GM83.jpg",
          price: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "Ninja turtles",
          description: "Nice adventure with four Ninja",
          image:
            "https://images2.minutemediacdn.com/image/fetch/w_2000,h_2000,c_fit/https%3A%2F%2Fbamsmackpow.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2016%2F04%2F1157703243.jpeg",
          price: 300,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "Princess",
          description: "Cute party with Princess",
          image:
            "https://www.yabadoo.com.au/wp-content/uploads/2018/06/Princess-Static-Image.jpg",
          price: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "Captain America",
          description: "Super party",
          image:
            "http://partycharactersforkids.com/wp-content/uploads/2012/10/captain-america-3_400x263.jpg",
          price: 150,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "Santa",
          description: "Magic Christmas party with Santa",
          image:
            "https://media.istockphoto.com/photos/closeup-portrait-of-his-he-amazed-stunned-funky-fat-overweight-plump-picture-id1176755787?k=20&m=1176755787&s=612x612&w=0&h=EGwSQiYDu5iuWjMZW2D8J3Z8jNjFlNa0M0HvA0rE5Vc=",
          price: 250,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("actors", null, {});
  },
};
