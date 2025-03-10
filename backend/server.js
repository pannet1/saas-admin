const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");

const app = express();
const PORT = 3001;

// Middleware
app.use(express.json());
app.use(cors());

// Connect to SQLite database
const db = new sqlite3.Database("database.sqlite", (err) => {
    if (err) {
        console.error("Error connecting to SQLite:", err.message);
    } else {
        console.log("Connected to SQLite database.");
    }
});

// Create a new server entry
app.post("/server", (req, res) => {
    const { name, info1, info2, info3, info4 } = req.body;

    db.run(
        "INSERT INTO server (name, info1, info2, info3, info4) VALUES (?, ?, ?, ?, ?)",
        [name, info1, info2, info3, info4],
        function (err) {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.status(201).json({ id: this.lastID });
        }
    );
});

// Get all servers
app.get("/servers", (req, res) => {
    db.all("SELECT * FROM server", [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows);
    });
});

// Get a single server by ID
app.get("/server/:id", (req, res) => {
    const { id } = req.params;

    db.get("SELECT * FROM server WHERE id = ?", [id], (err, row) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (!row) {
            return res.status(404).json({ error: "Server not found" });
        }
        res.json(row);
    });
});

// Update a server entry
app.put("/server/:id", (req, res) => {
    const { id } = req.params;
    const { name, info1, info2, info3, info4 } = req.body;

    db.run(
        "UPDATE server SET name = ?, info1 = ?, info2 = ?, info3 = ?, info4 = ? WHERE id = ?",
        [name, info1, info2, info3, info4, id],
        function (err) {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            if (this.changes === 0) {
                return res.status(404).json({ error: "Server not found" });
            }
            res.json({ message: "Server updated successfully" });
        }
    );
});

// Delete a server entry
app.delete("/server/:id", (req, res) => {
    const { id } = req.params;

    db.run("DELETE FROM server WHERE id = ?", [id], function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (this.changes === 0) {
            return res.status(404).json({ error: "Server not found" });
        }
        res.json({ message: "Server deleted successfully" });
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

