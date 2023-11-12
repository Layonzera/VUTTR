const express = require('express');
const swaggerUi = require('swagger-ui-express');

const routes = require('./routes');

const swaggerDocs = require('./swagger.json');

const app = express();
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(routes);

app.listen(3333, () => { console.log('Server is running on http://localhost:3333'); });
