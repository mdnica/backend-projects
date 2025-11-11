const express = require("express");
const bodyParser = require("body-parser");
const taskRoutes = require("./routes/taskRoutes");

const app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Welcome to the Task Manager API!");
});

app.use("/api/tasks", taskRoutes);

const PORT = 3003;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
