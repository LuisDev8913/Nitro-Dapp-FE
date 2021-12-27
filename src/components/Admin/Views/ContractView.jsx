import { Card, Form, notification } from "antd";
import { useMemo, useState } from "react";
import { contractAddress, contractABI, contractName } from '../../../contract/contractInfo.json'
import { useMoralis, useMoralisQuery } from "react-moralis";
import Address from "../../Address/Address";
import ContractMethods from "./ContractMethods";
import { getEllipsisTxt } from "../../../helpers/formatters";

export default function Contract() {
    const { Moralis } = useMoralis();
    const [responses, setResponses] = useState({});


    /**Live query */
    const { data } = useMoralisQuery("userDate", (query) => query, [], {
        live: true,
    });


    const displayedContractFunctions = useMemo(() => {
        if (!contractABI) return [];
        return contractABI.filter((method) => method["type"] === "function");
    }, [contractABI]);

    const openNotification = ({ message, description }) => {
        notification.open({
            placement: "bottomRight",
            message,
            description,
            onClick: () => {
                console.log("Notification Clicked!");
            },
        });
    };

    return (
        <div style={{ margin: "auto", display: "flex", gap: "20px", marginTop: "25", width: "70vw" }}>
            <Card
                title={
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        Your contract: {contractName}
                        <Address avatar="left" copyable address={contractAddress} size={8} />
                    </div>
                }
                size="large"
                style={{
                    width: "60%",
                    boxShadow: "0 0.5rem 1.2rem rgb(189 197 209 / 20%)",
                    border: "1px solid #e7eaf3",
                    borderRadius: "0.5rem",
                }}
            >
                {
                    displayedContractFunctions.map((each, index) => {
                        return (
                            <ContractMethods
                                title={`${index + 1}. ${each?.name}`}

                            />
                        )
                    })
                }
            </Card>
            <Card
                title={"Contract Events"}
                size="large"
                style={{
                    width: "40%",
                    boxShadow: "0 0.5rem 1.2rem rgb(189 197 209 / 20%)",
                    border: "1px solid #e7eaf3",
                    borderRadius: "0.5rem",
                }}
            >
                {data.map((event, key) => (
                    <Card key={key} title={"Transfer event"} size="small" style={{ marginBottom: "20px" }}>
                        {getEllipsisTxt(event.attributes.transaction_hash, 14)}
                    </Card>
                ))}
            </Card>
        </div>
    );
}
