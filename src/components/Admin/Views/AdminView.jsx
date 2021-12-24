import { Layout } from "antd";
import "./style.css";
import Text from "antd/lib/typography/Text";
import MenuItems from "../Components/MenuItems";
import AdminHeader from "./AdminHeader";


const AdminView = ({ isServerInfo }) => {
    return (
        <Layout style={{ height: "100vh", overflow: "auto" }}>
            <AdminHeader />
            <div style={styles.content}>

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
        marginTop: "130px",
        padding: "10px",
    },
};