const { v4: uuidv4 } = require("uuid");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Announcements", [
      {
        announcementId: uuidv4(),
        authorId: "6a5e3420-c1fb-4411-995b-680d2eb41f8d", // Alice Smith (student_leader)
        content:
          "We are organizing a community service event this weekend. Please join us to make a difference!",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        announcementId: uuidv4(),
        authorId: "2db3fa07-0eb3-43a3-8e2d-3c928b3f3082", // Bob Johnson (student_leader)
        content: "Don't forget the leadership meeting tomorrow at 10 AM.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        announcementId: uuidv4(),
        authorId: "95bb6bfb-2f8a-463e-8d85-0be98f3b6f8d", // Charles Brown (school_leader)
        content:
          "There will be a special assembly next week. All students are required to attend.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        announcementId: uuidv4(),
        authorId: "c4b64cf3-593f-4d3d-b0ee-b0cb06a3493d", // Diana White (school_leader)
        content:
          "School exams will start from next Monday. Make sure you're prepared.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Announcements", null, {});
  },
};
