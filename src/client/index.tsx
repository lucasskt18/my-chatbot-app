import React from "react";
import ReactDOM from "react-dom";
import Chat from "./components/Chat";

const App = () => (
  <div>
    <h1>Chatbot com OpenAI</h1>
    <Chat />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
