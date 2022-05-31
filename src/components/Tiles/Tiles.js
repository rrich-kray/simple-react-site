import React from "react";
import "./Tiles.css";
import Tile from "../Tile/Tile";

const Tiles = () => {
  const tileData = [
    {
      background: "https://wallpaperaccess.com/full/1691682.jpg",
      description:
        "Non enim fugiat mollit ipsum. Laboris sit sint ipsum dolor proident. Eu commodo aliqua laborum esse laborum ad cupidatat non duis. Veniam commodo esse amet quis ut anim mollit exercitation ut.",
    },
    {
      background:
        "https://coolwallpapers.me/picsup/5251360-workspace-workplace-working-desktop-mac-desk-calendar-simple-minimalist-clean-work-wooden-plant-pot-apple-pure-free-pictures.jpg",
      description:
        "Non enim fugiat mollit ipsum. Laboris sit sint ipsum dolor proident. Eu commodo aliqua laborum esse laborum ad cupidatat non duis. Veniam commodo esse amet quis ut anim mollit exercitation ut.",
    },
    {
      background:
        "https://coolwallpapers.me/picsup/5244271-computer-desk-screen-desktop-thunderbolt-home-office-work-office-mac-mini-iphone-earpod-headphone-apple-workplace-app-photoshop-keyboard-laptop-notebook-png-images.jpg",
      description:
        "Non enim fugiat mollit ipsum. Laboris sit sint ipsum dolor proident. Eu commodo aliqua laborum esse laborum ad cupidatat non duis. Veniam commodo esse amet quis ut anim mollit exercitation ut.",
    },
    {
      background:
        "https://coolwallpapers.me/picsup/5285991-paper-notebook-pen-book-work-black-workplace-business-black-and-white-write-block-plan-free-pictures.jpg",
      description:
        "Non enim fugiat mollit ipsum. Laboris sit sint ipsum dolor proident. Eu commodo aliqua laborum esse laborum ad cupidatat non duis. Veniam commodo esse amet quis ut anim mollit exercitation ut.",
    },
    {
      background:
        "https://coolwallpapers.me/picsup/3101147-book_calendar_close-up_diary_page_paper_paperclips_pen_planner_wood_workplace.jpg",
      description:
        "Non enim fugiat mollit ipsum. Laboris sit sint ipsum dolor proident. Eu commodo aliqua laborum esse laborum ad cupidatat non duis. Veniam commodo esse amet quis ut anim mollit exercitation ut.",
    },
    {
      background:
        "https://coolwallpapers.me/picsup/3099873-apple-computer_computer_creative_design_desktop_device_digital_display_imac_internet_keyboard_laptop_mac_mac-computer_modern_monitor_notebook_office_technology_work_workplace_workspace.jpg",
      description:
        "Non enim fugiat mollit ipsum. Laboris sit sint ipsum dolor proident. Eu commodo aliqua laborum esse laborum ad cupidatat non duis. Veniam commodo esse amet quis ut anim mollit exercitation ut.",
    },
    {
      background:
        "https://coolwallpapers.me/picsup/3106019-blur_composition_laptop_notebook_office_paper_pen_table_technology_workplace_workspace_writing.jpg",
      description:
        "Non enim fugiat mollit ipsum. Laboris sit sint ipsum dolor proident. Eu commodo aliqua laborum esse laborum ad cupidatat non duis. Veniam commodo esse amet quis ut anim mollit exercitation ut.",
    },
    {
      background:
        "https://coolwallpapers.me/picsup/3056862-blank_business_computer_creativity_desk_display_earphones_empty_keyboard_memo_message_office_paper_reminder_sticky-notes_table_technology_top_wooden_work_workplace_workspace.jpg",
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
