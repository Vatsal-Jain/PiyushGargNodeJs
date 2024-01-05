const express = require("express");
const app = express();
const Port = 8000;
const dotenv = require("dotenv");

const userRouter = require("./routes/user.js");
const { connectDB } = require("./db/index.js");
dotenv.config({
  path: "./.env",
});

//connect mongoose

connectDB()
  .then(() => {
    console.log("then bloack of connectDB");
  })
  .catch((error) => {
    console.log("catch block of connectDb error is", error);
  });

// Schema

app.use(express.urlencoded({ extended: false }));

app.listen(Port, () => {
  console.log("App listening on", Port);
});
//Routes

app.use("/api/users", userRouter);
