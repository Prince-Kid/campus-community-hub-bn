module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("ChatRoomParticipants", {
      chatRoomParticipantId: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      chatRoomId: {
        type: Sequelize.UUID,
        references: {
          model: "ChatRooms",
          key: "chatRoomId",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      userId: {
        type: Sequelize.UUID,
        references: {
          model: "Users",
          key: "userId",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
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
    await queryInterface.dropTable("ChatRoomParticipants");
  },
};
