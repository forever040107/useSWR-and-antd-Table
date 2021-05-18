import React from "react";
import useGetDataSourceWithSWR from "./useGetDataWithSWR";
import { Table } from "antd";
import { columns } from "./dataconfig";

export default function App() {
  const {
    fetching,
    dataSource,
    condition,
    onReady,
    onUpdateCondition
  } = useGetDataSourceWithSWR({
    url: "https://8dc2a4ef-952c-445b-bbaa-2748a1d94716.mock.pstmn.io/getUser"
    // defaultSortKey: 'StartTime',
    // autoFetch: true,
  });

  console.log("dataSource --->", dataSource && dataSource.data);

  return (
    <div className="App">
      <Table
        style={{ padding: "20px" }}
        dataSource={dataSource && dataSource.data}
        columns={columns}
        pagination={false}
      />
    </div>
  );
}
