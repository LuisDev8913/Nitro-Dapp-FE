import { useLocation } from "react-router";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";
import { RouteNames } from "../../../constants/routeNames";

function MenuItems() {
    const { pathname } = useLocation();

    return (
        <Menu
            className="cs-menu"
            theme="light"
            mode="horizontal"
            style={{
                display: "flex",
                fontSize: "17px",
                fontWeight: "500",
                width: "100%",
                justifyContent: "center",
                backgroundColor: 'black',
                border: 0
            }}
            defaultSelectedKeys={[pathname]}
        >
            <Menu.Item key={RouteNames.Admin.contract}>
                <NavLink style={{ color: 'white' }} to={RouteNames.Admin.contract}>🚀 Contract</NavLink>
            </Menu.Item>
            <Menu.Item key={RouteNames.Admin.users}>
                <NavLink style={{ color: 'white' }} to={RouteNames.Admin.users}>💸 User Data</NavLink>
            </Menu.Item>
        </Menu>
    );
}

export default MenuItems;
