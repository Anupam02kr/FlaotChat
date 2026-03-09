import Chatboticon from "./chatbotIcon";

const ChatMessage = ({ chat }) => {
  if (!chat || !chat.text) return null;

  return (
    <div className={`message ${chat.role === "model" ? "bot" : "user"}-message`}>
      {chat.role === "model" && <Chatboticon />}
      <p className="message-text" style={{ whiteSpace: "pre-wrap" }}>
        {chat.text}
      </p>
    </div>
  );
};

export default ChatMessage;