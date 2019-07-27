const user_controller = require('../controller').user;
module.exports = (app, sessionChecker) => {

  //Login
  app.route('/login')
    .get(sessionChecker, (req, res) => res.render('user/sign_in'))
    .post((req, res) => user_controller.sign_in(req, res));
  // app.get('/login', sessionChecker,(req, res) => res.render('user/sign_in'))
  
  app.post('/cadastre', user_controller.create);
  app.get('/cadastre', sessionChecker,(req, res) => res.render('user/sign_up'))


  app.get('/logout', (req, res) => {
    if (req.session.user && req.cookies.user_sid) {
      res.clearCookie('user_sid');
      res.redirect('/');
    } else {
      res.redirect('/login');
    }
  });

}