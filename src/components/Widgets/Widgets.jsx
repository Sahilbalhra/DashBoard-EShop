import React from "react";
import "./widgets.scss";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
const Widgets = ({ type }) => {
  let data;

  //temp
  let amount = 100;
  let diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See ALL Users",
        icon: (
          <PersonIcon
            className='icon'
            style={{ color: "crimson", backgroundColor: "#ff7373" }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View All Orders",
        icon: (
          <ShoppingCartIcon
            className='icon'
            style={{ color: "#043c04", backgroundColor: "#bbf9c4" }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "ERANINGS",
        isMoney: true,
        link: "View net Earnings",
        icon: (
          <CurrencyRupeeIcon
            className='icon'
            style={{ color: "#ffd50a", backgroundColor: "#f1f1d7" }}
          />
        ),
      };
      break;

    case "balance":
      // eslint-disable-next-line no-unused-vars
      data = {
        title: "Balance",
        isMoney: true,
        link: "See details",
        icon: (
          <AccountBalanceIcon
            className='icon'
            style={{ color: "rgb(0 28 89)", backgroundColor: "#5072d5" }}
          />
        ),
      };
      break;

    default:
      break;
  }

  return (
    <div className='widget'>
      <div className='left'>
        <span className='title'>{data.title}</span>
        <span className='counter'>
          {data.isMoney && "₹"} {amount}
        </span>
        <span className='link'>{data.link}</span>
      </div>
      <div className='right'>
        <div className='percentage positive'>
          <ArrowUpwardIcon />
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widgets;
