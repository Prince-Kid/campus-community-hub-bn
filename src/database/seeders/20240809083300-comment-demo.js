const bcrypt = require("bcryptjs");
const { v4: uuidv4 } = require("uuid");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Comments", [
      {
        commentId: "7397ebc3-502a-49e8-8f65-2640143b3895",
        content:
          "Great insights on leadership! This is exactly what we need to be focusing on as future leaders.",
        userId: "d69b67f9-6a98-41e3-85e6-d4d3a3d6bc10",
        blogId: "b47f6d60-3de2-490e-a6c5-1d5dfe5f01f8",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        commentId: "2277f8e5-0b53-442b-825f-14c9c9171a17",
        content:
          "Balancing leadership and academics is tough, but your tips are really helpful. Thanks for sharing!",
        userId: "6a5e3420-c1fb-4411-995b-680d2eb41f8d",
        blogId: "c97ae3f4-0e71-4b8f-a4b2-e3b217dd4017",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        commentId: "6f7b07ff-b7d8-4de7-9385-cd7f8b6b5a45",
        content:
          "Technology has really changed the way we learn. This blog gives a lot of food for thought!",
        userId: "4c7123a7-6873-41da-b3a5-3e6bc6b007d0",
        blogId: "04d6cfb8-6de8-4d69-8a5e-0c4baf894c2d",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        commentId: "5f0c2b7c-4038-41ef-b67d-7cdd8c3422ab",
        content:
          "Building a community is so important. I appreciate your efforts and the examples you provided here.",
        userId: "95bb6bfb-2f8a-463e-8d85-0be98f3b6f8d",
        blogId: "89dbf3e9-3f75-4323-98c7-cdf2cf9b542f",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        commentId: "d5c6b479-93c8-4c49-905a-38216b45368d",
        content:
          "This post on leadership is really inspiring. Keep up the great work!",
        userId: "d69b67f9-6a98-41e3-85e6-d4d3a3d6bc10",
        blogId: "b47f6d60-3de2-490e-a6c5-1d5dfe5f01f8",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        commentId: "29e9de50-49a5-4b02-8b6b-64b4e5071e0d",
        content:
          "The role of technology in education cannot be overstated. Excellent write-up!",
        userId: "c4b64cf3-593f-4d3d-b0ee-b0cb06a3493d",
        blogId: "04d6cfb8-6de8-4d69-8a5e-0c4baf894c2d",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Comments", null, {});
  },
};
