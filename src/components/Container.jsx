import React from "react";
function Container({data}) {
  return (
    <div className="container">
      {data.slice(0,100).map((item) => {
        return (
          <div key={item.title} className="emoji" onClick={()=>{navigator.clipboard.writeText(item.symbol)}}>
            <p id="symbol">{item.symbol}</p>
            <p id="title">{item.title}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Container;
