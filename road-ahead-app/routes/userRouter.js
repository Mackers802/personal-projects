const express = require("express");
const userRouter = express.Router();
const User = require("../models/user");
const jwt = require("jsonwebtoken");
// const { response } = require("express");

// Signup ✅
userRouter.post("/signup", (req, res, next) => {
  User.findOne(
    {
      username: req.body.username.toLowerCase(),
    },
    (err, user) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      if (user) {
        res.status(403);
        return next(new Error("username taken"));
      }
      const newUser = new User(req.body);
      newUser.save((err, savedUser) => {
        if (err) {
          res.status(500);
          return next(err);
        }
        const token = jwt.sign(savedUser.toJSON(), process.env.SECRET);
        return res.status(201).send({ token, user: savedUser });
      });
    }
  );
});

// login ✅
userRouter.post("/login", (req, res, next) => {
  User.findOne({ username: req.body.username.toLowerCase() }, (err, user) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    if (!user) {
      res.status(403);
      return next(new Error("username or password are incorrect"));
    }
    user.checkPassword(req.body.password, (err, isMatch) => {
      if(err){
        res.status(403)
        return next(new Error("Username or Password are incorrect"))
      }
      if(!isMatch){
        res.status(403)
        return next(new Error("Username or Password are incorrect"))
      }
      const token = jwt.sign(user.toJSON(), process.env.SECRET);
      return res.status(200).send({ token, user });
    })
    // if (req.body.password !== user.password) {
    //   res.status(403);
    //   return next(new Error("username or password are incorrect"));
    // }
  });

});

module.exports = userRouter;