const express = require("express");
const session = require("express-session");
const app = express();
const PORT = 3001;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  session({
    secret: "supersecretkey",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }, // 1 minute
  })
);

// Fake user (you can later connect this to a DB)
const USER = { username: "admin", password: "1234" };

// Routes
app.get("/", (req, res) => {
  res.send("Welcome! Please log in at /login");
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username === USER.username && password === USER.password) {
    req.session.user = username;
    res.send(`✅ Login successful! Welcome, ${username}`);
  } else {
    res.status(401).send("❌ Invalid credentials");
  }
});

app.get("/dashboard", (req, res) => {
  if (req.session.user) {
    res.send(`Welcome to your dashboard, ${req.session.user}!`);
  } else {
    res.status(401).send("Access denied. Please log in first.");
  }
});

app.post("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) return res.status(500).send("Error logging out");
    res.send("👋 Logged out successfully");
  });
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
