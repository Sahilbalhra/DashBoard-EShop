import React from "react";
import "./Features.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Featured = () => {
  return (
    <div className='featured'>
      <div className='top'>
        <h1 className='title'>Total Revenue</h1>
        <MoreVertIcon fontSize='small' />
      </div>
      <div className='bottom'>
        <div className='featuredChart'>
          <CircularProgressbar
            value={70}
            text={"70%"}
            strokeWidth={5}
            styles={buildStyles({
              pathColor: `rgba(0, 28, 89, ${70 / 100})`,
              textColor: "rgb(0, 28, 89)",
              trailColor: "#7590d4",
              // backgroundColor: "rgb(79, 79, 109)",
            })}
          />
        </div>
        <p className='title'>Total Sales made today</p>
        <p className='amount'>₹ 420</p>
        <p className='desc'>
          Previous transaction processing. Last payments may not be included
        </p>
        <div className='summary'>
          <div className='item'>
            <div className='itemTitle'>Today</div>
            <div className='itemResult positive'>
              <KeyboardArrowUpIcon fontSize='small' />
              <div className='resultAmount'>₹ 12.4K</div>
            </div>
          </div>
          <div className='item'>
            <div className='itemTitle'>Last Week</div>
            <div className='itemResult negative'>
              <KeyboardArrowDownIcon fontSize='small' />
              <div className='resultAmount'>₹ 12.4K</div>
            </div>
          </div>
          <div className='item'>
            <div className='itemTitle'>Last Month </div>
            <div className='itemResult'>
              <KeyboardArrowUpIcon fontSize='small' />
              <div className='resultAmount'>₹ 12.4K</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
