const { default: mongoose } = require("mongoose");

const ConnectDB = async () => {
  try {
    await mongoose.connect(process.env.MOGODB_URL);
    console.log("Connected to Database..");
  } catch (error) {
    console.log("Error while connecting to Database", error);
  }
};

module.exports = ConnectDB;
