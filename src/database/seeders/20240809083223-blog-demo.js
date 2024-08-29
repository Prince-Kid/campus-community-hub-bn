const bcrypt = require("bcryptjs");
const { v4: uuidv4 } = require("uuid");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Blogs", [
      {
        blogId: "b47f6d60-3de2-490e-a6c5-1d5dfe5f01f8",
        blogTitle: "Leadership in the Modern World",
        content: "Blog content about leadership...",
        authorId: "6a5e3420-c1fb-4411-995b-680d2eb41f8d",
        cover:
          "https://www.shutterstock.com/image-photo/banner-blogger-woman-hands-typing-600nw-2137810931.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        blogId: "c97ae3f4-0e71-4b8f-a4b2-e3b217dd4017",
        blogTitle: "Balancing Leadership and Academics",
        content: "Blog content about balancing leadership and academics...",
        authorId: "6a5e3420-c1fb-4411-995b-680d2eb41f8d",
        cover:
          "https://www.shutterstock.com/image-photo/banner-blogger-woman-hands-typing-600nw-2137810931.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        blogId: "04d6cfb8-6de8-4d69-8a5e-0c4baf894c2d",
        blogTitle: "The Role of Technology in Education",
        content: "Blog content about technology in education...",
        authorId: "2db3fa07-0eb3-43a3-8e2d-3c928b3f3082",
        cover:
          "https://www.shutterstock.com/image-photo/banner-blogger-woman-hands-typing-600nw-2137810931.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        blogId: "89dbf3e9-3f75-4323-98c7-cdf2cf9b542f",
        blogTitle: "Building a Strong Community",
        content: "Blog content about building a community...",
        authorId: "2db3fa07-0eb3-43a3-8e2d-3c928b3f3082",
        cover:
          "https://www.shutterstock.com/image-photo/banner-blogger-woman-hands-typing-600nw-2137810931.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Blogs", null, {});
  },
};
