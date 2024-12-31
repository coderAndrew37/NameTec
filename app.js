require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Middleware to remove .html extension
app.use((req, res, next) => {
  if (!path.extname(req.path)) {
    const requestedFile = path.join(__dirname, "public", req.path + ".html");
    res.sendFile(requestedFile, (err) => {
      if (err) next(); // Continue if file not found
    });
  } else {
    next(); // Continue if path already has an extension
  }
});

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/api/contact", require("./routes/contact"));

// Serve undefined routes to 404.html
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "public", "404.html"));
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
