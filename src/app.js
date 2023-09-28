const express = require('express');
const { LoginRoute, UserRoute, CategoryRoute, BlogPostRoute } = require('./routes');

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());
app.use('/login', LoginRoute);
app.use('/user', UserRoute);
app.use('/categories', CategoryRoute);
app.use('/post', BlogPostRoute);
// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
