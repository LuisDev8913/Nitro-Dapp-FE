import { SelectOutlined } from '@ant-design/icons';
import { Button, Card, Modal } from 'antd';
import React from 'react';
import { getExplorer } from '../../helpers/networks';
import Address from '../Address/Address';


const AccountInfoModal = ({ isModalVisible, closeModal, chainId, logout, account }) => {

    const RenderMetaMaskConnectedView = () => {
        return (
            <>
                Account
                <Card
                    style={{
                        marginTop: "10px",
                        borderRadius: "1rem",
                    }}
                    bodyStyle={{ padding: "15px" }}
                >
                    <Address avatar="left" size={6} copyable style={{ fontSize: "20px" }} />
                    <div style={{ marginTop: "10px", padding: "0 10px" }}>
                        <a href={`${getExplorer(chainId)}/address/${account}`} target="_blank" rel="noreferrer">
                            <SelectOutlined style={{ marginRight: "5px" }} />
                            View on Explorer
                        </a>
                    </div>
                </Card>
                <Button
                    size="large"
                    type="primary"
                    style={{
                        width: "100%",
                        marginTop: "10px",
                        borderRadius: "0.5rem",
                        fontSize: "16px",
                        fontWeight: "500",
                    }}
                    onClick={() => {
                        logout();
                        closeModal()
                    }}
                >
                    Disconnect Wallet
                </Button>
            </>
        )
    }

    return (
        <Modal
            visible={isModalVisible}
            onCancel={closeModal}
            bodyStyle={{
                padding: "15px",
                fontSize: "17px",
                fontWeight: "500",
            }}
            style={{ fontSize: "16px", fontWeight: "500" }}
            width={"400px"}
            footer={null}
        >
            <RenderMetaMaskConnectedView />
        </Modal>
    );
}

export default AccountInfoModal