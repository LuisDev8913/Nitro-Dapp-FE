import { useNativeBalance } from "react-moralis";

function NativeBalance(props) {
    const { data: balance } = useNativeBalance(props);

    return <div className="nativeBalanceText" style={{ textAlign: "center", whiteSpace: "nowrap", color: '#fff' }}>{balance.formatted}</div>;
}

export default NativeBalance;
