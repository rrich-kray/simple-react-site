import React from "react";
import "./Tiles.css";
import Tile from "../Tile/Tile";

const Tiles = () => {
  const tileData = [
    {
      background: "https://wallpaperaccess.com/download/office-1393461",
      description:
        "Non enim fugiat mollit ipsum. Laboris sit sint ipsum dolor proident. Eu commodo aliqua laborum esse laborum ad cupidatat non duis. Veniam commodo esse amet quis ut anim mollit exercitation ut.",
    },
    {
      background: "https://wallpaperaccess.com/download/office-1393452",
      description:
        "Non enim fugiat mollit ipsum. Laboris sit sint ipsum dolor proident. Eu commodo aliqua laborum esse laborum ad cupidatat non duis. Veniam commodo esse amet quis ut anim mollit exercitation ut.",
    },
    {
      background: "https://wallpaperaccess.com/download/office-1393402",
      description:
        "Non enim fugiat mollit ipsum. Laboris sit sint ipsum dolor proident. Eu commodo aliqua laborum esse laborum ad cupidatat non duis. Veniam commodo esse amet quis ut anim mollit exercitation ut.",
    },
    {
      background: "https://wallpaperaccess.com/download/office-1393370",
      description:
        "Non enim fugiat mollit ipsum. Laboris sit sint ipsum dolor proident. Eu commodo aliqua laborum esse laborum ad cupidatat non duis. Veniam commodo esse amet quis ut anim mollit exercitation ut.",
    },
    {
      background: "https://wallpaperaccess.com/download/office-1393325",
      description:
        "Non enim fugiat mollit ipsum. Laboris sit sint ipsum dolor proident. Eu commodo aliqua laborum esse laborum ad cupidatat non duis. Veniam commodo esse amet quis ut anim mollit exercitation ut.",
    },
    {
      background: "https://wallpaperaccess.com/download/office-1393313",
      description:
        "Non enim fugiat mollit ipsum. Laboris sit sint ipsum dolor proident. Eu commodo aliqua laborum esse laborum ad cupidatat non duis. Veniam commodo esse amet quis ut anim mollit exercitation ut.",
    },
    {
      background: "https://wallpaperaccess.com/download/office-1393228",
      description:
        "Non enim fugiat mollit ipsum. Laboris sit sint ipsum dolor proident. Eu commodo aliqua laborum esse laborum ad cupidatat non duis. Veniam commodo esse amet quis ut anim mollit exercitation ut.",
    },
    {
      background: "https://wallpaperaccess.com/download/office-1164874",
      description:
        "Non enim fugiat mollit ipsum. Laboris sit sint ipsum dolor proident. Eu commodo aliqua laborum esse laborum ad cupidatat non duis. Veniam commodo esse amet quis ut anim mollit exercitation ut.",
    },
  ];
  return (
    <div id="tile-container">
      {tileData.map((tile) => (
        <Tile background={tile.background} description={tile.description} />
      ))}
    </div>
  );
};

export default Tiles;
