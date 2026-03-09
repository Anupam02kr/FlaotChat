const express = require("express");
const cors = require("cors");
const uploadRoutes = require("./routes/upload_routes");

require("dotenv").config();

const authRoutes = require("./routes/authRoutes");

const app = express();

// 1️⃣ CORS FIRST
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

app.use("/", uploadRoutes);
// 2️⃣ JSON parser
app.use(express.json());

// 3️⃣ Routes AFTER middleware
app.use("/api/auth", authRoutes);
app.use("/api/auth", require("./routes/authRoutes"));
const PORT = process.env.PORT || 5000;
const ragRoutes = require("./routes/ragRoutes");
app.use("/api/rag", ragRoutes);

const dataRoutes = require("./routes/dataRoutes");
app.use("/api/data", dataRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
console.log("END OF FILE REACHED");