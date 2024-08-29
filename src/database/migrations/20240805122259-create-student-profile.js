"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("StudentProfiles", {
      studentId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        references: {
          model: "Users",
          key: "userId",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      rollNumber: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      major: {
        type: Sequelize.STRING(128),
        allowNull: true,
      },
      class: {
        type: Sequelize.STRING(128),
        allowNull: false,
      },
      department: {
        type: Sequelize.STRING(128),
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("StudentProfiles");
  },
};
