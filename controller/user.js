const User = require('../models').User

module.exports = {
  create(req, res){
    return User
    .create({
      name: req.body.name,
      password: req.body.password,
      username: req.body.username
    })
    .then (user => res.status(201).send(user))
    .catch (error => res.status(400).send(error))
  },
}