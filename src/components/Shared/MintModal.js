import React, { useContext, useState } from 'react'
import { Button, Card, Checkbox, Form, Input, Modal, Radio, Select, InputNumber } from 'antd'
import { isRequiredMessage } from './ValidationMessages';
import { ClothingSizeTypes, ETH_NFT_PRICE, GenderTypes } from '../../constants/enums';
import { STATE_MUTABILITY_TYPES } from "../../constants/enums"

import Cities from "../../JSONData/citiesData.json";
import States from "../../JSONData/statesData.json";
import Countries from "../../JSONData/countries.json";
import { getBalanceInWEI } from '../../helpers/balanceConvertHelper';
import DappContext from '../../context';
import useSmartContractFunction from '../../hooks/useSmartContractFunction';

const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};

const MintFormLabels = {
    Name: { key: "name", label: "Name" },
    StreetAddress: { key: "streetAddress", label: "Street/Address" },
    City: { key: "city", label: "City" },
    Province: { key: "province", label: "Province" },
    PostalCode: { key: "postalCode", label: "Postal Code" },
    Country: { key: "country", label: "Country" },
    Gender: { key: "gender", label: "Gender" },
    ClothingSize: { key: "clothingSize", label: "Clothing Size" },
    Count: { key: "_count", label: "Mint Count" }
}

const MintModal = ({ isVisible, closeModal }) => {
    const { executeSmartContractFunction } = useSmartContractFunction();
    const { getUserSmartContractInfo } = useContext(DappContext);
    const [mintResponse, setMintResponse] = useState({
        loading: false,
        response: null
    })
    const { Option } = Select;

    const provincesData = States;
    const citiesData = Cities;
    const countriesData = Countries.countries


    const [form] = Form.useForm();
    const [isInfoChecked, setIsInfoCheck] = useState(false)
    const onFinish = async (values) => {
        const paramObject = {
            _count: values?._count,
        }
        paramObject["metaData"] = JSON.stringify({
            "name": values?.name || "",
            "streetAddress": values?.streetAddress || "",
            "country": values?.country || "",
            "province": values?.province || "",
            "city": values?.city || "",
            "postalCode": values?.postalCode || "",
            "gender": values?.gender || "",
            "clothingSize": values?.clothingSize || "",
        })
        const ethValue = getBalanceInWEI(values?._count * ETH_NFT_PRICE)
        await executeSmartContractFunction(STATE_MUTABILITY_TYPES.payable, setMintResponse, "mint", paramObject, ethValue)
        if (getUserSmartContractInfo) {
            getUserSmartContractInfo()
            closeModal()
        }
    }

    const [country, setCountry] = useState(null);
    const [province, setProvince] = useState(null);
    const [city, setCity] = useState(null);
    const handleCountryChange = value => {
        setCountry(value.toString());
        setCity(null);
        setProvince(null);
    };
    const handleProvinceChange = value => {
        setProvince(value.toString());
        setCity(null);
    };
    const handleCityChange = value => {
        setCity(value.toString())
    }

    const isInfoFieldsDisabled = () => {
        return !isInfoChecked
    }



    return (
        <Modal
            visible={isVisible}
            title="Mint Nitid NFT"
            centered
            onCancel={closeModal}
            width={800}
        >
            <Card>
                <Form
                    {...formItemLayout}
                    form={form}
                    name="register"
                    onFinish={onFinish}
                    scrollToFirstError
                >
                    <Form.Item
                        name="AddInfo"
                        valuePropName="checked"
                    >
                        <Checkbox onChange={(e) => setIsInfoCheck(e.target.checked)}>
                            Add Info
                        </Checkbox>
                    </Form.Item>
                    <Form.Item
                        name={MintFormLabels.Name.key}
                        label={MintFormLabels.Name.label}
                        rules={[
                            {
                                required: isInfoFieldsDisabled() ? false : true,
                                message: isRequiredMessage(MintFormLabels.Name.label),
                            },
                        ]}
                    >
                        <Input disabled={isInfoFieldsDisabled()} />
                    </Form.Item>
                    <Form.Item
                        name={MintFormLabels.StreetAddress.key}
                        label={MintFormLabels.StreetAddress.label}
                        rules={[
                            {
                                required: isInfoFieldsDisabled() ? false : true,
                                message: isRequiredMessage(MintFormLabels.StreetAddress.label),
                            },
                        ]}
                    >
                        <Input disabled={isInfoFieldsDisabled()} />
                    </Form.Item>
                    <Form.Item
                        name={MintFormLabels.Country.key}
                        label={MintFormLabels.Country.label}
                        rules={[
                            {
                                required: isInfoFieldsDisabled() ? false : true,
                                message: isRequiredMessage(MintFormLabels.Country.label),
                            },
                        ]}
                    >
                        <Select
                            optionFilterProp="children"
                            showSearch={true}
                            disabled={isInfoFieldsDisabled()}
                            onChange={handleCountryChange}>
                            {countriesData.map(country => (
                                <Option key={country.id}>{country.name}</Option>
                            ))}
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name={MintFormLabels.Province.key}
                        label={MintFormLabels.Province.label}
                        rules={[
                            {
                                required: isInfoFieldsDisabled() ? false : true,
                                message: isRequiredMessage(MintFormLabels.Province.label),
                            },
                        ]}
                    >
                        <Select
                            value={province}
                            optionFilterProp="children"
                            showSearch={true}
                            disabled={!country || isInfoFieldsDisabled()}
                            onChange={handleProvinceChange}>
                            {country && provincesData[country].length > 0 && provincesData[country].map(province => (
                                <Option key={province.id}>{province.name}</Option>
                            ))}
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name={MintFormLabels.City.key}
                        label={MintFormLabels.City.label}
                        rules={[

                            {
                                required: isInfoFieldsDisabled() ? false : true,
                                message: isRequiredMessage(MintFormLabels.City.label),
                            },
                        ]}
                    >
                        <Select
                            value={city}
                            optionFilterProp="children"
                            showSearch={true}
                            disabled={!province || isInfoFieldsDisabled()}
                            onChange={handleCityChange}>
                            {province && citiesData[province] && citiesData[province].length > 0 && citiesData[province].map(city => (
                                <Option key={city.id}>{city.name}</Option>
                            ))}
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name={MintFormLabels.PostalCode.key}
                        label={MintFormLabels.PostalCode.label}
                        rules={[
                            {
                                required: isInfoFieldsDisabled() ? false : true,
                                message: isRequiredMessage(MintFormLabels.PostalCode.label),
                            },
                        ]}
                    >
                        <Input disabled={isInfoFieldsDisabled()} />
                    </Form.Item>

                    <Form.Item
                        name={MintFormLabels.Gender.key}
                        label={MintFormLabels.Gender.label}
                        rules={[{
                            required: isInfoFieldsDisabled() ? false : true,
                            message: isRequiredMessage(MintFormLabels.Gender.label),
                        }]}
                    >
                        <Radio.Group disabled={isInfoFieldsDisabled()}>
                            <Radio value={GenderTypes.Male}>{GenderTypes.Male}</Radio>
                            <Radio value={GenderTypes.Female}>{GenderTypes.Female}</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item
                        name={MintFormLabels.ClothingSize.key}
                        label={MintFormLabels.ClothingSize.label}
                        rules={[{
                            required: isInfoFieldsDisabled() ? false : true,
                            message: isRequiredMessage(MintFormLabels.ClothingSize.label),
                        }]}
                    >
                        <Radio.Group disabled={isInfoFieldsDisabled()}>
                            <Radio.Button value={ClothingSizeTypes.Small}>{ClothingSizeTypes.Small}</Radio.Button>
                            <Radio.Button value={ClothingSizeTypes.Medium}>{ClothingSizeTypes.Medium}</Radio.Button>
                            <Radio.Button value={ClothingSizeTypes.Large}>{ClothingSizeTypes.Large}</Radio.Button>
                            <Radio.Button value={ClothingSizeTypes.ExtraLarge}>{ClothingSizeTypes.ExtraLarge}</Radio.Button>
                        </Radio.Group>
                    </Form.Item>
                    <span
                        className="ant-form-text"> Only 2 NFTs are allowed be MINT</span>

                    <Form.Item
                        label={MintFormLabels.Count.label}
                        initialValue={1}
                        name={MintFormLabels.Count.key}
                        rules={[{
                            required: true,
                            message: isRequiredMessage(MintFormLabels.Count.label),
                        }]}
                    >
                        <InputNumber min={1} max={2} />
                    </Form.Item>
                    <Form.Item >
                        <Button loading={mintResponse.loading} type="primary" htmlType="submit">
                            MINT
                        </Button>
                    </Form.Item>

                </Form>
            </Card>
        </Modal >
    )
}

export default MintModal
