'use strict';
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        name: 'Widada',
        profession: 'Admin Botcamp',
        role: 'admin',
        email: 'widada@gmail.com',
        password: await bcrypt.hash('123', 10),
        created_at: new Date(),
        updated_at: new Date()
      }, {
        name: 'Septinus',
        profession: 'Back End Developer',
        role: 'student',
        email: 'septinus@gmail.com',
        password: await bcrypt.hash('123', 10),
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
