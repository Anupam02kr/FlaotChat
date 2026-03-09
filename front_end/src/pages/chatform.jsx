import { useRef } from "react";
import { generateRAG } from "../api/rag";

const ChatForm = ({ setChatHistory, setTableData, setSelectedParameter }) => {
  const inputRef = useRef();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const userMessage = inputRef.current.value
      .trim()
      .replace(/[\r\n]+/g, " ");

    if (!userMessage) return;

    inputRef.current.value = "";

    // 1️⃣ Add user message
    setChatHistory((history) => [
      ...history,
      { role: "user", text: userMessage },
      { role: "model", text: "Thinking..." },
    ]);

    try {
      // 2️⃣ Call backend RAG
      const result = await generateRAG(userMessage);

      // 3️⃣ Replace thinking message
      setChatHistory((history) => {
        const updated = [...history];
        updated[updated.length - 1] = {
          role: "model",
          text: result.answer || "No response",
        };
        return updated;
      });

      // 4️⃣ Update dashboard data
      if (result.data && result.data.length > 0) {

  const formattedData = result.data.map((row, index) => ({
    float: index + 1,

    date: row.time ? new Date(row.time).toISOString().split("T")[0] : null,

    latitude: row.latitude ?? null,
    longitude: row.longitude ?? null,

    temperature: Number(row.temperature) || null,
    salinity: Number(row.salinity) || null,
    oxygen: Number(row.oxygen) || null
  }));

  console.log("Formatted Table Data:", formattedData);

  setTableData(formattedData);
}

    } catch (error) {
      console.error("RAG Error:", error);

      setChatHistory((history) => {
        const updated = [...history];
        updated[updated.length - 1] = {
          role: "model",
          text: "Something went wrong.",
        };
        return updated;
      });
    }
  };

  return (
    <form className="chat-form" onSubmit={handleFormSubmit}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Ask anything"
        className="user-input"
        required
      />

      <button type="submit" className="material-symbols-rounded">
        keyboard_arrow_up
      </button>
    </form>
  );
};

export default ChatForm;