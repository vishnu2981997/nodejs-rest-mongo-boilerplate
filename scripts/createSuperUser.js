const config = require("config");
const mongoose = require("mongoose");
const prompt = require("prompt-sync")({ sigint: true });

const db = require("../src/api/v1/databases/mongo");
let { helpers } = require("../src/api/v1/helpers");
let services = require("../src/api/v1/services");
let models = require("../src/api/v1/databases/mongo/models");

const init = async () => {
  helpers = helpers({ config });
  models = models({ config, mongoose });
  services = services({ config, models, helpers });

  const { userServices } = services;

  const body = {};

  body.name = prompt("username: default(admin) ") || "admin";
  body.email = prompt("email: default(admin@admin.com) ") || "admin@admin.com";
  body.password = prompt("password: default(admin@123!) ") || "admin@123!";

  let user = {};
  user = await userServices.getUserByEmail(body.email);
  if (user.error) {
    console.log(user.error.message);
    process.exit();
  }
  if (user.data) {
    console.log("Email already exists.");
    // process.exit();
  } else {
    let registerUser = {};
    registerUser = await userServices.addUser(body);
    if (registerUser.error) {
      console.log(registerUser.error.message);
      // process.exit();
    } else {
      console.log("successfully created admin");
      // process.exit();
    }
  }
};

init()
  .then(() => {
    mongoose
      .disconnect()
      .then(() => {
        process.exit();
      })
      .catch();
  })
  .catch();
