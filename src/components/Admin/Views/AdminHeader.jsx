import React from 'react'
import { Layout } from "antd";
import MenuItems from '../Components/MenuItems';
import { NitidLogo } from '../../../assets/img';
import TokenPrice from '../../TokenPrice';
import NativeBalance from '../../NativeBalance/NativeBalance';
import Account from '../../Account/Account';
const { Header } = Layout;
const AdminHeader = () => {
    return (
        <Header style={styles.header}>
            <img src={NitidLogo} style={{ height: '100%' }} alt="Nitro LOGO" />
            <MenuItems />
            <div style={styles.headerRight}>
                <TokenPrice
                    address="0x1f9840a85d5af5bf1d1762f925bdaddc4201f984"
                    chain="eth"
                    image="https://cloudflare-ipfs.com/ipfs/QmXttGpZrECX5qCyXbBQiqgQNytVGeZW5Anewvh2jc4psg/"
                    size="40px"
                />
                <NativeBalance />
                <Account />
            </div>
        </Header>
    )
}


const styles = {
    content: {
        display: "flex",
        justifyContent: "center",
        fontFamily: "Roboto, sans-serif",
        color: "#041836",
        marginTop: "130px",
        padding: "10px",
    },
    header: {
        position: "fixed",
        zIndex: 1,
        width: "100%",
        background: "#fff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontFamily: "Roboto, sans-serif",
        borderBottom: "2px solid rgba(0, 0, 0, 0.06)",
        padding: "0 10px",
        boxShadow: "0 1px 10px rgb(151 164 175 / 10%)",
        backgroundColor: 'black'
    },
    headerRight: {
        display: "flex",
        gap: "20px",
        alignItems: "center",
        fontSize: "15px",
        fontWeight: "600",
    },
};

export default AdminHeader
