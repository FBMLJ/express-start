const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const http = require('http');
const handlebars = require('express-handlebars')


const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//config handlebars
  //Template Engine
  app.engine('handlebars', handlebars({ defaultLayout: 'main'}))
  app.set('view engine', 'handlebars')
  
const port = parseInt(process.env.PORT, 10) || 8000;
app.set('port', port);

require('./routers/index')(app)
const server = http.createServer(app);
server.listen(port);
module.exports = app