// const express = require("express");
// const bcrypt = require("bcrypt");
// const pool = require("../config/db");

// const router = express.Router();

// router.post("/signup", async (req, res) => {
//   try {
//     const { name, email, password } = req.body;

//     if (!name || !email || !password) {
//       return res.status(400).json({ message: "All fields required" });
//     }

//     // Check if email already exists
//     const existingUser = await pool.query(
//       "SELECT * FROM users WHERE email = $1",
//       [email]
//     );

//     if (existingUser.rows.length > 0) {
//       return res.status(400).json({ message: "User already exists" });
//     }

//     // Hash password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Insert user
//     await pool.query(
//       "INSERT INTO users (name, email, password) VALUES ($1, $2, $3)",
//       [name, email, hashedPassword]
//     );

//     res.status(201).json({ message: "User registered successfully" });

//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// module.exports = router;
router.post("/signup", async (req, res) => {
  console.log("SIGNUP ROUTE HIT");
  console.log("BODY:", req.body);

  res.json({ test: "route working" });
});