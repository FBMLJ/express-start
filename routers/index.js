userRouters = require('./user')
module.exports = (app) => {
  
  const sessionChecker = (req, res, next) => {
    if (req.session.user && req.cookies.user_sid)  res.redirect('/home');
    else next();
  };
  const sessionOutChecker = (req, res, next) => {
    if (!(req.session.user && req.cookies.user_sid)) res.redirect('/login');
    else next();
  };

  app.get('/', sessionChecker, (req, res) => res.redirect('/login'));
  userRouters(app, sessionChecker)
  
  app.get('/home', sessionOutChecker,(req, res) => res.render('static_pages/home'))
}