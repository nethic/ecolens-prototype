
module.exports = (app, crypt, db) => {
    const saltRounds = 10;


    app.get('/test', (req, res) => {
        res.send( { express: 'Connected to server.' } );
    });

    app.get('/auth', (req, res) => {
        res.send( {message: 'this is the auth path'});
    });

    app.post('/auth/signup', (req, res) => {
        let myPlaintextPassword = req.body.pass;
        var user = req.body.user;

        db.userList.find({
            where:{
                userName:user
            }
        }).then(function(e) {
            if(!e) {

                crypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
                    // Store hash in your password DB.
                  pass = hash
                  res.send( {message: 'SIGNUP!!!  received username: ' + user+ 'and password: ' + pass});
        
                  db.userList.create({userName: user, passHash: pass})
                });

            }
            else{
                res.send({message:'Username is already in use, you were too slow.'})
            }
        })
        
    })

    app.post('/auth/login', (req, result) => {
        let myPlaintextPassword = req.body.pass;
        var user = req.body.user;


        db.userList.findOne({ where: {userName: user} }).then(u => {
            // project will be the first entry of the Projects table with the title 'aProject' || null
            if(u){
                hash = u.passHash
                crypt.compare(myPlaintextPassword, hash, function(err, res) {
                    if(res){
                        result.send( {message: user + " has been logged in!!"});
                    }
                    else{
                        result.send({message: "incorrect password!!"})
                    }
                });
            }
            else{
                result.send({message: "Username not Found!!"})
            }
          })


    })

}
