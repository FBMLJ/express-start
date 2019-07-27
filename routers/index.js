userRouters = require('./user')
module.exports = (app) => {
  userRouters(app)
  app.get('/home', (req, res) => res.render('static_pages/home'))
}