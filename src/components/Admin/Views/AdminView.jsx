import { Layout } from "antd";
import "./style.css";
import AdminHeader from "./AdminHeader";
import { Route, Routes } from "react-router";
import { RouteNames } from "../../../constants/routeNames";
import Contract from "./ContractView";
import UserData from "./UserData"
const Dummy = () => {
    return (
        <p style={{ backgroundColor: 'white' }}>THIS IS ROUTE</p>
    )
}
const AdminView = ({ isServerInfo }) => {
    return (
        <Layout style={{ height: "100vh", overflow: "auto", backgroundColor: 'black' }}>
            <AdminHeader />
            <div style={styles.content}>
                <Routes>
                    <Route path={`/${RouteNames.Admin.contract}`} element={<Contract />} />
                    <Route path={`/${RouteNames.Admin.users}`} element={<UserData />} />
                    <Route path={`/${RouteNames.Admin.NFTS}`} element={<Dummy />} />
                </Routes>
            </div>
        </Layout>
    );
};
export default AdminView;

const styles = {
    content: {
        display: "flex",
        justifyContent: "center",
        fontFamily: "Roboto, sans-serif",
        color: "#041836",
        marginTop: "64px",
        borderTop: '2px solid #8c6816',
    },
};

