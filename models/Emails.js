const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const emailSchema = new mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  school: {
    type: String
  },
  desc: {
    type: String
  }
});

module.exports = mongoose.model("Email", emailSchema);