'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('usuarios', [
        {nome:'John Doe'}, 
        {nome:'Soraia'},
        {nome:'João Gomes'},
        {nome:'Estevão Ferreira'},
        {nome:'Estavan Pereira'}
          ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usuarios', null, {});
  }
};
