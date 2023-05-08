'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('pessoas', [
      {nome:'Kimberly', idade:17, sobrenome:'Silva'}, 
      {nome:'Estevan', idade:18, sobrenome:'Ferreira'},
      {nome:'Isa', idade:20, sobrenome:'Santos'},
      {nome:'Carina', idade:19, sobrenome:'Soares'},
      {nome:'Lucas', idade:22, sobrenome:'Souza'}     
      ], {});
  },

  async down (queryInterface, Sequelize) {
  
   await queryInterface.bulkDelete('pessoas', null, {});
    
  }
};
