const mongoose = require("mongoose");

async function connectDB() {
  return await mongoose
    .connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`)
    .then(() => {
      console.log("mongdb Connected");
    })
    .catch((error) => {
      console.log("Mongodb connecteion error", error);
    });
}
module.exports = { connectDB };
