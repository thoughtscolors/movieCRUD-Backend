const moviesDb = require('../../queries/main')
const uuid = require('uuid/v4')

const getAll = () => {
  const movies = moviesDb.getAll()
  return movies.then(result => {
    return result
  })
}

const getMovie = (id) => {
  const movie = moviesDb.getMovie(id)
  return movie.then(result => {
    console.log('result in model', result, 'result|||result[0]', result[0])
    return result[0]
  })
}

const addMovie = (body) => {
  const errors = []
  const id = uuid()
  const title = body.title
  const director = body.director
  const year = body.year
  const rating = body.rating

  if (!id || !title || !director || !year || !rating) {
    errors.push('Missing id, title, director, year, or rating')
    return {errors}
  } else {
    const newMovie = moviesDb.addMovie(id, title, director, year, rating)
    return newMovie.then(result => {
      console.log("addMovie result in models", result, result[0]);
      return result[0]
    })
  }
}

const editMovie = (body) => {
  const errors = []

  const title = body.title
  const director = body.director
  const year = body.year
  const rating = body.rating

  if (!title || !director || !year || !rating) {
    errors.push('Missing title, director, year, or rating')
    return {errors}
  } else {
    const edited = moviesDb.editMovie(title, director, year, rating)
    return edited.then(result => {
      console.log("editMovie result in models", result, result[0]);
      return result[0]
    })
  }
}

const deleteMovie = (id) => {
  const errors = []

  if (!id) {
    errors.push('Movie id is required')
  }
  const deleteMovie= moviesDb.deleteMovie(id)
  return deleteMovie.then(result => {
    return result
  })
}


module.exports = {
  getAll,
  getMovie,
  addMovie,
  editMovie,
  deleteMovie
}
