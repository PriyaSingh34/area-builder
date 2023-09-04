import React, { useState } from "react";
import "./App.css";
import img from "./num.png";

const GridBackground = () => {
  const [isGridBackground, setIsGridBackground] = useState(true);

  const toggleBackground = () => {
    setIsGridBackground(!isGridBackground);
  };

  const renderGridBoxes = () => {
    const gridBoxes = [];
    for (let i = 0; i < 10 * 13; i++) {
      gridBoxes.push(<div key={i} className="grid-box"></div>);
    }
    return gridBoxes;
  };

  return (
    <div className="main">
      <div className="leftbar">
        <button className="btn">Start Over</button>

        <div>
          <h1>Level 1</h1>
          <p>1 of 6</p>
          <p>Score: 0</p>
        </div>
        <div className="toggle">
          <label className="label main">
            <input
              type="checkbox"
              checked={isGridBackground}
              onChange={toggleBackground}
            />
            <img
              className="img"
              src="https://www.clker.com/cliparts/9/6/b/5/1194995495534010262view_grid.svg.hi.png"
              alt=""
            />
            {/* {isGridBackground ? "Grid Background" : "Normal Background"} */}
          </label>
          <label className="label">
            <input type="checkbox" />
            <img className="img" src={img} alt="" />
            {/* {isGridBackground ? "Grid Background" : "Normal Background"} */}
          </label>
        </div>
      </div>

      <div className="outergrid">
        {isGridBackground && (
          <div className="grid-container">
            {/* Render grid boxes using the for loop */}
            {renderGridBoxes()}
          </div>
        )}
        {!isGridBackground && (
          <div className="normal-container">
            <h1>normal container</h1>
          </div>
        )}
        <div className="boxes">
          <div className="box1">1</div>
          <div className="box2">2</div>
          <div className="box3">3</div>
          <div className="box4">4</div>
        </div>
      </div>
    </div>
  );
};

export default GridBackground;
