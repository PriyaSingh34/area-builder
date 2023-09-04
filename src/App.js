import React from "react";
import GridBackground from "./GridBackground";

const MainComponent = () => {
  return (
    <div className="main-container">
      {/* Use the GridBackground component as a background */}
      <div className="header">
        

        <h1 className="heading">Build it!</h1>
      </div>

      <div>
        <GridBackground />
      </div>

      
    </div>
  );
};

export default MainComponent;
