import React, { useState, useEffect } from "react";

import FloatChatIcon from "./floatchaticon";
import "./Home.css";
import Chatboticon from "./chatbotIcon";
import ChatForm from "./chatform";
import ChatMessage from "./chatmessage";
import { fetchFilteredData } from "../api/data";
import DatePicker from "react-multi-date-picker";
import "react-datepicker/dist/react-datepicker.css";


import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
function Home() {
  const [chatHistory, setChatHistory] = useState([]);
const [isLoggedIn, setIsLoggedIn] = useState(false);


 // Filter dropdown states
const [selectedRegion, setSelectedRegion] = useState("");
const [selectedDepth, setSelectedDepth] = useState("");
const [selectedDates, setSelectedDates] = useState([]);

// Graph parameter (connect this to your EXISTING graph dropdown)
const [selectedParameter, setSelectedParameter] = useState("temperature");

const [tableData, setTableData] = useState([]);
const [loading, setLoading] = useState(false);
useEffect(() => {
  setTableData([]);
}, []);
const handleFilterChange = async () => {
  const data = await fetchFilteredData({
    region: selectedRegion,
    depth: selectedDepth,
    dateRange: selectedDate,
    parameter: selectedParameter,
  });

  setTableData(data);
};
useEffect(() => {

  if (!selectedRegion && !selectedDepth && selectedDates.length === 0) {
    return;
  }

  const loadData = async () => {

    setLoading(true);

    try {

      const formattedDates = selectedDates.map(
        (d) => d.format("YYYY-MM-DD")
      );

      const data = await fetchFilteredData({
        region: selectedRegion,
        depth: selectedDepth,
        dates: formattedDates
      });

      const formattedData = data.map((row, index) => ({
        float: row.float ?? index + 1,
        date: row.time ?? row.date ?? "-",
        latitude: row.latitude ?? "-",
        longitude: row.longitude ?? "-",
        temperature: row.temperature ?? "-",
        salinity: row.salinity ?? "-",
        oxygen: row.oxygen ?? "-"
      }));

      setTableData(formattedData);

    } catch (err) {
      console.error("Filter fetch error:", err);
    }

    setLoading(false);

  };

  loadData();

}, [selectedRegion, selectedDepth, selectedDates]);
useEffect(() => {
  const checkLogin = () => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(token === "loggedin");
  };

  checkLogin();

  window.addEventListener("storage", checkLogin);

  return () => {
    window.removeEventListener("storage", checkLogin);
  };
}, []);
return (
    <>
      <div className="superior">
        <div className="primary-box">

          {/* ================= CHAT SECTION ================= */}
          <div className="chatbot">
            <div className="chat-header">
              <div className="header-element">
                <FloatChatIcon />
              </div>
              <button className="material-symbols-rounded">
                keyboard_arrow_down
              </button>
            </div>

            <div className="body">

{!isLoggedIn && (
  <div className="chat-lock">
    🔒 Please sign in to use the chatbot
  </div>
)}
              <div className="message bot-message">
                <Chatboticon />
                <p className="message-text">
                  How can I serve you my lord?
                </p>
              </div>

              {/* Render Chat History */}
              {chatHistory.map((chat, index) => {
                try {
                  return <ChatMessage key={index} chat={chat} />;
                } catch (err) {
                  console.error("Chat render error:", err);
                  return null;
                }
              })}
            </div>

           <div className="type-area">

{isLoggedIn && (
  <ChatForm
    setChatHistory={setChatHistory}
    setTableData={setTableData}
    setSelectedParameter={setSelectedParameter}
  />
)}

</div>
          </div>

          {/* ================= DASHBOARD SECTION ================= */}
          <div className="dashboard">

            {/* ===== Dropdown Controls ===== */}
            <div className="parameter">
              <div className="parameter-scroll">
                <form action="#" className="data">
                  <div style={{display:"flex",gap:"10px"}}>

<DatePicker
  multiple
  value={selectedDates}
  onChange={setSelectedDates}
  placeholder="Select Dates"
  className="date-picker"
  portal
/>

</div>

                  <select onChange={(e) => setSelectedDepth(e.target.value)}id="depth" name="Depth">
                    <option value="">Depth</option>
                    <option value="0-200m">0-200m</option>
                    <option value="200m-400m">200m-400m</option>
                    <option value="400m-600m">400m-600m</option>
                  </select>

                  <select
  value={selectedRegion}
  onChange={(e) => setSelectedRegion(e.target.value)}
>
                    <option value="">Region</option>
                    <option value="Indian Ocean">Indian Ocean</option>
                    <option value="Pacific">Pacific</option>
                    <option value="Arctic">Arctic</option>
                  </select>

                  <select value={selectedParameter}
  onChange={(e) => setSelectedParameter(e.target.value)} id="visual" name="Visual">
                    <option value="Graph">Graph</option>
                    <option value="Statistical">Statistical</option>
                  </select>
                </form>
              </div>
            </div>

            {/* ===== Graph Section ===== */}
            <div className="graph-section">
             <div className="graph">
  {loading ? (
    <p style={{ textAlign: "center" }}>Loading...</p>
  ) : (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={tableData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line
  type="monotone"
  dataKey={selectedParameter}
  stroke="#0077b6"
  strokeWidth={2}
  connectNulls
/>
      </LineChart>
    </ResponsiveContainer>
  )}
</div>
            </div>

            {/* ===== Parameter Buttons ===== */}
            <div className="desired-result">
              <button onClick={() => setSelectedParameter("temperature")} id="temp">Temperature</button>
              <button  onClick={() => setSelectedParameter("salinity")} id="salinity">Salinity</button>
              <button  onClick={() => setSelectedParameter("oxygen")} id="Oxygen">Oxygen</button>
            </div>

            {/* ===== Dashboard Heading ===== */}
            <div className="heading">
              {/* <h2>Dashboard</h2> */}
            </div>

            {/* ===== Data Table ===== */}
            <div className="table-container">
              <table className="scrollable-table">
                <thead>
                  <tr>
                    <th>Float</th>
<th>Date</th>
<th>Latitude</th>
<th>Longitude</th>
<th>Temperature</th>
<th>Salinity</th>
<th>Oxygen</th>
                  </tr>
                </thead>

                <tbody>
                  {tableData.length === 0 ? (
                    <tr>
                      <td colSpan="7" style={{ textAlign: "center" }}>
                        No data available
                      </td>
                    </tr>
                  ) : (
                   tableData.map((row, index) => (
  <tr key={index}>
    <td>{row.float ?? "-"}</td>
    <td>{row.date ?? "-"}</td>
    <td>{row.latitude ?? "-"}</td>
    <td>{row.longitude ?? "-"}</td>
    <td>{row.temperature ?? "-"}</td>
    <td>{row.salinity ?? "-"}</td>
    <td>{row.oxygen ?? "-"}</td>
  </tr>
))
                  )}
                </tbody>

              </table>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Home;