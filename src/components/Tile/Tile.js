import React from "react";
import "./Tile.css";

const Tile = ({ background, description }) => {
  return (
    <div
      className="tile"
      style={{
        backgroundImage: `url('${background}')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="tile-silhouette">
        <p className="tile-description">{description}</p>
      </div>
    </div>
  );
};

export default Tile;
