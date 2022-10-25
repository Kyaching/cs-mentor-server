const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

const courses_category = require("./data/course_categories.json");

app.use(cors());
app.get("/", (req, res) => {
  res.send("Courses API Running");
});

app.get("/courses", (req, res) => {
  res.send(courses_category);
});

app.listen(port, () => {
  console.log(`Courses API running on port ${port}`);
});
