import app from './app';
const sequelize = require('./database/config');

const main = () => {
  app.listen(app.get('port'), () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
  });
  sequelize
    .sync()
    .then((result) => {
      //console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

main();
