
import React from 'react'
import { useMoralisQuery } from "react-moralis";
import { Table } from 'antd';
import { columns } from "./colums";
import { Row, Col } from 'antd';

const UserMetaDataTable = () => {
  const { data, error, isLoading } = useMoralisQuery("NitidMetaData", (query) => query, [], {
    live: true,
  });
  const isJSON = (str) => {
    try {
      return (JSON.parse(str) && !!str);
    } catch (e) {
      return false;
    }
  }
  const TableData = () => {
    let dataSouce = data.map((row, index) => {
      let MetaData = isJSON(row.attributes.metaData);
      let name = null;
      let streetAddress = null;
      let country = null;
      let province = null;
      let city = null;
      let postalCode = null;
      let gender = null;
      let clothingSize = null;
      console.log(MetaData, " MetaData ")
      if (MetaData) {
        MetaData = JSON.parse(row.attributes.metaData);
        name = MetaData.name;
        streetAddress = MetaData.streetAddress;
        country = MetaData.country;
        province = MetaData.province;
        city = MetaData.city;
        postalCode = MetaData.postalCode;
        gender = MetaData.gender;
        clothingSize = MetaData.clothingSize
      }
      return {
        key: index,
        address: row.attributes.address,
        block_hash: row.attributes.block_hash,
        block_number: row.attributes.block_number,
        block_timestamp: new Date(row.attributes.block_timestamp).toDateString(),
        metaData: row.attributes.metaData,
        uid: row.attributes.uid,
        transaction_hash: row.attributes.transaction_hash,
        name,
        streetAddress,
        country,
        province,
        city,
        postalCode,
        gender,
        clothingSize
      }
    });
    return (

      <Row className="row">
        <Col span={50}>

          <Table loading={isLoading} columns={columns} dataSource={dataSouce} scroll={{ x: 1500 }} />
        </Col>



      </Row>


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