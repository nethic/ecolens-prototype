
module.exports = (app, crypt, db) => {


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

                crypt.hash(myPlaintextPassword).then(hash => {
                    res.send( {message: 'SIGNUP!!!  received username: ' + user+ 'and password: ' + hash});

                    db.userList.create({userName: user, passHash: hash})

                }).catch(err => {
                     throw err;
                })

                

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
                crypt.verify(hash, myPlaintextPassword).then(match => {
                    if (match) {
                        result.send( {message: user + " has been logged in!!"});

                    } else {
                        result.send({message: "incorrect password!!"})
                    }
                  }).catch(err => {
                    throw err;
                  });
            }
            else{
                result.send({message: "Username not Found!!"})
            }
          })


    })

}
