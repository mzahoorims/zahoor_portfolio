const express = require("express");
const path = require("path");
const portfolioData = require("./data/portfolioData");

const app = express();
const PORT = process.env.PORT || 3000;

// Configure EJS Template Engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve static assets without shadowing the dynamic EJS home route
app.use(express.static(path.join(__dirname, "public"), { index: false }));

// Home Route - Render portfolio with EJS views and dynamic data
app.get("/", (req, res) => {
    res.render("index", { data: portfolioData });
});

// API endpoint to return portfolio data as JSON
app.get("/api/portfolio", (req, res) => {
    res.json(portfolioData);
});

// Health check endpoint
app.get("/health", (req, res) => {
    res.json({ status: "OK", uptime: process.uptime() });
});

// Fallback route handler for all non-matched routes in Express v5
app.use((req, res) => {
    res.status(200).render("index", { data: portfolioData });
});

// Start server listening on all interfaces (0.0.0.0)
app.listen(PORT, "0.0.0.0", () => {
    console.log(`🚀 Portfolio running cleanly at http://localhost:${PORT}`);
});
