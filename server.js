const express = require("express");
const cors = require("cors");

const PORT = 4000;
const projectsData = require("./projects.json");
const aboutData = require("./about.json");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("home");
});

app.get("/projects", (req, res) => {
  res.json(projectsData);
});

app.get("/about", (req, res) => {
  res.json(aboutData);
});

app.listen(PORT, () => console.log("listening on port", PORT));
