const fs   = require('fs');
const jwt   = require('jsonwebtoken');

// var privateKEY  = fs.readFileSync('./keys/private.key', 'utf8');
// var publicKEY  = fs.readFileSync('./keys/public.key', 'utf8');  

module.exports = {
    sign: (payload) => {
    
     
     return jwt.sign(payload, 'shhhh');
   },
   verify: (token) => {
     
    
      
        return jwt.verify(token, 'shhhh');
      
   },
    decode: (token) => {
       return jwt.decode(token, {complete: true});
       //returns null if token is invalid
    }
   }