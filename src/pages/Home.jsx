import React, { useState } from "react";
import FloatChatIcon from "./floatchaticon";
import "./Home.css";
import Chatboticon from "./chatbotIcon";
import ChatForm from "./chatform";
import ChatMessage from "./chatmessage";


function App(){
  const [ chatHistory , setChatHistory] = useState([]);
  {/*arbitary-data*/}
  const data=[
    {id:1,float:'1234',Date:"25 april 2025",latitude:2.5,longitude:-35.4,oxygen:220},
    {id:1,float:'1234',Date:"25 april 2025",latitude:2.5,longitude:-35.4,oxygen:220},
    {id:1,float:'1234',Date:"25 april 2025",latitude:2.5,longitude:-35.4,oxygen:220},
    {id:1,float:'1234',Date:"25 april 2025",latitude:2.5,longitude:-35.4,oxygen:220},
    {id:1,float:'1234',Date:"25 april 2025",latitude:2.5,longitude:-35.4,oxygen:220},
    {id:1,float:'1234',Date:"25 april 2025",latitude:2.5,longitude:-35.4,oxygen:220},
    {id:1,float:'1234',Date:"25 april 2025",latitude:2.5,longitude:-35.4,oxygen:220},
    {id:1,float:'1234',Date:"25 april 2025",latitude:2.5,longitude:-35.4,oxygen:220},
    {id:1,float:'1234',Date:"25 april 2025",latitude:2.5,longitude:-35.4,oxygen:220},
    {id:1,float:'1234',Date:"25 april 2025",latitude:2.5,longitude:-35.4,oxygen:220},
  ]
  return<>
  <div className="superior">
  <div className="primary-box">
    <div className="chatbot">
      <div className="chat-header">
        <div className="header-element">
          <FloatChatIcon/>
        </div>
        <button className="material-symbols-rounded">keyboard_arrow_down</button>
      </div>
      {/*chat messages*/}
      <div className="body">
        <div className="message bot-message">
           <Chatboticon/>
          <p className="message-text">how can i serve you my lord</p>
        </div>

        {/* render the chat history dynamically
        {chatHistory.map((chat, index)=>(
          <ChatMessage key={index} chat={chat} />
        ))}*/}
        {/* ✅ Render chat messages with error safety */}
        {chatHistory.map((chat, index) => {
              try {
                return <ChatMessage key={index} chat={chat} />;
              } catch (err) {
                console.error("Error rendering chat:", err, chat);
                return null;
              }
            })}

      </div>
      {/*chatbot-footer*/}
      <div className="type-area">
        <ChatForm setChatHistory={setChatHistory}/>
      </div>
    </div>
    <div className="dashboard">
      <div className="parameter">
      <div className="parameter-scroll">
      <form action="#" className="data">
        <select id="time_date" name="Time/Date" >
        <option value="">Time/Date</option>
        <option value="today">today</option>
        <option value="last-week">last week</option>
        <option value="last-month">last month</option>
        </select>
        <select id="depth" name="Depth">
        <option value="">Depth</option>
        <option value="0-200m">0-200m</option>
        <option value="400m-600m">400m-600m</option>
        <option value="200m-400m">200m-400m</option>
        </select>
        <select id="region" name="Region" autoComplete="off">
        <option value="">Region</option>
        <option value="Indian ocean">Indian Ocean</option>
        <option value="Pacific">Pacific</option>
        <option value="Arctic">Arctic</option>
        </select>
        <select id="visual" name="Visual">
        <option value="Graph">Graph</option>
        <option value="Statistical">Statistical</option>
        </select>
      </form>
      </div>
      </div>
      <div className="graph-section">
        <div className="graph"></div>
      </div>
      <div className="desired-result">
        <button id="temp">Temperature</button>
        <button id="salinity">Salinity</button>
        <button id="Oxygen">Oxygen</button>
      </div>
      {/*data table*/}
      <div className="heading"><caption>Data</caption>
            </div>
      <div className="table-container">
        <table className="scrollable-table">
          <thead >
            <tr>
              <th >Float</th>
              <th>Date</th>
              <th>Latitude</th>
              <th>Longitude</th>
              <th>Oxygen</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row)=>(
              <tr key={row.id}>
                <td>{row.float}</td>
                <td>{row.Date}</td>
                <td>{row.latitude}</td>
                <td>{row.longitude}</td>
                <td>{row.oxygen}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
  </div>
  </>
}
export default App;