
require('dotenv').config();
const port = process.env.PORT || 3001;
const bparse = require('body-parser');
const express = require('express');
const app = express();

app.use(bparse.urlencoded({ extended: true }));
app.use(bparse.text());
app.use(bparse.json());

require('./controller/homeController')(app);

app.listen(port, () => console.log(`Listening on port ${port}.`));