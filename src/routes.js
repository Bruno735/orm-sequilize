const express = require("express");

const UserController = require("./controllers/UserController");
const User = require("./models/User");

const  routes = express.Router();

routes.post("/user", UserController.store);

routes.get("/user", UserController.index);

routes.delete("/user/:id", UserController.delete)

module.express = routes;

routes.post("/users", UserController.store);

module.exports = routes;