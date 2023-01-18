import React from "react";

function header({setSearch}) {
  return (
    <div className="header">
      <div className="text">
        <h1>Search Emoji</h1>
        <p>A project to find emoji.</p>
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
    </div>
  );
}

export default header;
