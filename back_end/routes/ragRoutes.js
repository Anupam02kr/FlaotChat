const express = require("express");
const router = express.Router();
const axios = require("axios");

router.post("/generate", async (req, res) => {
  try {
    const { query } = req.body;

    const response = await axios.post("http://127.0.0.1:8000/rag", {
      query: query
    });

    res.json(response.data);

  } catch (error) {
    console.error("RAG API error:", error.message);
    res.status(500).json({ error: "RAG request failed" });
  }
});

module.exports = router;