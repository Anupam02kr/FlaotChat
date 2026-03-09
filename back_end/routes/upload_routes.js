const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const { spawn } = require("child_process");
const fs = require("fs");


// storage location
const storage = multer.diskStorage({

  destination: function (req, file, cb) {

    const uploadPath = path.join(__dirname, "../../ocen_edl/netcdf");

    // create folder if it doesn't exist
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }

    cb(null, uploadPath);
  },

  filename: function (req, file, cb) {
    cb(null, file.originalname);   // keep original filename
  }

});

const upload = multer({ storage });

router.post("/upload-netcdf", upload.single("file"), (req, res) => {

  const filePath = req.file.path;

  console.log("Saved NetCDF:", filePath);

  const python = spawn("python", [
    "../ocen_edl/ingest_netcdf.py",
    filePath
  ]);

  let output = "";

  python.stdout.on("data", (data) => {
    output += data.toString();
  });

  python.stderr.on("data", (data) => {
    console.error(data.toString());
  });

  python.on("close", () => {

    res.json({
      message: "NetCDF stored and inserted into database",
      file: req.file.originalname,
      result: output
    });

  });

});

module.exports = router;