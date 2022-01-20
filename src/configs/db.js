const mongoose = require("mongoose");
require("dotenv").config();

module.exports = () => {
  return mongoose.connect(
    process.env.databaseLINK,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log("Connected")
  );
};
