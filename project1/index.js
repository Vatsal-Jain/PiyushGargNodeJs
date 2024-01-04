const express = require("express");
const users = require("./MOCK_DATA.json");
const app = express();
const Port = 8000;
const dotenv = require("dotenv");
const fs = require("fs");
const mongoose = require("mongoose");
const userRouter = require("./routes/user.js");
dotenv.config({
  path: "./.env",
});

//connect mongoose

mongoose
  .connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`)
  .then(() => {
    console.log("mongdb Connected");
  })
  .catch((error) => {
    console.log("Mongodb connecteion error", error);
  });

// Schema

app.use(express.urlencoded({ extended: false }));

app.listen(Port, () => {
  console.log("App listening on", Port);
});
//Routes

app.use("/api/users", userRouter);
