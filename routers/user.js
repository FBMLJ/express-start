const User = require('../controller').user;
module.exports = (app, sessionChecker) => {

  //Login
  app.route('/login')
    .get(sessionChecker, (req, res) => res.render('user/sign_in'))
    .post((req, res) => {
      const username = req.body.username,
        password = req.body.password;
      User.get_username(username).then(function (user) {
        if (!user) res.redirect('/login');
        else if (!user.validPassword(password)) res.redirect('/login');
        else {
          req.session.user = user.dataValues;
          res.redirect('/home');
        }
      });
    });
  // app.get('/login', sessionChecker,(req, res) => res.render('user/sign_in'))
  
  app.post('/cadastre', User.create);
  app.get('/cadastre', sessionChecker,(req, res) => res.render('user/sign_up'))

}