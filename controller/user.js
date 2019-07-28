const User = require('../models').user
var bcrypt = require("bcrypt");
const validPassword =   (password, t_password) => {
  return bcrypt.compareSync(password, t_password);
}

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
  sign_in(req, res){
    var username = req.body.username,
      password = req.body.password;

    User.findOne({ where: { username: username } }).then(function (user) {
      if (!user) {
        res.redirect('/login');
      } else if (!validPassword(password, user.password)) {
        res.redirect('/login');
      } else {
        req.session.user = user.dataValues;
        res.redirect('/home');
      }
    });
  }
}