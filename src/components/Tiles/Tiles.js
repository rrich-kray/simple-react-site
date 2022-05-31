import React from "react";
import "./Tiles.css";
import Tile from "../Tile/Tile";

const Tiles = () => {
  const tileData = [
    {
      background: "",
      description:
        "Non enim fugiat mollit ipsum. Laboris sit sint ipsum dolor proident. Eu commodo aliqua laborum esse laborum ad cupidatat non duis. Veniam commodo esse amet quis ut anim mollit exercitation ut.",
    },
    {
      background: "",
      description:
        "Non enim fugiat mollit ipsum. Laboris sit sint ipsum dolor proident. Eu commodo aliqua laborum esse laborum ad cupidatat non duis. Veniam commodo esse amet quis ut anim mollit exercitation ut.",
    },
    {
      background: "",
      description:
        "Non enim fugiat mollit ipsum. Laboris sit sint ipsum dolor proident. Eu commodo aliqua laborum esse laborum ad cupidatat non duis. Veniam commodo esse amet quis ut anim mollit exercitation ut.",
    },
    {
      background: "",
      description:
        "Non enim fugiat mollit ipsum. Laboris sit sint ipsum dolor proident. Eu commodo aliqua laborum esse laborum ad cupidatat non duis. Veniam commodo esse amet quis ut anim mollit exercitation ut.",
    },
    {
      background: "",
      description:
        "Non enim fugiat mollit ipsum. Laboris sit sint ipsum dolor proident. Eu commodo aliqua laborum esse laborum ad cupidatat non duis. Veniam commodo esse amet quis ut anim mollit exercitation ut.",
    },
    {
      background: "",
      description:
        "Non enim fugiat mollit ipsum. Laboris sit sint ipsum dolor proident. Eu commodo aliqua laborum esse laborum ad cupidatat non duis. Veniam commodo esse amet quis ut anim mollit exercitation ut.",
    },
    {
      background: "",
      description:
        "Non enim fugiat mollit ipsum. Laboris sit sint ipsum dolor proident. Eu commodo aliqua laborum esse laborum ad cupidatat non duis. Veniam commodo esse amet quis ut anim mollit exercitation ut.",
    },
    {
      background: "",
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
