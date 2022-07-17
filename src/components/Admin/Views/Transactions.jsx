import { Table } from 'antd';
import React, { useEffect, useState } from 'react'
import { useMoralis, useMoralisQuery } from 'react-moralis';

let columns = [
    {
        title: 'From Address',
        dataIndex: 'from_address',
    },
    {
        title: 'Hash',
        dataIndex: 'hash',
    },

    {
        title: 'To Address',
        dataIndex: 'to_address',
    },
    {
        title: 'Block Hash',
        dataIndex: 'block_hash',
    },
    {
        title: 'Nlock Number',
        dataIndex: 'block_number',
    },
    {
        title: 'Confirmed',
        dataIndex: 'confirmed',
    },
    {
        title: 'Gas',
        dataIndex: 'gas',
    },
    {
        title: 'Gas Price',
        dataIndex: 'gas_price',
    },
    {
        title: 'Receipt Cumulative Gas Used',
        dataIndex: 'receipt_cumulative_gas_used',
    },
    {
        title: 'Receipt Gas Used',
        dataIndex: 'receipt_gas_used',
    },
    {
        title: 'Receipt Status',
        dataIndex: 'receipt_status',
    },
    {
        title: 'Transaction Index',
        dataIndex: 'transaction_index',
    },
    {
        title: 'Value',
        dataIndex: 'value',
    },
    {
        title: 'Object Id',
        dataIndex: 'objectId',
    }
]

const Transactions = () => {
    const { account, isAuthenticating, isAuthenticated } = useMoralis();
    const [tableData, setTableData] = useState([]);
    const { isLoading, fetch } = useMoralisQuery("EthTransactions", (query) => query, [], {
        live: true,
    });
    useEffect(() => {
        fetch({ onSuccess: onSuccess })
    }, []);
    const onSuccess = (data) => {
        let parsedData = JSON.parse(JSON.stringify(data));
        parsedData.map(each => {
            if (each?.from_address === account) {
                return each
            }
        })
        setTableData(parsedData);
    }
    return (
        <div style={{ width: '100vw', padding: '1rem' }} >
            <div style={{ background: 'white' }}>
                <Table loading={isLoading} columns={columns} dataSource={tableData} scroll={{ x: 1500 }} />
            </div>
        </div>
    )
}

export default Transactions