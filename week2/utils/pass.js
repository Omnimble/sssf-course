"use strict";
const passport = require("passport");
const Strategy = require("passport-local").Strategy;
const passportJWT = require("passport-jwt");
const JWTSTrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJWT;
const { getUserLogin } = require("../models/userModel");

passport.use(
  new Strategy((username, password, done) => {
    // get user by username from getUserLogin
    const user = getUserLogin(username);
    // if user is undefined
    if (user === undefined) {
      return done(null, false);
    }
    // if passwords dont match
    if (user.password !== password) {
      return done(null, false);
    }
    // if all is ok
    return done(null, user.user_id);
  })
);

passport.use(
  new JWTSTrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      sexretOrKey: "1234",
    },
    (jwtPayload, done) => {
      console.log("payload: ", jwtPayload);
      if (jwtPayload !== undefined) return done(null, jwtPayload);
    }
  )
);

module.exports = passport;
