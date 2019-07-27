const userController = require('../controller').user;
module.exports = (app, sessionChecker) => {
  
  app.get('/login', sessionChecker,(req, res) => res.render('user/sign_in'))
  
  app.post('/cadastre', userController.create);
  app.get('/cadastre', sessionChecker,(req, res) => res.render('user/sign_up'))

}