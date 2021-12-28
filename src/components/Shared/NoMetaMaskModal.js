import { Button, Card, Modal } from 'antd';
import React from 'react';
import { redirectToWebPage } from '../../utils/commonUtil';


const NoMetaMaskModal = ({ isModalVisible, closeModal, chainId, logout, account }) => {
    const RenderMetaMaskDisconnectedView = () => {
        return (
            <>
                No Wallet Found
                <Card
                    style={{
                        marginTop: "10px",
                        borderRadius: "1rem",
                    }}
                    bodyStyle={{ padding: "15px" }}
                >
                    <div style={{ marginTop: "10px", padding: "0 10px" }}>
                        <span style={{
                            fontSize: "16px",
                        }}>
                            You need to download Meta Mask
                        </span>
                        <Button
                            size="small"
                            type="primary"
                            style={{
                                width: "25%",
                                borderRadius: "0.5rem",
                                fontSize: "12px",
                                fontWeight: "500",
                                marginLeft: '20px'
                            }}
                            onClick={() => {
                                redirectToWebPage('https://metamask.io/')
                                closeModal()
                            }}
                        >
                            Download Now
                        </Button>
                    </div>
                </Card>

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
            width={"500px"}
            footer={null}
        >
            <RenderMetaMaskDisconnectedView />
        </Modal>
    );
}

export default NoMetaMaskModal