import { useMoralis } from "react-moralis";
import { getEllipsisTxt } from "../../helpers/formatters";
import { useContext, useState } from "react";
import Blockie from "../Blockie";
import { useMetaMaskConnection } from "../../hooks";
import NoMetaMaskModal from "../Shared/NoMetaMaskModal";
import AccountInfoModal from "../Shared/AccountInfoModal";
import DappContext from "../../context";
import { Tooltip } from "antd";
import { getInValidNetworkError } from "../../helpers/networks";
const styles = {
  account: {
    height: "42px",
    padding: "0 15px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "max-content",
    borderRadius: "12px",
    backgroundColor: "#8c681680",
    cursor: "pointer",
  },
  text: {
    color: "#21BF96",
    marginBottom: "0"
  },
  connector: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    height: "auto",
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "20px 5px",
    cursor: "pointer",
  },
  icon: {
    alignSelf: "center",
    fill: "rgb(40, 13, 95)",
    flexShrink: "0",
    marginBottom: "8px",
    height: "30px",
  },
};

function Account() {
  const { isMetaMaskInstalled } = useMetaMaskConnection()
  const { authenticate, isAuthenticated, logout, chainId, account } = useMoralis();
  const { isValidChain } = useContext(DappContext);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isMetaMaskModalVisible, setIsMetaMaskModalVisible] = useState(false);

  const handleWalletConnect = () => {
    if (!isMetaMaskInstalled) {
      setIsMetaMaskModalVisible(true)
    }
    authenticate({ signingMessage: "Connect with NITID" })
  }

  const closeMetaMaskModal = () => {
    setIsMetaMaskModalVisible(false)
  }

  if (!isAuthenticated) {
    return (
      <>
        <div
          style={styles.account}
          className="authButton"
          onClick={handleWalletConnect}
        >
          <p style={styles.text}>Authenticate</p>
        </div>
        <NoMetaMaskModal
          isModalVisible={isMetaMaskModalVisible}
          closeModal={closeMetaMaskModal}
          chainId={chainId}
          account={account}
          logout={logout}
        />
      </>
    );
  }
  const closeModal = () => {
    setIsModalVisible(false)
  }

  return (
    <>
      <div style={styles.account} onClick={() => setIsModalVisible(true)} className="authButton">
        <p style={{ lineHeight: '40px', color: '#fff', marginBottom: '0', marginRight: "5px", ...styles.text }}>
          {
            isValidChain ? getEllipsisTxt(account, 6) :
              <Tooltip title={getInValidNetworkError()}>
                {"IN VALID NETWORK CONNECTED"}
              </Tooltip>
          }
        </p>
        <Blockie currentWallet scale={3} />
      </div>
      <AccountInfoModal
        isModalVisible={isModalVisible}
        closeModal={closeModal}
        chainId={chainId}
        account={account}
        logout={logout}
      />
    </>
  );
}

export default Account;
