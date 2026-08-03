const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

// Serve frontend files
app.use(express.static(path.join(__dirname, "frontend")));

const FILE = "events.json";

// Home page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "index.html"));
});

// Get all events
app.get("/events", (req, res) => {
    const data = JSON.parse(fs.readFileSync(FILE));
    res.json(data);
});

// Add event
app.post("/events", (req, res) => {

    const events = JSON.parse(fs.readFileSync(FILE));

    const newEvent = {
        id: Date.now(),
        name: req.body.name,
        date: req.body.date,
        location: req.body.location
    };

    events.push(newEvent);

    fs.writeFileSync(FILE, JSON.stringify(events, null, 2));

    res.json(newEvent);
});

const PORT = 5000;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});