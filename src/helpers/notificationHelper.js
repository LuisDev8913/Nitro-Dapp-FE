import { notification } from "antd";

export const openNotification = ({ message, description, placement = NOTIFICATION_PLACEMENT.bottomRight }) => {
    notification.open({
        placement,
        message,
        description,
        onClick: () => {
            console.log("Notification Clicked!");
        },
    });
};


export const NOTIFICATION_PLACEMENT = {
    "bottomRight": "bottomRight",
    "bottomLeft": "bottomLeft",
    "topLeft": "topLeft",
    "topRight": "topRight"
}