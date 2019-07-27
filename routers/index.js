const userController = require('../controller').user;

module.exports = (app) => {

  app.post('/cadastre', userController.create);
  app.get('/cadastre', (req,res) => res.render('user/sign_up'))

  app.get('/',(req,res) => {
    res.render('static_pages/home')
  })
}