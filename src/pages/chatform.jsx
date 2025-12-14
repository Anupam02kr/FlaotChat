import { useRef } from "react";

const ChatForm = ({ setChatHistory }) => {
  const inputRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim().replace(/[\r\n]+/g, " ");
    if (!userMessage) return;
    inputRef.current.value = "";

    // ✅ Add user message
    setChatHistory((history) => [
        ...history,
        { role: "user", text: userMessage },
      ]);
  
      // ✅ Add bot response after delay
      setTimeout(() => {
        setChatHistory((history) => [
          ...history,
          { role: "model", text: "thinking..." },
        ]);
      }, 600);
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
      <button className="material-symbols-rounded">keyboard_arrow_up</button>
    </form>
  );
};

export default ChatForm;