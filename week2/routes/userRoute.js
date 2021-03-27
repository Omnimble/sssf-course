"use strict";

const express = require("express");
const {
  user_list_get,
  user_get,
  user_create_post,
} = require("../controllers/userController");
const router = express.Router();

// const authenticate = (req, res, next) => {
//   // authentication
// }

// router.get('/', authenticate, user_list_get);

router.get("/", user_list_get);

router.get("/:id", user_get);

router.post("/", user_create_post);

router.put("/", (req, res) => {
  res.send("put");
});

router.delete("/", (req, res) => {
  res.send("delete");
});

module.exports = router;
