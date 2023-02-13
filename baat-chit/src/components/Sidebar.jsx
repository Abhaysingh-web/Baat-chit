import React from "react";
import Navbar from "../components/Navbar";
import Search from "../components/search";
import Chats from "../components/Chats";

const sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <Navbar />
        <Search />
        <Chats />
      </div>
    </>
  );
};

export default sidebar;
