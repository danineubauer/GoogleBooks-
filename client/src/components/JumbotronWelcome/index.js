import React from "react";
import "./style.css"

function JumbotronWelcome({ children }) {
  return (
    <div
      style={{ height: 300, clear: "both", padding: 0, textAlign: "center" }}
      className="jumbotron"
      float-md-center
      >
      {children}
    </div>
  );
}

export default JumbotronWelcome;
