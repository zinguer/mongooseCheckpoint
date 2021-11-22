const mongoose = require("mongoose");
const config = require("config");

const connectDB = async () => {
  // mongoose.connect(config.get("MONGO_URI") ,{ useNewUrlParser: true , useUnifiedTopology: true})
  // .then(()=> console.log("mongoose connected"))
  // .catch('error connection to database')
  try {
    await mongoose.connect(config.get("MONGO_URI"));
    console.log("database connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
