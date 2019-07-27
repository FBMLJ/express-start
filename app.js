// declaração de variaveis
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const http = require('http');
const handlebars = require('express-handlebars')
const session = require('express-session');
const cookieParser = require('cookie-parser');
const app = express();

// App use
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(cookieParser());

// initialize express-session to allow us track the logged-in user across sessions.
app.use(session({
  key: 'user_sid',
  secret: 'somerandonstuffs',
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: 600000
  }
}));

// This middleware will check if user's cookie is still saved in browser and user is not set, then automatically log the user out.
// This usually happens when you stop your express server after login, your cookie still remains saved in the browser.
app.use((req, res, next) => {
  if (req.cookies.user_sid && !req.session.user) {
    res.clearCookie('user_sid');
  }
  next();
});



//config
  //Template Engine
  app.engine('handlebars', handlebars({ defaultLayout: 'main'}))
  app.set('view engine', 'handlebars')
  //config port
  const port = parseInt(process.env.PORT, 10) || 8000;
  app.set('port', port);

require('./routers/index')(app)
const server = http.createServer(app);
server.listen(port);
module.exports = app