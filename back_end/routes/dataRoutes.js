const express = require("express");
const router = express.Router();
const pool = require("../config/db"); // your postgres pool

router.post("/filter", async (req, res) => {
  const { region, depth, dateRange, parameter } = req.body;

  try {
    let query = `SELECT  time, latitude, longitude, temperature, salinity FROM ocean_measurements WHERE 1=1`;
    let values = [];
    let index = 1;

    if (region) {
      query += ` AND region = $${index++}`;
      values.push(region);
    }

    if (depth) {
      query += ` AND depth_range = $${index++}`;
      values.push(depth);
    }

    if (dateRange === "today") {
      query += ` AND date = CURRENT_DATE`;
    }

    const result = await pool.query(query, values);

    res.json(result.rows);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
});

module.exports = router;