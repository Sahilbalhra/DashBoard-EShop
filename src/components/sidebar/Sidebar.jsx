import React from "react";
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import LocalShippingSharpIcon from "@mui/icons-material/LocalShippingSharp";
import StoreSharpIcon from "@mui/icons-material/StoreSharp";
import CreditCardSharpIcon from "@mui/icons-material/CreditCardSharp";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import LogoutSharpIcon from "@mui/icons-material/LogoutSharp";
import PollIcon from "@mui/icons-material/Poll";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import PsychologyIcon from "@mui/icons-material/Psychology";
import SettingsIcon from "@mui/icons-material/Settings";
import AddModeratorIcon from "@mui/icons-material/AddModerator";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='top'>
        <Link to='/' style={{ textDecoration: "none" }}>
          <span className='logo'>Admin Panel</span>
        </Link>
      </div>
      <hr />
      <div className='center'>
        <ul>
          <p className='title'>Main</p>
          <li>
            <Link to='/' style={{ textDecoration: "none" }}>
              <span>
                <DashboardIcon className='icon' /> Dashboard
              </span>
            </Link>
          </li>
          <p className='title'>List</p>
          <li>
            <Link to='/users' style={{ textDecoration: "none" }}>
              <span>
                <PersonIcon className='icon' />
                Users
              </span>
            </Link>
          </li>
          <li>
            <Link to='/products' style={{ textDecoration: "none" }}>
              <span>
                <StoreSharpIcon className='icon' />
                Products
              </span>
            </Link>
          </li>
          <li>
            <span>
              <CreditCardSharpIcon className='icon' /> Orders
            </span>
          </li>
          <li>
            <span>
              <LocalShippingSharpIcon className='icon' />
              Delivery
            </span>
          </li>
          <p className='title'>Usefull</p>
          <li>
            <span>
              <PollIcon className='icon' /> Stats
            </span>
          </li>
          <li>
            <span>
              <NotificationsActiveIcon className='icon' /> Notifications
            </span>
          </li>
          <p className='title'>Service</p>
          <li>
            <span>
              <AddModeratorIcon className='icon' /> System Health
            </span>
          </li>
          <li>
            <span>
              <PsychologyIcon className='icon' /> Logs
            </span>
          </li>
          <li>
            <span>
              <SettingsIcon className='icon' />
              Settings
            </span>
          </li>
          <p className='title'>User</p>
          <li>
            <span>
              <AccountCircleSharpIcon className='icon' />
              Profile
            </span>
          </li>
          <li>
            <span>
              <LogoutSharpIcon className='icon' /> Logout
            </span>
          </li>
        </ul>
      </div>
      <div className='bottom'>
        <div className='colorOption'></div>
        <div className='colorOption'></div>
        <div className='colorOption'></div>
      </div>
    </div>
  );
};

export default Sidebar;
