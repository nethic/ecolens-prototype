
const db = require('../model');

module.exports = (app) => {

    app.get('/flora/inventory/list/retrieve', async (req, res) => {
        let listArr = [];
        await db.floraFamilyList.findAll().then(data => {
            listArr = data.map(row => {
                return [row.familyID, row.familyName, []];
            });
        });
        await db.floraSpeciesList.findAll().then(data => {
            data.forEach(species => {
                listArr[species.familyID-1][2].push([species.speciesID, species.speciesName]);
            });
        });
        res.send(listArr);
    });

    app.post('/flora/inventory/observation', (req, res) => {
        db.floraInventory.findOrCreate({
            where: {
                siteID: req.body.siteID,
                studyYear: req.body.studyYear,
                speciesID: req.body.speciesID
            },
            defaults: {
                siteID: req.body.siteID,
                studyYear: req.body.studyYear,
                speciesID: req.body.speciesID
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
                siteID: req.body.siteID,
                studyYear: req.body.studyYear,
                speciesID: req.body.speciesID
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
