const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/index');

const app = express();
const PORT = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});