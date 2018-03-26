const knex = require('./db')

const getAll = () => {
  return knex('movies')
    .select('')
}

const getMovie = (id) => {
  return knex('movies')
    .select('')
    .where({ id })
}

const addMovie = (id, title, director, year, rating) => {
  return knex
    .insert( { id, title, director, year, rating } )
    .into('movies')
    .returning('*')
}

const editMovie = (id) => {
  return knex
    .insert( { title, director, year, rating } )
    .into('movies')
    .where({ id })
    .returning('*')
}

const deleteMovie = (id) => {
  return knex('movies')
    .delete()
    .returning('*')
    .where({ id })
}

module.exports = {
  getAll,
  getMovie,
  addMovie,
  editMovie,
  deleteMovie
}
