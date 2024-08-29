const { v4: uuidv4 } = require("uuid");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("StudentLeaderProfiles", [
      {
        studentLeaderId: "6a5e3420-c1fb-4411-995b-680d2eb41f8d", // Corresponds to a userId in Users table
        position: "President",
        bio: "Leading the student community with passion.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        studentLeaderId: "2db3fa07-0eb3-43a3-8e2d-3c928b3f3082", // Corresponds to a userId in Users table
        position: "Vice President",
        bio: "Assisting the president in all matters.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("StudentLeaderProfiles", null, {});
  },
};
