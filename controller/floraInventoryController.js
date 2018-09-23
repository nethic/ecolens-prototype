
const db = require('../model');

module.exports = (app) => {

    app.get('/flora/inventory/list/retrieve', (req, res) => {
        res.send( { express: 'Flora species list goes here.' } );
    });

    app.post('/flora/inventory/observation', (req, res) => {
        db.floraInventory.upsert({
            siteID: req.body.siteID,
            studyYear: req.body.studyYear,
            speciesID: req.body.speciesID
        },
        {
            where: {
                recordID: req.body.recordID
            },
            include: [
                { model: db.floraSpeciesList },
                { model: db.studySites }
            ]
        }).then(data => {
            res.send(data);
        });
    });

    app.delete('/flora/inventory/correction', (req, res) => {
        db.floraInventory.destroy({
            where: {
                recordID: req.body.recordID
            }
        }).then( () => {
            res.end();
        });
    });

    app.post('/flora/inventory/list/new-family', (req, res) => {
        db.floraFamilyList.findOrCreate({
            where: {
                familyName: req.body.familyName
            },
            defaults: {
                familyName: req.body.familyName
            }
        }).then(data => {
            if (data[1]) {
                res.send('Added family.');
            }
            else {
                res.send('Family already exists.');
            }
        });
    });

    app.post('/flora/inventory/list/new-species', (req, res) => {
        db.floraSpeciesList.findOrCreate({
            where: {
                speciesName: req.body.speciesName,
            },
            defaults: {
                speciesName: req.body.speciesName,
                familyID: req.body.familyID
            },
            include: [
                { model: db.floraFamilyList }
            ]
        }).then(data => {
            if (data[1]) {
                res.send('Added species.');
            }
            else {
                res.send('Species already exists.');
            }        
        });
    });

    app.put('/flora/inventory/list/edit-family', (req, res) => {
        db.floraFamilyList.update({
            familyName: req.body.familyName
        },
        {
            where: {
                familyID: req.body.familyID
            }
        }).then(data => {
            res.send(data);
        });
    });

    app.put('/flora/inventory/list/edit-species', (req, res) => {
        db.floraSpeciesList.update({
            speciesName: req.body.speciesName
        },
        {
            where: {
                speciesID: req.body.speciesID
            }
        }).then(data => {
            res.send(data);
        });
    });
    
}
