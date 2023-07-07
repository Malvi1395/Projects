const express = require('express')
const app = express()
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
var routes = require('./routes/routes');
const cors = require('cors');

app.use(cors(
  {
    origin: "http://localhost:4200"
  }

));

app.listen(9992,function check(err)
{
    if(err)
    console.log("error")
    else
    console.log("started")
});

mongoose.connect("mongodb://127.0.0.1:27017/abc", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch((error) => {
    console.log("Error connecting to the database:", error);
  });

app.use(express.json());
app.use(routes);