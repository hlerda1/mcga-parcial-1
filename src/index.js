require("dotenv").config();
const express = require('express')
const mongoose = require('mongoose')

const app = express()
const router = require("./routes");

app.use(express.json());
app.use(express.static("public"));
app.use(router);

mongoose.connect(process.env.DATABASE_URL)
  .then(() => {
    console.log("🟢 DB Connected");
    app.listen(  { port: process.env.PORTDB } , () => {
      console.log(`🚗 Server running on port 6000`);
    });
  })
  .catch((err) => {
    console.log("🔴 There was an error on the DB connection method.");
    console.log(err);
  });


// app.listen({ port: process.env.PORTAPP }, () => {
//     console.log(`Example app listening on port 5000`)
//   });