import { useState } from "react";
import axios from "axios";
import "./Admin.css";

function Admin() {

  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleUpload = async () => {

    if (!file) {
      setMessage("Please select a NetCDF file");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {

      const res = await axios.post(
        "http://localhost:5000/upload-netcdf",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      setMessage(res.data.message);

    } catch (err) {
      console.error(err);
      setMessage("Upload failed");
    }
  };

  return (
    <div className="superior">

      <div className="admin-box">

        <div className="admin-header">
          <h2>Admin Panel</h2>
        </div>

        <div className="admin-body">

          <p className="admin-desc">
            Upload Argo Float NetCDF files to insert ocean data into the database.
          </p>

          <input
            type="file"
            accept=".nc"
            onChange={(e) => setFile(e.target.files[0])}
            className="admin-file"
          />

          <button
            className="admin-upload-btn"
            onClick={handleUpload}
          >
            Upload NetCDF
          </button>

          {message && (
            <p className="admin-message">
              {message}
            </p>
          )}

        </div>

      </div>

    </div>
  );
}

export default Admin;