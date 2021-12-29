import { InfoCircleOutlined } from "@ant-design/icons/lib/icons";
import { Button, Card, Form, Input, message, Tooltip, } from "antd";
import Text from "antd/lib/typography/Text";
import { useState } from "react";
import { ETH_NFT_PRICE, STATE_MUTABILITY_TYPES } from "../../../constants/enums";
import { getBalanceInWEI } from "../../../helpers/balanceConvertHelper";
import { getEllipsisTxt } from "../../../helpers/formatters";
import useSmartContractFunction from "../../../hooks/useSmartContractFunction";
import { isValidAddress } from "../../../utils/web3Util";
import MultiTagInput from "../../Shared/MultiTagInput/MultiTagInput";

const ContractMethods = ({ title, formInputs, methodName, functionType, desc }) => {
    const [userAddressArray, setUserAddressArray] = useState([]);
    const { executeSmartContractFunction } = useSmartContractFunction();
    const [contractResponse, setContractResponse] = useState({
        loading: false,
        response: null
    })
    const [whiteListResponse, setWhiteListResponse] = useState({
        loading: false,
        response: null
    })
    const [form] = Form.useForm();
    const handleSubmit = (values) => {
        executeSmartContractFunction(functionType, setContractResponse, methodName, values, getETHValueForPayableMethod())
    }

    const isReadFunction = () => {
        return functionType === STATE_MUTABILITY_TYPES.view;
    }

    const getETHValueForPayableMethod = () => {
        if (functionType === STATE_MUTABILITY_TYPES.payable) {
            const count = form.getFieldValue("_count");
            return getBalanceInWEI(count * ETH_NFT_PRICE)
        }
        return null
    }

    const RenderToolTip = () => {
        return (
            <Tooltip title={desc}>
                <InfoCircleOutlined />
            </Tooltip>
        )
    }

    const updateUserAddressArray = (newData, formKey) => {
        const clone = [...newData];
        setUserAddressArray(clone);
        form.setFieldsValue({ [`${formKey}`]: clone });
    }

    const validateNewAddressItem = async (addressString) => {
        let isValid = isValidAddress(addressString);
        if (!isValid) {
            message.error(`${addressString} is not valid ETH Address`);
            return false;
        }
        else {
            let isAlreadyWhiteList = await executeSmartContractFunction(STATE_MUTABILITY_TYPES.view, setWhiteListResponse, "isWhitelisted", { "_address": addressString });
            if (isAlreadyWhiteList) {
                message.error(`Address ${getEllipsisTxt(addressString, 6)} already whitelisted`);
                return false;
            }
            return true
        }

    }

    return (
        <Card extra={<RenderToolTip />} title={methodName} size="small" style={{ marginBottom: "20px" }}>
            <Form name={methodName} form={form} layout="vertical" onFinish={handleSubmit}>
                {formInputs?.map((input, key) => (
                    <Form.Item
                        label={`${input.name} (${input.type})`}
                        name={`${input.name}`}
                        required
                        style={{ marginBottom: "15px" }}
                        key={key}
                    >
                        {
                            input.type === "address[]" ?
                                <MultiTagInput
                                    updateData={updateUserAddressArray}
                                    data={userAddressArray}
                                    formKey={`${input.name}`}
                                    validateAddItem={validateNewAddressItem}
                                    loading={whiteListResponse.loading}
                                />
                                :
                                <Input placeholder="input placeholder" />
                        }
                    </Form.Item>
                ))}
                <Form.Item style={{ marginBottom: "5px" }}>
                    {
                        contractResponse.response !== null &&
                        <Text style={{ display: "block" }}>
                            {`Response: ${JSON.stringify(contractResponse.response)}`}
                        </Text>
                    }
                    <Button type="primary" htmlType="submit" disabled={contractResponse.loading} loading={contractResponse.loading}  >
                        {isReadFunction() ? "Read🔎" : "Transact💸"}
                    </Button>
                    {
                        (functionType === STATE_MUTABILITY_TYPES.payable || functionType === STATE_MUTABILITY_TYPES.nonpayable) &&
                        <span className="required">Gas fees may apply</span>
                    }
                </Form.Item>
            </Form>
        </Card>
    )
};

export default ContractMethods;
