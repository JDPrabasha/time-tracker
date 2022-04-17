const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

const sequelize = require("./util/database");

const Project = require("./models/project");
const Log = require("./models/log");

//set up sequelize initialization

Project.hasMany(Log);

sequelize
  .sync()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

//set up /project route

const projectRoute = require("./routes/Project");

app.use("/project", projectRoute);

// verify connection to server

app.get("/", function (req, res) {
  res.send("Successfully connected to the server!");
});

app.listen(3000, () => {
  console.log("app listening on port 3000");
});
