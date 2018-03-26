const model = require('../models/movies')

const getAll = (req, res, next) => {
  const data = model.getAll()
  data.then(result => {
    res.status(200).json({result})
  })
}

const getMovie = (req, res, next) => {
  const id = req.params.id
  const data = model.getMovie(id)
  if (result.errors) {
    res.status(404).json({
      error: {
        message: `Could not find shift by ID`,
        errors: result.errors
      }
    })
  } else {
    res.status(200).json({data})
  }
}

const addMovie = (req, res, next) => {
  const data = model.addMovie(req.body)
  if (data.errors) {
    return next({status: 400, message: `Could not create new request`, errors: data.errors})
  }

  data.then(result => {
    res.status(201).json({result})
  })
}

const editMovie = (req, res, next) => {
  const id = req.params.id
  console.log(id, "id in edit movie ctrl");
}

const deleteMovie = (req, res, next) => {
  const id = req.params.id
  const data = model.deleteMovie(id)
  data.then(result => {
    if (result.length === 0) {
      res.status(404).json({error: `ID ${id} not found`})
    } else {
      res.status(200).json({message: `Sucessfully deleted user_shifts ${id}`})
    }
  })
}

module.exports = {
  getAll,
  getMovie,
  addMovie,
  editMovie,
  deleteMovie
}
