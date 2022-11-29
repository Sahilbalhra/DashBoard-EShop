import React from "react";
import "./navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import ListIcon from "@mui/icons-material/List";
import { Avatar } from "@mui/material";

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='search'>
          <input type='text' placeholder='Search...' />
          <SearchIcon />
        </div>
        <div className='items'>
          <div className='item'>
            <LanguageIcon className='icon' />
            English
          </div>
          <div className='item'>
            <DarkModeIcon className='icon' />
          </div>
          <div className='item'>
            <NotificationsNoneIcon className='icon' />
            <div className="counter">1</div>
          </div>
          <div className='item'>
            <ChatBubbleIcon className='icon' />
            <div className="counter">1</div>
          </div>
          <div className='item'>
            <ListIcon className='icon' />
          </div>
          <div className='item'>
            <Avatar src="">A</Avatar>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
