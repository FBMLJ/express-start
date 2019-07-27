const userController = require('../controller').user;
module.exports = (app) => {
  app.get('/', (req, res) => res.render('user/sign_in'))
  app.post('/cadastre', userController.create);
  app.get('/cadastre', (req, res) => res.render('user/sign_up'))

}