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
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import PsychologyIcon from "@mui/icons-material/Psychology";
import SettingsIcon from "@mui/icons-material/Settings";
import AddModeratorIcon from "@mui/icons-material/AddModerator";

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='top'>
        <span className='logo'>Admin Panel</span>
      </div>
      <hr />
      <div className='center'>
        <ul>
          <p className='title'>Main</p>
          <li>
            <span>
              <DashboardIcon className='icon' /> Dashboard
            </span>
          </li>
          <p className='title'>List</p>
          <li>
            <span>
              <PersonIcon className='icon' />
              Users
            </span>
          </li>
          <li>
            <span>
              <StoreSharpIcon className='icon' />
              Products
            </span>
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
