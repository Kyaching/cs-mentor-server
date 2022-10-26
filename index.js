const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

const courses = require("./data/courses.json");

app.use(cors());
app.get("/", (req, res) => {
  res.send("Courses API Running");
});

app.get("/courses", (req, res) => {
  res.send(courses);
});

app.get("/courses/:id", (req, res) => {
  const id = req.params.id;
  const course = courses.find((course) => course.id == id);
  res.send(course);
});

app.listen(port, () => {
  console.log(`Courses API running on port ${port}`);
});
