import React from "react";
import Chat from "../Chat/Chat";
import SearchHistory from "../SearchHistory/SearchHistory";
import OptionsBar from "../OptionsBar/OptionsBar";
import "./App.css";

const App = () => (
  <div className="app-container">
    <SearchHistory />
    <div style={{ flex: 1 }}>
      <Chat />
      <OptionsBar />
    </div>
  </div>
);

export default App;
