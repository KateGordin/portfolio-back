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
            "https://upload.wikimedia.org/wikipedia/commons/9/90/Spiderman.JPG",
          price: 150,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "Fyok",
          description: "Super bright b-day party",
          image:
            "https://ekomfort.ru/wa-data/public/shop/products/22/80/18022/images/18774/18774.970.jpg",
          price: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "Ninja turtles",
          description: "Nice adventure with four Ninja",
          image:
            "https://cdn.mos.cms.futurecdn.net/khRipjVa7SEL5ndKogPHjj-1200-80.jpg",
          price: 300,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "Princess",
          description: "Cute party with Princess",
          image:
            "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/newscms/2015_05/870341/150130-latin-disney-princess-wide.jpg",
          price: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "Minion",
          description: "Fun and funny",
          image:
            "https://p4.wallpaperbetter.com/wallpaper/291/597/215/5c1c970d40286-wallpaper-preview.jpg",
          price: 150,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "Santa",
          description: "Magic Christmas party with Santa",
          image:
            "https://images.theconversation.com/files/302306/original/file-20191118-169393-r78x4o.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=675.0&fit=crop",
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
