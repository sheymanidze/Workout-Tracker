const express = require("express");
const { connect } = require("mongoose");
const mongoose = require("mongoose");
const logger = require('morgan');

const PORT = process.env.PORT || 3001

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/stay-fit',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);


const apiRouter = app.use(require("./routes/api.js"));

const htmlRouter = app.use(require("./routes/html.js"));

app.use(apiRouter);
app.use(htmlRouter);



app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});