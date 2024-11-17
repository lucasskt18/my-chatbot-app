import React, { useState } from "react";

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
    <div>
      {messages.map((msg, index) => (
        <div key={index}>
          <p>
            <strong>Usuário:</strong> {msg.user}
          </p>
          <p>
            <strong>Chatbot:</strong> {msg.bot}
          </p>
        </div>
      ))}
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Digite sua mensagem..."
      />
      <button onClick={sendMessage}>Enviar</button>
    </div>
  );
};

export default Chat;
