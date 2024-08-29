const { v4: uuidv4 } = require("uuid");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("SchoolLeaderProfiles", [
      {
        schoolLeaderId: "95bb6bfb-2f8a-463e-8d85-0be98f3b6f8d",
        position: "Principal",
        bio: "Leading the school with integrity.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        schoolLeaderId: "c4b64cf3-593f-4d3d-b0ee-b0cb06a3493d",
        position: "Dean of Students",
        bio: "Overseeing student affairs.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("SchoolLeaderProfiles", null, {});
  },
};
