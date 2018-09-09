
require('dotenv').config();
const port = process.env.PORT || 3001;
const db = require('./model');
const bparse = require('body-parser');
const express = require('express');
const app = express();

app.use(bparse.urlencoded({ extended: true }));
app.use(bparse.text());
app.use(bparse.json());

require('./controller/homeController')(app);

let syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
    syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
    app.listen(port, () => console.log(`Listening on port ${port}.`));
});