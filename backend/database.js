
const fs = require("fs");
const path = require("path");
const Database = require("better-sqlite3");

// Connect to SQLite database
const db = new Database("database.sqlite", { verbose: console.log });

// Read SQL file and execute queries
const sqlFilePath = path.join(__dirname, "create.sql");
const sqlQueries = fs.readFileSync(sqlFilePath, "utf8");

try {
    db.exec(sqlQueries);
    console.log("✅ Database initialized successfully.");
} catch (err) {
    console.error("❌ Error initializing database:", err.message);
}

module.exports = db;
