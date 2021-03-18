'use strict';
const jwt = require('jsonwebtoken');
const passport = require('passport');

const login = (req, res, next) => {
  // TODO: add passport authenticate
  passport.authenticate('local', {session: false}, (err, user, info)=>{
      console.log('login info', info);
      if(err || !user){
          return res.send('error')
      }

req.login(user, {session: false}, (err)=>{
    if(err){
        return res.send('error');
    }

    const token = jwt.sign(user, '1234');
    return res.json({token: token})
})

  })(req, res, next);
};

module.exports = {
  login,
};