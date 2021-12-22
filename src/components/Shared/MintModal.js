import React, { useState } from 'react'
import { Card, Checkbox, Form, Modal } from 'antd'
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};
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
const MintModal = ({ isVisible, closeModal }) => {

    const [form] = Form.useForm();
    const [isInfoChecked, setIsInfoCheck] = useState(false)
    const onFinish = (values) => {
        console.log("values", values)
    }

    console.log("isInfoChecked", isInfoChecked)

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
                        name="agreement"
                        valuePropName="checked"
                    >
                        <Checkbox onChange={(e) => setIsInfoCheck(e.target.checked)}>
                            Add Info
                        </Checkbox>
                    </Form.Item>
                </Form>
            </Card>
        </Modal >
    )
}

export default MintModal
