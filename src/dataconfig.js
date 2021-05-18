import React from "react";
import DateWithFormat from "./DateWithFormat";

export const columns = [
  {
    title: "uuid",
    dataIndex: "uuid",
    key: "uuid",
    fixed: "left"
  },
  {
    title: "name",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "email",
    dataIndex: "email",
    key: "email"
  },
  {
    title: "phone",
    dataIndex: "phone",
    key: "phone"
  },
  {
    title: "location",
    dataIndex: "location",
    key: "location"
  },
  {
    title: "company",
    dataIndex: "company",
    key: "company"
  },
  {
    title: "updatedAt",
    dataIndex: "updatedAt",
    key: "updatedAt",
    render: (text, record) => (
      <DateWithFormat time={record && Number(record.updatedAt)} />
    )
  },
  {
    title: "expireDate",
    dataIndex: "expireDate",
    key: "expireDate",
    render: (text, record) => (
      <DateWithFormat time={record && record.expireDate} />
    )
  }
];
