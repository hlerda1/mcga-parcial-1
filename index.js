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
    app.listen(  { port: process.env.PORT } , () => {
      console.log(`🚗 Server running on port 4000`);
    });
  })
  .catch((err) => {
    console.log("🔴 There was an error on the DB connection method.");
    console.log(err);
  });


app.listen(3000, () => {
    console.log(`Example app listening on port 3000`)
  });