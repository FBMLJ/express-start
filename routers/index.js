const userController = require('../controller').user;

module.exports = (app) => {
  app.get('/',(req,res) => res.status(200).send({
    mensage: "tudo bem"
  }));

  app.post('/cadastre', userController.create);
}