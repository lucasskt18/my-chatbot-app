import React from "react";
import Chat from "../Chat/Chat";
import SearchHistory from "../SearchHistory/SearchHistory";
import OptionsBar from "../OptionsBar/OptionsBar";
import Account from "../Account/Account";
import "./App.css";

const App = () => (
  <div className="app-container">
    <Account />
    <SearchHistory />
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Chat />
      <OptionsBar />
    </div>
  </div>
);

export default App;
