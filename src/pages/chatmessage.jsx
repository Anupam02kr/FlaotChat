import Chatboticon from "./chatbotIcon";

const ChatMessage = ({ chat }) => {
  if (!chat || typeof chat.text !== "string") return null;

  return (
    <div className={`message ${chat.role === "model" ? "bot" : "user"}-message`}>
      {chat.role === "model" && <Chatboticon />}
      <p className="message-text">{chat.text}</p>
    </div>
  );
};

export default ChatMessage;