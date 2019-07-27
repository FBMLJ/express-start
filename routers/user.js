const User = require('../controller').user;
module.exports = (app, sessionChecker) => {

  //Login
  app.route('/login')
    .get(sessionChecker, (req, res) => {
      res.render('user/sign_in')
    })
    .post((req, res) => {
      var username = req.body.username,
        password = req.body.password;

      User.findOne({ where: { username: username } }).then(function (user) {
        if (!user) {
          res.redirect('/sign_in');
        } else if (!user.validPassword(password)) {
          res.redirect('/sign_in');
        } else {
          req.session.user = user.dataValues;
          res.redirect('/home');
        }
      });
    });
  // app.get('/login', sessionChecker,(req, res) => res.render('user/sign_in'))
  
  // app.post('/cadastre', userController.create);
  // app.get('/cadastre', sessionChecker,(req, res) => res.render('user/sign_up'))

}