
module.exports = (app) => {

    app.get('/test', (req, res) => {
        res.send( { express: 'Connected to server.' } );
    });

    app.get('/auth', (req, res) => {
        res.send( {message: 'this is the auth path'});
    });

}
