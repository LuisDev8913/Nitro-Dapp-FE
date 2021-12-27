import { Button, Card, Form, Input, } from "antd";
import Text from "antd/lib/typography/Text";
import { useState } from "react";
import { ETH_NFT_PRICE, STATE_MUTABILITY_TYPES } from "../../../constants/enums";
import { getBalanceInWEI } from "../../../helpers/balanceConvertHelper";
import { executeSmartContractFunction } from "../../../helpers/moralisHelper";

const ContractMethods = ({ title, formInputs, methodName, functionType }) => {

    const [contractResponse, setContractResponse] = useState({
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

    return (
        <Card title={title} size="small" style={{ marginBottom: "20px" }}>
            <Form name={methodName} form={form} layout="vertical" onFinish={handleSubmit}>
                {formInputs?.map((input, key) => (
                    <Form.Item
                        label={`${input.name} (${input.type})`}
                        name={`${input.name}`}
                        required
                        style={{ marginBottom: "15px" }}
                        key={key}
                    >
                        <Input placeholder="input placeholder" />
                    </Form.Item>
                ))}
                <Form.Item style={{ marginBottom: "5px" }}>
                    {
                        contractResponse.response &&
                        <Text style={{ display: "block" }}>
                            {`Response: ${JSON.stringify(contractResponse.response)}`}
                        </Text>
                    }
                    <Button type="primary" htmlType="submit" disabled={contractResponse.loading} loading={contractResponse.loading}  >
                        {isReadFunction() ? "Read🔎" : "Transact💸"}
                    </Button>
                    {
                        (functionType === STATE_MUTABILITY_TYPES.payable || functionType === STATE_MUTABILITY_TYPES.nonpayable) &&
                        <span>GAS FEES MAY APPLY</span>
                    }
                </Form.Item>
            </Form>
        </Card>
    )
};

export default ContractMethods;
