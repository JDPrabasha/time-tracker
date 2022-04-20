const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//set up sequelize initialization

const sequelize = require("./util/database");
const Project = require("./models/project");
const Log = require("./models/log");

Project.hasMany(Log);
Log.belongsTo(Project);

sequelize
  .sync()
  .then((result) => {
    // console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

//set up /project route

const projectRoute = require("./routes/Project");
const logRoute = require("./routes/Log");

app.use("/project", projectRoute);
app.use("/logs", logRoute);

// verify connection to server

app.get("/", function (req, res) {
  res.send("Successfully connected to the server!");
});

app.listen(3000, () => {
  console.log("app listening on port 3000");
});
