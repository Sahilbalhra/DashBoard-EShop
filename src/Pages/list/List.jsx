import React from "react";
import "./list.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import DataTable from "../../components/datatable/DataTable";

const List = () => {
  return (
    <div className='list'>
      <Sidebar />
      <div className='listContainer'>
        <Navbar />
        <DataTable />
      </div>
    </div>
  );
};

export default List;
