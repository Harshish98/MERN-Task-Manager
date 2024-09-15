const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const ConnectDB = require("./config/db");
const task = require("./router");

app.use(cors());
app.use(express.json());
dotenv.config();
app.use("/api", task);

const port = process.env.PORT || 4445;

ConnectDB().then(() => {
  app.listen(port, () => console.log(`App is listening on port - ${port}`));
});
