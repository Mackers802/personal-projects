const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");

// require("dotenv").config();

app.use(express.json());
app.use(morgan("dev"));

mongoose.connect(
  "mongodb://localhost:27017/allMoxy",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
  () => console.log("connected to allMoxy")
);

app.use("/item", require("./routes/itemRouter.js"));

app.use((err, req, res, next) => {
  console.log(err);
  return res.send({ errMsg: err.message });
});

app.listen(9000, () => {
  console.log("Running on port 9000");
});
