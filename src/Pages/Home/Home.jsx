import React from "react";
import Chart from "../../components/Chart/Chart";
import Featured from "../../components/featured/Featured";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Table from "../../components/Table/Table";
import Widgets from "../../components/Widgets/Widgets";
import "./Home.scss";

const Home = () => {
  return (
    <div className='home'>
      <Sidebar />
      <div className='homeContainer'>
        <Navbar />
        <div className='widgets'>
          <Widgets type='user' />
          <Widgets type='order' />
          <Widgets type='earning' />
          <Widgets type='balance' />
        </div>
        <div className='charts'>
          <Featured />
          <Chart aspect={2 / 1} title={"Last 6 Months (Revenue)"} />
        </div>
        <div className='listContainer'>
          <div className='listTitle'>Latest Transactions</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
