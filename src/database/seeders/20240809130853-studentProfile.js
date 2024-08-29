const { v4: uuidv4 } = require("uuid");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("StudentProfiles", [
      {
        studentId: "d69b67f9-6a98-41e3-85e6-d4d3a3d6bc10",
        rollNumber: 202120354,
        major: "Computer Science",
        class: "y2 cs Day",
        department: "Engineering",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        studentId: "4c7123a7-6873-41da-b3a5-3e6bc6b007d0",
        rollNumber: 202120308,
        major: "Mathematics",
        class: "Y3 math Day",
        department: "Science",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("StudentProfiles", null, {});
  },
};
