// src/client/components/Chat/Chat.tsx
import React, { useState } from "react";
import FileAttachmentButton from "../FileAttachmentButton/FileAttachmentButton";
import WebSearchButton from "../WebSearchButton/WebSearchButton";
import './Chat.css';

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<{ user: string; bot: string }[]>([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input) return;

    const userMessage = input;
    setInput("");
    setMessages([...messages, { user: userMessage, bot: "..." }]);

    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: userMessage }),
    });

    const data = await response.json();
    setMessages([...messages, { user: userMessage, bot: data.reply }]);
  };

  return (
    <div className="chat-container">
      {messages.map((msg, index) => (
        <div key={index} className="message">
          <p className="user-message">Usuário: {msg.user}</p>
          <p className="bot-message">Chatbot: {msg.bot}</p>
        </div>
      ))}
      <div className="input-container">
        <FileAttachmentButton />
        <WebSearchButton />
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Digite sua mensagem..."
        />
        <button onClick={sendMessage}>Enviar</button>
      </div>
    </div>
  );
};

export default Chat;
