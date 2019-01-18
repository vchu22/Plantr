const db = require('./models');

db.sync({ force: true })
  .then(() => {
    console.log('Database synced!');
  })
  .catch(err => {
    console.log('Error occured');
  })
  .finally(() => {
    db.close();
  });
