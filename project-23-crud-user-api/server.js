const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Welcome to the User Management API!");
});

app.use("/api/users", userRoutes);

const PORT = 3002;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
