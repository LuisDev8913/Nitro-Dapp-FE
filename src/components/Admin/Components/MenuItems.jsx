import { useLocation } from "react-router";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";
import { RouteNames } from "../../../constants/routeNames";

function MenuItems() {
    const { pathname } = useLocation();

    return (
        <Menu
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
            <Menu.Item key={RouteNames.Admin.transfers}>
                <NavLink style={{ color: 'white' }} to={RouteNames.Admin.transfers}>💸 Transfers</NavLink>
            </Menu.Item>
            <Menu.Item key={RouteNames.Admin.NFTS}>
                <NavLink style={{ color: 'white' }} to={RouteNames.Admin.NFTS}>🖼 NFTs</NavLink>
            </Menu.Item>

        </Menu>
    );
}

export default MenuItems;
