const bcrypt = require("bcryptjs");
const { v4: uuidv4 } = require("uuid");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const hashedPassword = await bcrypt.hash("123", 10);
    return queryInterface.bulkInsert("Users", [
      {
        userId: "b4a9d8a2-1c9f-4629-a1a5-91f898476d5c",
        firstname: "Admin",
        lastname: "User",
        email: "admin@admin.com",
        profilePicture:
          "https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg",
        password: hashedPassword,
        role: "admin",
        resetPasswordToken: null,
        resetPasswordExpires: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: "d69b67f9-6a98-41e3-85e6-d4d3a3d6bc10",
        firstname: "John",
        lastname: "Doe",
        email: "student1@student.com",
        profilePicture:
          "https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg",
        password: hashedPassword,
        role: "student",
        resetPasswordToken: null,
        resetPasswordExpires: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: "4c7123a7-6873-41da-b3a5-3e6bc6b007d0",
        firstname: "Jane",
        lastname: "Doe",
        email: "student2@student.com",
        profilePicture:
          "https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg",
        password: hashedPassword,
        role: "student",
        resetPasswordToken: null,
        resetPasswordExpires: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: "6a5e3420-c1fb-4411-995b-680d2eb41f8d",
        firstname: "Alice",
        lastname: "Smith",
        email: "leader1@studentleader.com",
        profilePicture:
          "https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg",
        password: hashedPassword,
        role: "student_leader",
        resetPasswordToken: null,
        resetPasswordExpires: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: "2db3fa07-0eb3-43a3-8e2d-3c928b3f3082",
        firstname: "Bob",
        lastname: "Johnson",
        email: "leader2@studentleader.com",
        profilePicture:
          "https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg",
        password: hashedPassword,
        role: "student_leader",
        resetPasswordToken: null,
        resetPasswordExpires: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: "95bb6bfb-2f8a-463e-8d85-0be98f3b6f8d",
        firstname: "Charles",
        lastname: "Brown",
        email: "leader1@schoolleader.com",
        profilePicture:
          "https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg",
        password: hashedPassword,
        role: "school_leader",
        resetPasswordToken: null,
        resetPasswordExpires: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: "c4b64cf3-593f-4d3d-b0ee-b0cb06a3493d",
        firstname: "Diana",
        lastname: "White",
        email: "leader2@schoolleader.com",
        profilePicture:
          "https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg",
        password: hashedPassword,
        role: "school_leader",
        resetPasswordToken: null,
        resetPasswordExpires: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
