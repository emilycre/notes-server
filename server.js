require('dotenv').config();
require('./lib/utils/connect')();

const app = require('./lib/app');

const PORT = process.env.PORT || 7890;

app.use('/api/v1/notes', require('./lib/routes/notes'));

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on ${PORT}`);
});
