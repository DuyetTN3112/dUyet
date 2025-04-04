module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        username: 'Doe',
        email: 'example@example.com',
        gpa: 3.4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'Doe',
        email: 'example@example.com',
        gpa: 3.1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'Doe',
        email: 'example@example.com',
        gpa: 2.8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  },
};