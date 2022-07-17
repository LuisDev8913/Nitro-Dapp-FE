import { Card } from "antd";
import { useMemo } from "react";
import { SmartContractAdminABI } from "../Constants/constants";
import { useMoralisQuery } from "react-moralis";
import Address from "../../Address/Address";
import ContractMethods from "./ContractMethods";
import { getEllipsisTxt } from "../../../helpers/formatters";
import { CONTRACT_INFO } from "../../../contract/contractInfo";

export default function Contract() {
    /**Live query */
    const { data } = useMoralisQuery("EthNFTTransfers", (query) => query, [], {
        live: true,
    });

    const displayedContractFunctions = useMemo(() => {
        if (!SmartContractAdminABI) return [];
        return SmartContractAdminABI.filter((method) => method["type"] === "function");
    }, []);


    return (
        <div className="cs-contract" style={{ margin: "auto", display: "flex", gap: "20px", marginTop: "25px", marginBottom: "25px", width: "90vw" }}>
            <Card
                title={
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        Your contract: {CONTRACT_INFO.contractName}
                        <Address avatar="left" copyable address={CONTRACT_INFO.contractAddress} size={8} />
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
                                title={`${index + 1}. ${each?.slugName}`}
                                formInputs={each?.inputs}
                                methodName={each?.name}
                                functionType={each?.stateMutability}
                                key={index}
                                desc={each.desc}
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
