
module.exports = (app) => {

    app.get('/test', (req, res) => {
        res.send( { express: 'Connected to server.' } );
    });

}
