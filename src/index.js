const express = require('express');
const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express');
const yaml = require('yamljs');

const swaggerDocument = yaml.load('./swagger.yaml');

const app = express();

mongoose.connect('mongodb://localhost:27017/swagger', {
  useNewUrlParser: true
});

app.use('/documentation', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(express.json());
app.use(require('./routes/users'));

app.listen(3000);
