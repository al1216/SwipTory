const express = require("express");
const app = express();
const dotEnv = require("dotenv");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
dotEnv.config();

app.get("/", (req,res) => {
    res.json({message: "All operational!"})
})

app.listen(process.env.SERVER_PORT, () => {
    mongoose
      .connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("Connected to MongoDB");
        console.log(`Server running on port ${process.env.SERVER_PORT}`);
      })
      .catch(() => {
        console.log("Could not connect to MongoDB");
      });
  });