const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")

require("dotenv").config();
const expressJwt = require("express-jwt");

app.use(express.json())
app.use(morgan("dev"))

mongoose.connect(
    "mongodb://localhost:27017/road-ahead",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    },
    () => console.log("connected to road-ahead")
  );

  app.use("/auth", require("./routes/userRouter.js"))
  app.use("/api", expressJwt({ secret: process.env.SECRET, algorithms: ["HS256"] }))
  // app.use("api/application", require("./routes/applicationRouter.js"))
//   app.use("/profile", require("./routes/userProfileRouter.js"))

  app.use((err, req, res, next) => {
    console.log(err);
    if (err.name === "UnauthorizedError") {
      res.status(err.status);
    }
    return res.send({ errMsg: err.message });
  });

  app.listen(9000, () => {
      console.log("running on 9000")
  })