import React, { useState, useEffect } from "react";
import "./App.css";
import data from "./asset/data.json";
import Header from "./components/Header";
import Container from "./components/Container";
import Darkmode from "./theme/Darkmode";

function App() {
  const [search, setSearch] = useState("");
  const [emoji, setEmoji] = useState([]);
  useEffect(() => {
    const filterData = data.filter((item) =>
      item.keywords.toLowerCase().includes(search.toLowerCase())
    );
    setEmoji(filterData);
  }, [search]);
  return (
    <div className="App">
      <div>
        <Darkmode />
        <Header setSearch={setSearch} />
      </div>
      <Container data={emoji} />
    </div>
  );
}

export default App;
