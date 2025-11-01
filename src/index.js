// src/index.js
"use strict";

const express = require("express");
const path = require("path");

const app = express();

// Serve static files from the 'src/static' directory
app.use(express.static(path.join(__dirname, "static")));

// Export the app for tests and other programs to import without side effects
module.exports = app;

// Only start the server when this file is run directly (node src/index.js)
if (require.main === module) {
  const PORT = process.env.PORT || 5000;
  const server = app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });

  // Export server for external shutdown if someone requires this file after running it directly
  module.exports.server = server;
}
