const express = require('express');
const api_routes = require('./routes/api_routes');
const html_routes = require('./routes/html_routes');

// Initialize express function and the PORT method
const PORT = process.env.PORT || 3001;
const app = express();

// Middleware and static 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use("/api", api_routes);
app.use("/", html_routes);

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:3001:${POST}`);
})