import { Card } from "antd";
import { useMemo } from "react";
import { contractAddress, contractABI, contractName } from '../../../contract/contractInfo.json'
import { useMoralisQuery } from "react-moralis";
import Address from "../../Address/Address";
import ContractMethods from "./ContractMethods";
import { getEllipsisTxt } from "../../../helpers/formatters";
import UserMetaDataTable from "../../UserTable/UserMetaDataTable";

export default function UserData() {
    /**Live query */
    const { data } = useMoralisQuery("AAQIBNFT", (query) => query, [], {
        live: true,
    });


    const displayedContractFunctions = useMemo(() => {
        if (!contractABI) return [];
        return contractABI.filter((method) => method["type"] === "function");
    }, []);


    return (
        <div style={{width:'100%'}} >
          <UserMetaDataTable />
        </div>
    );
}
