
const db = require('../model');

module.exports = (app) => {

    app.get('/sites/view', (req, res) => {
        db.studySites.findAll().then(data => {
            res.send(data);
        });
    });

    app.post('/site/add', (req, res) => {
        db.studySites.findOrCreate({
            where: {
                siteName: req.body.siteName
            },
            defaults: {
                siteName: req.body.siteName
            }
        }).then(data => {
            if (data[1]) {
                res.send('Added site.');
            }
            else {
                res.send('Site already exists.');
            }
        });
    });

    app.get('/years/view', (req, res) => {
        db.floraInventory.aggregate('studyYear', 'DISTINCT', { plain: false }).then(data =>  {
            res.send(data);
        });
    });

    app.get('/year/sites/view', (req, res) => {
        db.floraInventory.aggregate('siteName', 'DISTINCT', {
            where: { studyYear: req.body.studyYear },
            include: [
                { model: db.studySites }
            ],
            plain: false
        }).then(data => {
            res.send(data);
        });
    });

    app.get('/site/years/view', (req, res) => {
        db.floraInventory.aggregate('studyYear', 'DISTINCT', {
            where: { siteID: req.body.siteID },
            include: [
                { model: db.studySites }
            ],
            plain: false
        }).then(data => {
            res.send(data);
        });
    });

    app.get('/site/year/load', (req, res) => {
        db.floraInventory.findAll({
            attributes: ['speciesID'],
            where: {
                siteID: req.body.siteID,
                studyYear: req.body.studyYear
            }
        }).then(data => {
            res.send(data);
        });
    });

}
