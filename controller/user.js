const User = require('../models').user
// console.log(User)
module.exports = {
  create(req, res){
    return User.create({
      name: req.body.name,
      password: req.body.password,
      username: req.body.username,
      // updatedAt: Date.now(),
      // createdAt: Date.now()

    })
    .then (user => res.status(201).send(user))
    .catch (error => res.status(400).send(error))
  },
}