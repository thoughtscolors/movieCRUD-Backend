const uuid = require('uuid/v4')

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('movies').del()
    .then(function () {
      // Inserts seed entries
      return knex('movies').insert([
        {id: uuid(), title: 'Mulholland Drive', director: 'David Lynch', year: '2001', rating: '11'},
        {id: uuid(), title: 'Holy Mountain', director: 'Alejandro Jordowosky', year: '1973', rating: '27'}
      ])
    })
    .then(() => {
      return knex.raw(
        `SELECT * FROM movies;`
      )
    })
}
