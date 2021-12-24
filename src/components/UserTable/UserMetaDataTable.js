
import React from 'react'
import { useMoralis } from "react-moralis";
import { useMoralisQuery } from "react-moralis";
import { Table } from 'antd';
import { columns } from "./colums";

const UserMetaDataTable = () => {
  const { data, error, isLoading } = useMoralisQuery("userDate", (query) => query, [], {
    live: true,
  });
  console.log(data , " GET DATA *************************** TABLE ")
  const TableData = () => {
    let dataSouce = data.map((row ,index) => {
      return {
        key: index,
        address: row.attributes.address,
        block_hash: row.attributes.block_hash,
        block_number: row.attributes.block_number,
        block_timestamp: new Date(row.attributes.block_timestamp).toDateString(),
        metaData: row.attributes.metaData,
        uid: row.attributes.uid,
        transaction_hash: row.attributes.transaction_hash
      }
    });
    return (
      <Table columns={columns} dataSource={dataSouce} size="small" />
    )
  }
  return (
    <>
      {isLoading ? <div style={{ background: 'white' }}>
        <div>  TABLE IS LOADING !!!!!!  </div>
      </div> : null}

      {error ? <div style={{ background: 'white' }}>
        <div>  SomeThing WENT WRONG  </div>
      </div> : null}

      {data ? <div style={{ background: 'white' }}>
        {TableData()}
      </div> : null}

    </>
  )
}

export default UserMetaDataTable;