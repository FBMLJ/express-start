userRouters = require('./user')
module.exports = (app) => {
  
  const sessionChecker = (req, res, next) => {
    if (req.session.user && req.cookies.user_sid)  res.redirect('/home');
    else next();
  };
  app.get('/', sessionChecker, (req, res) => res.redirect('/login'));
  userRouters(app, sessionChecker)
  
  app.get('/home', (req, res) => res.render('static_pages/home'))
}