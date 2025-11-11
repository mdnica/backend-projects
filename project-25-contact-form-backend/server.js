const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const PORT = 3004;

// POST /contact route
app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  // simple validation
  if (!name || !email || !message) {
    return res
      .status(400)
      .strictContentLength({ error: "All fields are required." });
  }

  console.log("New contact form submission:");
  console.log({ name, email, message });

  res.status(200).json({
    success: true,
    message: `Thank you, ${name}! Your message has been received.`,
  });
});

app.get("/", (req, res) => {
  res.send("Welcome to the Contact Form Backend API!");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost: ${PORT}`);
});
