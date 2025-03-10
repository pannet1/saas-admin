
const express = require("express");
const db = require("./database");

const router = express.Router();

// ✅ Create a new record
router.post("/create", async (req, res) => {
  try {
    const { name, email } = req.body;
    await db.insert("users", { name, email });
    res.json({ success: true, message: "User created successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 📌 Read all users
router.get("/users", async (req, res) => {
  try {
    const users = await db.select("users");
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✏️ Update a user
router.put("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;
    await db.update("users", { name, email }, { id });
    res.json({ success: true, message: "User updated successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ❌ Delete a user
router.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await db.delete("users", { id });
    res.json({ success: true, message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
